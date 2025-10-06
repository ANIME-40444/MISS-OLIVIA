const axios = require("axios");

module.exports = {
  config: {
    name: "obitovid",
    version: "1.0",
    author: "MR-JISAN//Dot not author change",
    countDown: 20,
    role: 0,
    shortDescription: "get obito video",
    longDescription: "get random obito video",
    category: "anime",
    guide: "{pn} obitovdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "𝙻𝚘𝚊𝚍𝚒𝚗𝚐 𝙾𝚏 𝚛𝚊𝚗𝚍𝚘𝚖 𝚘𝚋𝚒𝚝𝚘 𝚟𝚒𝚍𝚎𝚘...💔⏳",
    });

    // Cleaned list of links (fixed syntax, removed stray commas/quotes and duplicates)
    const links = [
      "https://i.imgur.com/N2VfafU.mp4", // video credit (yt)
      "https://i.imgur.com/tE6A9Dt.mp4",
      "https://i.imgur.com/K0AyJnx.mp4",
      "https://i.imgur.com/nzFOdzm.mp4",
      "https://i.imgur.com/hDDXXqC.mp4",
      "https://i.imgur.com/b7WAX5C.mp4",
      "https://i.imgur.com/1nNTZ2W.mp4",
      "https://i.imgur.com/JnT7nft.mp4",
      "https://i.imgur.com/mHX3nrl.mp4",
      "https://i.imgur.com/oVEDD1N.mp4",
      "https://i.imgur.com/ajM8YMD.mp4",
      "https://i.imgur.com/Irc0VYi.mp4",
      "https://i.imgur.com/JK16uUn.mp4",
      "https://i.imgur.com/7lMpUKs.mp4",
      "https://i.imgur.com/foFjugz.mp4",
      "https://i.imgur.com/EnoOvGZ.mp4",
      "https://i.imgur.com/u4KnlkS.mp4",
      "https://i.imgur.com/4FzA2cD.mp4",
      "https://i.imgur.com/9iEPtbz.mp4",
      "https://i.imgur.com/hoe6Wjz.mp4",
      "https://i.imgur.com/1iu55g7.mp4",
      "https://i.imgur.com/JTjZtb8.mp4",
      "https://i.imgur.com/7Lu5clA.mp4",
      "https://i.imgur.com/5cLlsbF.mp4",
      "https://i.imgur.com/SsVWsX4.mp4",
      "https://i.imgur.com/qETfRD6.mp4",
      "https://i.imgur.com/PY2cQIb.mp4",
      "https://i.imgur.com/3mULpH6.mp4",
      "https://i.imgur.com/ucwfKiQ.mp4",
      "https://i.imgur.com/hfVJoor.mp4",
      "https://i.imgur.com/pEqwPnx.mp4",
      "https://i.imgur.com/2YcWdDS.mp4",
      "https://i.imgur.com/lISO0Qh.mp4"
    ];

    // Remove duplicates and keep consistent array
    const normalizedLinks = Array.from(new Set(links));

    // Build available list excluding recently sent
    let availableVideos = normalizedLinks.filter((v) => !this.sentVideos.includes(v));
    if (availableVideos.length === 0) {
      this.sentVideos = [];
      availableVideos = normalizedLinks.slice();
    }

    // randomize order to try
    availableVideos = availableVideos.sort(() => Math.random() - 0.5);

    // helper delay
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    // safe fetch with retries, backoff and 429 handling
    async function fetchStream(url, attempts = 3) {
      for (let i = 1; i <= attempts; i++) {
        try {
          const res = await axios({
            url,
            method: "GET",
            responseType: "stream",
            timeout: 20000,
            headers: { "User-Agent": "Mozilla/5.0 (Node.js)" },
            validateStatus: (s) => s < 500 // treat 4xx as resolvable (we'll check)
          });

          // handle 429 explicitly
          if (res.status === 429) {
            // exponential backoff then retry
            await delay(2000 * i);
            continue;
          }

          const contentType = (res.headers["content-type"] || "").toLowerCase();
          if (!contentType.includes("video") && !contentType.includes("application/octet-stream")) {
            // not a video stream, treat as failure
            res.data.destroy && res.data.destroy();
            throw new Error(`Invalid content-type: ${contentType}`);
          }

          return res.data; // readable stream
        } catch (err) {
          // last attempt -> return null
          if (i === attempts) return null;
          // small backoff before retry
          await delay(1000 * i);
        }
      }
      return null;
    }

    // Try videos one by one (with small jitter) until one works
    let chosenStream = null;
    let chosenUrl = null;
    for (let idx = 0; idx < availableVideos.length; idx++) {
      const url = availableVideos[idx];
      // small jitter to avoid hitting rate limits
      await delay(700 + Math.floor(Math.random() * 800));
      const stream = await fetchStream(url, 2);
      if (stream) {
        chosenStream = stream;
        chosenUrl = url;
        break;
      }
    }

    // Send result or fallback message
    try {
      if (chosenStream) {
        // record sent video to avoid immediate repeat
        this.sentVideos.push(chosenUrl);
        await message.reply({
          body:
            "𝗟𝗲𝗮𝗿𝗻 𝗳𝗿𝗼𝗺 𝗼𝗯𝗶𝘁𝗼 𝘁𝗼 𝘄𝗵𝗼𝗺 𝗹𝗼𝘃𝗲 𝗶𝘀 𝗯𝗲𝗰𝗮𝘂𝘀𝗲 𝗵𝗲 𝗰𝗼𝘂𝗹𝗱 𝗵𝗮𝘃𝗲 𝗱𝗶𝗲𝗱 𝗳𝗼𝗿 𝗵𝗶𝘀 𝗹𝗼𝘃𝗲..🥀 💔 😅 😥",
          attachment: chosenStream,
        });
      } else {
        // no stream succeeded
        await message.reply({
          body: "❌ কিছু একটা সমস্যা হয়েছে! আবার চেষ্টা করো ভাই।",
        });
      }
    } catch (err) {
      console.error("Send failed:", err && (err.message || err));
      try {
        await message.reply({
          body: "❌ কিছু একটা সমস্যা হয়েছে! আবার চেষ্টা করো ভাই।",
        });
      } catch (_) {}
    } finally {
      // unsend loading message after a short delay
      setTimeout(() => {
        try {
          api.unsendMessage(loadingMessage.messageID);
        } catch (e) {
          /* ignore */
        }
      }, 3000);
    }
  },
};
