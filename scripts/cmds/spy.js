const axios = require("axios");

const baseApiUrl = async () => {
  try {
    const base = await axios.get(
      `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
    );
    return base.data.api;
  } catch (e) {
    // Fallback API URL if the GitHub link is dead
    return "https://api.dipto.info"; 
  }
};

module.exports = {
  config: {
    name: "spy",
    aliases: ["whoishe", "whoisshe", "whoami", "atake"],
    version: "1.1",
    role: 0,
    author: "Dipto",
    Description: "Get user information and profile photo",
    category: "information",
    countDown: 10,
  },

  onStart: async function ({ event, message, usersData, api, args }) {
    const uid1 = event.senderID;
    const uid2 = event.mentions ? Object.keys(event.mentions)[0] : null;
    let uid;

    // Determine target UID
    if (args[0]) {
      if (/^\d+$/.test(args[0])) {
        uid = args[0];
      } else {
        const match = args[0].match(/profile\.php\?id=(\d+)/);
        if (match) uid = match[1];
      }
    }

    if (!uid) {
      uid = event.type === "message_reply" ? event.messageReply.senderID : uid2 || uid1;
    }

    let babyTeach = 0;
    try {
      const baseUrl = await baseApiUrl();
      const response = await axios.get(`${baseUrl}/baby?list=all`);
      const dataa = response.data;
      if (dataa?.teacher?.teacherList) {
        babyTeach = dataa.teacher.teacherList.find((t) => t[uid])?.[uid] || 0;
      }
    } catch (err) {
      console.log("Baby API Error: Using default 0");
    }

    try {
      const userInfo = await api.getUserInfo(uid);
      const user = userInfo[uid];
      const avatarUrl = await usersData.getAvatarUrl(uid);
      const userData = await usersData.get(uid);
      const money = userData.money || 0;

      let genderText;
      switch (user.gender) {
        case 1: genderText = "𝙶𝚒𝚛𝚕🙋🏻‍♀"; break;
        case 2: genderText = "Boy🙋🏻‍♂"; break;
        default: genderText = "𝙶𝚊𝚢🤷🏻‍♂";
      }

      const allUser = await usersData.getAll();
      const rank = allUser.slice().sort((a, b) => (b.exp || 0) - (a.exp || 0)).findIndex(u => u.userID === uid) + 1;
      const moneyRank = allUser.slice().sort((a, b) => (b.money || 0) - (a.money || 0)).findIndex(u => u.userID === uid) + 1;

      const userInformation = `
╭────[ 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎 ]
├‣ 𝙽𝚊𝚖𝚎: ${user.name}
├‣ 𝙶𝚎𝚗𝚍𝚎𝚛: ${genderText}
├‣ 𝚄𝙸𝙳: ${uid}
├‣ 𝙲𝚕𝚊𝚜𝚜: ${user.type ? user.type.toUpperCase() : "𝙽𝚘𝚛𝚖𝚊𝚕 𝚄𝚜𝚎𝚛🥺"}
├‣ 𝚄𝚜𝚎𝚛𝚗𝚊𝚖𝚎: ${user.vanity || "𝙽𝚘𝚗𝚎"}
├‣ 𝙿𝚛𝚘𝚏𝚒𝚕𝚎 𝚄𝚁𝙻: ${user.profileUrl}
├‣ 𝙱𝚒𝚛𝚝𝚑𝚍𝚊𝚢: ${user.isBirthday || "𝙿𝚛𝚒𝚟𝚊𝚝𝚎"}
├‣ 𝙽𝚒𝚌𝚔𝙽𝚊𝚖𝚎: ${user.alternateName || "𝙽𝚘𝚗𝚎"}
╰‣ 𝙵𝚛𝚒𝚎𝚗𝚍 𝚠𝚒𝚝𝚑 𝚋𝚘𝚝: ${user.isFriend ? "𝚈𝚎𝚜✅" : "𝙽𝚘❎"}

╭─────[ 𝐔𝐒𝐄𝐑 𝐒𝐓𝐀𝐓𝐒 ]
├‣ 𝙼𝚘𝚗𝚎𝚢: $${formatMoney(money)}
├‣ 𝚁𝚊𝚗𝚔: #${rank}/${allUser.length}
├‣ 𝙼𝚘𝚗𝚎𝚢 𝚁𝚊𝚗𝚔: #${moneyRank}/${allUser.length}
╰‣ 𝙱𝚊𝚋𝚢 𝚝𝚎𝚊𝚌𝚑: ${babyTeach}`;

      message.reply({
        body: userInformation,
        attachment: await global.utils.getStreamFromURL(avatarUrl),
      });
    } catch (error) {
      return message.reply(`Error: Could not retrieve info for UID ${uid}.`);
    }
  },
};

function formatMoney(num) {
  const units = ["", "K", "M", "B", "T", "Q", "Qi", "Sx", "Sp", "Oc", "N", "D"];
  let unit = 0;
  while (num >= 1000 && ++unit < units.length) num /= 1000;
  return num.toFixed(1).replace(/\.0$/, "") + units[unit];
}
