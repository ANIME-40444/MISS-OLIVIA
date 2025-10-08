const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "pending",
    version: "1.4",
    author: "MR JISAN",
    countDown: 5,
    role: 2,
    shortDescription: "Approve or remove pending threads safely",
    longDescription: "Approve or cancel group join requests (pending threads) with retry logic",
    category: "Goat-Admin"
  },

  langs: {
    en: {
      invaildNumber: "%1 is not a valid number",
      cancelSuccess: "Successfully refused %1 thread(s)!",
      approveSuccess: "🎉 Successfully approved %1 thread(s)! 🎉",
      cantGetPendingList: "Unable to fetch the pending list!",
      returnListPending: "»「PENDING」«❮ Total threads awaiting approval: %1 ❯\n\n%2",
      returnListClean: "「PENDING」There are no threads in the pending list."
    }
  },

  // 🌀 Reliable Imgur fetch with retry
  getStreamFromURL: async function (url, retries = 3, delay = 2000) {
    const tempPath = path.join(__dirname, "cache", `${Date.now()}.jpg`);
    fs.ensureDirSync(path.join(__dirname, "cache"));

    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios({
          url,
          method: "GET",
          responseType: "stream",
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
          },
          timeout: 10000
        });

        const writer = fs.createWriteStream(tempPath);
        response.data.pipe(writer);

        await new Promise((resolve, reject) => {
          writer.on("finish", resolve);
          writer.on("error", reject);
        });

        const stream = fs.createReadStream(tempPath);
        stream.on("close", () => fs.unlinkSync(tempPath));
        return stream;
      } catch (err) {
        if (err.response && err.response.status === 429) {
          console.warn(`Rate limit hit, retrying in ${delay}ms... (${i + 1}/${retries})`);
          await new Promise(res => setTimeout(res, delay));
        } else {
          console.error(err.message);
          break;
        }
      }
    }

    const fallback = path.join(__dirname, "cache", "fallback.jpg");
    if (!fs.existsSync(fallback)) fs.writeFileSync(fallback, "");
    return fs.createReadStream(fallback);
  },

  // 🌀 Safe getThreadList with retry
  safeGetThreadList: async function (api, limit = 100, folder = ["PENDING"], retries = 3, delay = 3000) {
    for (let i = 0; i < retries; i++) {
      try {
        return await api.getThreadList(limit, null, folder);
      } catch (e) {
        console.warn(`ThreadList fetch failed, retry ${i + 1}/${retries}: ${e.message}`);
        if (i < retries - 1) await new Promise(res => setTimeout(res, delay));
        else throw e;
      }
    }
  },

  onReply: async function ({ api, event, Reply, getLang, commandName }) {
    if (String(event.senderID) !== String(Reply.author)) return;
    const { body, threadID, messageID } = event;
    let count = 0;

    try {
      if (isNaN(body) && (body.indexOf("c") === 0 || body.indexOf("cancel") === 0)) {
        const index = body.slice(1).split(/\s+/);
        for (const singleIndex of index) {
          if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > Reply.pending.length)
            return api.sendMessage(getLang("invaildNumber", singleIndex), threadID, messageID);

          await api.removeUserFromGroup(api.getCurrentUserID(), Reply.pending[singleIndex - 1].threadID);
          count++;
          await new Promise(res => setTimeout(res, 1500)); // 1.5s delay
        }
        return api.sendMessage(getLang("cancelSuccess", count), threadID, messageID);
      } else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
          if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > Reply.pending.length)
            return api.sendMessage(getLang("invaildNumber", singleIndex), threadID, messageID);

          const approvedThread = Reply.pending[singleIndex - 1];
          const approvalMessage = `😘 𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇 𝘼𝙋𝙋𝙍𝙊𝙑𝙀

🩵 𝙂𝙍𝙊𝙐𝙋 𝙉𝘼𝙈𝙀: ${approvedThread.name}

✅ 𝘼𝘿𝙈𝙄𝙉 𝘼𝙋𝙋𝙍𝙊𝙑𝙀𝘿 𝙏𝙃𝙄𝙎 𝙂𝘾  

👑 𝘼𝘿𝙈𝙄𝙉: 𝙈𝙍-𝙅𝙄𝙎𝘼𝙉 🌸           
🔗 𝙊𝙒𝙉𝙀𝙍 𝙇𝙄𝙉𝙆: https://www.facebook.com/XAIKO.JISAN?mibextid=ZbWKwL

• Use 'bot help' to see all commands  
• Have a nice morning 💋  

⚠ 𝘿𝙤 𝙉𝙤𝙩 𝙎𝙥𝙖𝙢 𝙩𝙝𝙚 𝘽𝙤𝙩 ⚠`;

          const imgStream = await module.exports.getStreamFromURL("https://i.imgur.com/HEyjxNW.jpeg");
          await api.sendMessage({ body: approvalMessage, attachment: imgStream }, approvedThread.threadID);
          count++;
          await new Promise(res => setTimeout(res, 1500));
        }
        return api.sendMessage(getLang("approveSuccess", count), threadID, messageID);
      }
    } catch (e) {
      console.error("Error in onReply:", e.message);
      return api.sendMessage("⚠ Temporary failure, please try again later.", threadID, messageID);
    }
  },

  onStart: async function ({ api, event, getLang, commandName }) {
    const { threadID, messageID } = event;
    let msg = "", index = 1;

    try {
      const spam = (await module.exports.safeGetThreadList(api, 100, ["OTHER"])) || [];
      const pending = (await module.exports.safeGetThreadList(api, 100, ["PENDING"])) || [];
      const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

      for (const single of list) msg += `${index++}/ ${single.name} (${single.threadID})\n`;

      if (list.length > 0) {
        return api.sendMessage(getLang("returnListPending", list.length, msg), threadID, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
          });
        }, messageID);
      } else {
        return api.sendMessage(getLang("returnListClean"), threadID, messageID);
      }
    } catch (e) {
      console.error("Error in onStart:", e.message);
      return api.sendMessage(getLang("cantGetPendingList"), threadID, messageID);
    }
  }
};
