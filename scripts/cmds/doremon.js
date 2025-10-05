const axios = require("axios");

module.exports = {
  config: {
    name: "dorevid",
    version: "2.0",
    author: "Kshitiz (Dot Fixed by MR-JISAN)",
    countDown: 20,
    role: 0,
    shortDescription: "get doremon video",
    longDescription: "get random doremon video safely without 429 error",
    category: "doremon",
    guide: "{pn} doremonvdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    // Loading message
    const loadingMessage = await message.reply({
      body: "💙 Loading random Doraemon video... Please wait a moment! 🎬",
    });

    // Doraemon video links
    const links = [
      "https://i.imgur.com/OOp9CPF.mp4",
      "https://i.imgur.com/qdbkuMH.mp4",
      "https://i.imgur.com/pntn2az.mp4",
      "https://i.imgur.com/TogW7BE.mp4",
      "https://i.imgur.com/vSWaSMM.mp4",
      "https://i.imgur.com/W9F0Ejp.mp4",
      "https://i.imgur.com/FKjoziV.mp4",
      "https://i.imgur.com/JnT7nft.mp4",
      "https://i.imgur.com/hncSHRn.mp4",
      "https://i.imgur.com/HRQxLDB.mp4",
      "https://i.imgur.com/Bl6bp1v.mp4",
      "https://i.imgur.com/VcZpVjz.mp4",
      "https://i.imgur.com/y8PxXD6.mp4",
      "https://i.imgur.com/n2bm4jv.mp4",
      "https://i.imgur.com/hcjmnR1.mp4",
      "https://i.imgur.com/iy8YIQy.mp4",
      "https://i.imgur.com/kU50YdZ.mp4",
      "https://i.imgur.com/Hzej3xc.mp4",
      "https://i.imgur.com/ajzgjPY.mp4",
      "https://i.imgur.com/sKUqFkM.mp4",
      "https://i.imgur.com/Qbpry0f.mp4",
      "https://i.imgur.com/G6JfDua.mp4",
      "https://i.imgur.com/wdfw4uX.mp4",
      "https://i.imgur.com/2AG6Xx5.mp4",
      "https://i.imgur.com/NE8sV7G.mp4",
      "https://i.imgur.com/4LrJXPx.mp4",
      "https://i.imgur.com/8JSMtQ9.mp4",
      "https://i.imgur.com/1toITNz.mp4",
      "https://i.imgur.com/KlpeoUK.mp4",
      "https://i.imgur.com/JYJj77U.mp4",
      "https://i.imgur.com/yBUTdIC.mp4",
      "https://i.imgur.com/TAsKjQs.mp4",
      "https://i.imgur.com/tmIUDPB.mp4",
    ];

    // Prevent duplicate videos
    const availableVideos = links.filter(v => !this.sentVideos.includes(v));
    if (availableVideos.length === 0) this.sentVideos = [];

    const randomVideo = availableVideos[Math.floor(Math.random() * availableVideos.length)];
    this.sentVideos.push(randomVideo);

    // Delay for safe streaming
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(1500);

    // Stream video safely
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
        body: "💙 𝗘𝗡𝗝𝗢𝗬 𝗧𝗛𝗘 𝗗𝗢𝗥𝗔𝗘𝗠𝗢𝗡 𝗩𝗜𝗗𝗘𝗢 💛\nNostalgia hits different 🥹💫",
        attachment: stream,
      });

      setTimeout(() => api.unsendMessage(loadingMessage.messageID), 3000);

    } catch (err) {
      console.error("⚠️ Failed to send video:", err);
      await message.reply("❌ ভিডিও লোড করতে সমস্যা হয়েছে, দয়া করে পরে আবার চেষ্টা করুন 💙");
      setTimeout(() => api.unsendMessage(loadingMessage.messageID), 3000);
    }
  },
};
