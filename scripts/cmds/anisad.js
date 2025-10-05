const axios = require("axios");

module.exports = {
  config: {
    name: "anisad",
    version: "2.0",
    author: "Jisan",
    countDown: 20,
    role: 0,
    shortDescription: "get animesad video",
    longDescription: "get random animesad video safely without 429 error",
    category: "anime",
    guide: "{pn} animesadvdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "❤‍🩹💔 𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝗮𝗱 𝗩𝗶𝗱𝗲𝗼...",
    });

    const links = [
      "https://i.imgur.com/KYQVypn.mp4",
      "https://i.imgur.com/08ybSnM.mp4",
      "https://i.imgur.com/jUzLyGB.mp4",
      "https://i.imgur.com/1t1niaf.mp4",
      "https://i.imgur.com/NP1IL0H.mp4",
      "https://i.imgur.com/6FzFvXx.mp4",
      "https://i.imgur.com/TrowcZE.mp4",
      "https://i.imgur.com/7tnwruc.mp4",
      "https://i.imgur.com/iihjqy3.mp4",
      "https://i.imgur.com/HRQxLDB.mp4",
      "https://i.imgur.com/s1uzgjk.mp4",
      "https://i.imgur.com/WCJdp9h.mp4",
      "https://i.imgur.com/wew7RyE.mp4",
      "https://i.imgur.com/fT2O3IJ.mp4",
      "https://i.imgur.com/aA2AXwq.mp4",
      "https://i.imgur.com/NYNaIfj.mp4",
      "https://i.imgur.com/KQlpUfs.mp4",
      "https://i.imgur.com/QFgGWZq.mp4",
      "https://i.imgur.com/OriHUQN.mp4",
      "https://i.imgur.com/uMOE7Xi.mp4",
      "https://i.imgur.com/cfPJZU0.mp4",
      "https://i.imgur.com/mzhgLoP.mp4",
      "https://i.imgur.com/NCxfbwZ.mp4",
      "https://i.imgur.com/onVoQpN.mp4",
      "https://i.imgur.com/SK0Z27l.mp4",
      "https://i.imgur.com/b1TgMoa.mp4",
      "https://i.imgur.com/x7ZB7Tp.mp4",
      "https://i.imgur.com/Z3KKoUD.mp4",
      "https://i.imgur.com/JSWk1ta.mp4",
      "https://i.imgur.com/Ki58Yx7.mp4",
      "https://i.imgur.com/aaCwOFN.mp4",
      "https://i.imgur.com/aouUDdm.mp4",
      "https://i.imgur.com/z8ORjet.mp4",
      "https://i.imgur.com/HliQ0p1.mp4",
      "https://i.imgur.com/BdZGQqz.mp4",
    ];

    // Avoid duplicate repetition
    let availableVideos = links.filter(video => !this.sentVideos.includes(video));
    if (availableVideos.length === 0) this.sentVideos = [];

    const randomVideo = availableVideos[Math.floor(Math.random() * availableVideos.length)];
    this.sentVideos.push(randomVideo);

    // Small delay to prevent rate-limit
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Safe video stream function
    async function getSafeStream(url) {
      try {
        const response = await axios({
          url,
          method: "GET",
          responseType: "stream",
          timeout: 15000,
          headers: { "User-Agent": "Mozilla/5.0" },
        });
        return response.data;
      } catch (error) {
        console.error("❌ Stream Error:", error.message);
        return null;
      }
    }

    try {
      const stream = await getSafeStream(randomVideo);
      if (!stream) throw new Error("Video stream unavailable.");

      await message.reply({
        body: " [ 𝗪𝗮𝘁𝗰𝗵 𝗧𝗵𝗮 𝗔𝗻𝗶𝗺𝗲 𝗦𝗮𝗱 𝗕𝗿𝗼𝗸𝗲𝗻 𝗩𝗶𝗱𝗲𝗼 🥹🫀❤‍🩹] ",
        attachment: stream,
      });

      setTimeout(() => api.unsendMessage(loadingMessage.messageID), 3000);
    } catch (err) {
      console.error("❌ Failed to send video:", err.message || err);
      await message.reply("⚠️ ভিডিও লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন ❤️");
      setTimeout(() => api.unsendMessage(loadingMessage.messageID), 3000);
    }
  },
};
