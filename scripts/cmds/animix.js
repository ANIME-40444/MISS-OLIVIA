const axios = require("axios");

module.exports = {
  config: {
    name: "animix",
    version: "2.0",
    author: "MR-JISAN (Dot Fixed)",
    countDown: 20,
    role: 0,
    shortDescription: "get animix video",
    longDescription: "get random animix video safely without 429 error",
    category: "anime",
    guide: "{pn} animixvdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    // Loading message
    const loadingMessage = await message.reply({
      body: " 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐫𝐚𝐧𝐝𝐨𝐦 𝐀𝐧𝐢𝐦𝐢𝐱 𝐯𝐢𝐝𝐞𝐨... 𝐏𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭! 🕕 🔖",
    });

    // Video links
    const links = [
      "https://i.imgur.com/RXO9A0O.mp4",
      "https://i.imgur.com/8fN0IUj.mp4",
      "https://i.imgur.com/16g5s0t.mp4",
      "https://i.imgur.com/vtIsthM.mp4",
      "https://i.imgur.com/GeCQyBC.mp4",
      "https://i.imgur.com/01fjtWz.mp4",
      "https://i.imgur.com/NkWwJrZ.mp4",
      "https://i.imgur.com/DfG99Nw.mp4",
      "https://i.imgur.com/RONx85H.mp4",
      "https://i.imgur.com/itqwsMV.mp4",
      "https://i.imgur.com/R9uouvf.mp4",
      "https://i.imgur.com/nJk0b3I.mp4",
      "https://i.imgur.com/7UtNIEN.mp4",
      "https://i.imgur.com/sgMF3gt.mp4",
      "https://i.imgur.com/cg2Ekj8.mp4",
      "https://i.imgur.com/5Pv3EJO.mp4",
      "https://i.imgur.com/G1iNixZ.mp4",
      "https://i.imgur.com/eYicjKd.mp4",
      "https://i.imgur.com/QnNagn3.mp4",
      "https://i.imgur.com/PsK8TcE.mp4",
      "https://i.imgur.com/HRIUtFQ.mp4",
      "https://i.imgur.com/FW6ZxNH.mp4",
      "https://i.imgur.com/fzcGU9u.mp4",
      "https://i.imgur.com/8FDTH8u.mp4",
      "https://i.imgur.com/gPGTHa3.mp4",
      "https://i.imgur.com/y8nBIR3.mp4",
      "https://i.imgur.com/fYUfiqw.mp4",
      "https://i.imgur.com/JGBRHoT.mp4",
      "https://i.imgur.com/OwU3CvT.mp4",
      "https://i.imgur.com/6p41mHb.mp4",
      "https://i.imgur.com/ej0dWyt.mp4",
      "https://i.imgur.com/Z0v2EZk.mp4",
      "https://i.imgur.com/CLCDfKd.mp4",
      "https://i.imgur.com/mSGjukm.mp4",
      "https://i.imgur.com/SzXaKOT.mp4",
      "https://i.imgur.com/7ieUR1n.mp4",
      "https://i.imgur.com/dBmR9v6.mp4",
      "https://i.imgur.com/CCK8TQQ.mp4",
    ];

    // Avoid duplicate videos
    const availableVideos = links.filter(v => !this.sentVideos.includes(v));
    if (availableVideos.length === 0) this.sentVideos = [];

    const randomVideo = availableVideos[Math.floor(Math.random() * availableVideos.length)];
    this.sentVideos.push(randomVideo);

    // Delay function (to avoid rate limit)
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000); // wait 2 seconds before sending

    // Function to safely stream video
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

    // Try sending the video with fallback
    try {
      const stream = await getSafeStream(randomVideo);
      if (!stream) throw new Error("Video stream unavailable.");

      await message.reply({
        body: "💖 𝗘𝗡𝗝𝗢𝗬 𝗧𝗛𝗔 𝗔𝗡𝗜𝗠𝗜𝗫 𝟰𝗞 𝗩𝗜𝗗𝗘𝗢 🖤✨\nFeel the Anime 🍃",
        attachment: stream,
      });

      setTimeout(() => api.unsendMessage(loadingMessage.messageID), 3000);

    } catch (err) {
      console.error("⚠️ Failed to send video:", err);
      await message.reply("❌ ভিডিও লোড করতে সমস্যা হয়েছে, দয়া করে পরে আবার চেষ্টা করুন ❤️");
      setTimeout(() => api.unsendMessage(loadingMessage.messageID), 3000);
    }
  },
};
