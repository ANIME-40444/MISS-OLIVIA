const axios = require("axios");

module.exports = {
  config: {
    name: "anilove",
    version: "2.0",
    author: "MR JISAN",
    countDown: 20,
    role: 0,
    shortDescription: "get anilove video",
    longDescription: "get random anime love video safely without 429 error",
    category: "anime",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    // Loading Message
    const loadingMessage = await message.reply({
      body: "🌿❤️‍🩹 𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗟𝗼𝘃𝗲 𝗩𝗶𝗱𝗲𝗼...",
    });

    // Video list
    const links = [
      "https://i.imgur.com/KEMLTVA.mp4",
      "https://i.imgur.com/THEpgaq.mp4",
      "https://i.imgur.com/jEgidhe.mp4",
      "https://i.imgur.com/UJJM3wy.mp4",
      "https://i.imgur.com/fHpspMq.mp4",
      "https://i.imgur.com/VOfSwDM.mp4",
      "https://i.imgur.com/4RgSbA9.mp4",
      "https://i.imgur.com/aE1L7Ff.mp4",
      "https://i.imgur.com/qglW4X2.mp4",
      "https://i.imgur.com/r0wb0no.mp4",
      "https://i.imgur.com/2myFkMm.mp4",
      "https://i.imgur.com/TwxBlNf.mp4",
      "https://i.imgur.com/fnMH3nV.mp4",
      "https://i.imgur.com/kSxsvLy.mp4",
      "https://i.imgur.com/jMia38Y.mp4",
      "https://i.imgur.com/nwdl5V0.mp4",
      "https://i.imgur.com/LMiDitG.mp4",
      "https://i.imgur.com/6Y5GpNL.mp4",
      "https://i.imgur.com/iXGvV1P.mp4",
      "https://i.imgur.com/3QPs5zm.mp4",
      "https://i.imgur.com/Dig5WZL.mp4",
      "https://i.imgur.com/W48CRoY.mp4",
      "https://i.imgur.com/5HJmV4q.mp4",
      "https://i.imgur.com/Crlcn4j.mp4",
      "https://i.imgur.com/bghFXyO.mp4",
      "https://i.imgur.com/RdZWyvb.mp4",
      "https://i.imgur.com/gHD2DVN.mp4",
      "https://i.imgur.com/PhLBUtI.mp4",
      "https://i.imgur.com/bHDxh4D.mp4",
      "https://i.imgur.com/1NR92Qz.mp4",
      "https://i.imgur.com/F5mVPSV.mp4",
      "https://i.imgur.com/QyipOt1.mp4",
    ];

    // Avoid duplicate video repetition
    let availableVideos = links.filter(video => !this.sentVideos.includes(video));
    if (availableVideos.length === 0) this.sentVideos = [];

    const randomVideo = availableVideos[Math.floor(Math.random() * availableVideos.length)];
    this.sentVideos.push(randomVideo);

    // Small delay to prevent rate-limit
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Function to get video stream safely
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

    // Try sending the video
    try {
      const stream = await getSafeStream(randomVideo);
      if (!stream) throw new Error("Video stream unavailable.");

      await message.reply({
        body: "[ 𝗘𝗡𝗝𝗢𝗬 💞 ]",
        attachment: stream,
      });

      // Remove the loading message
      setTimeout(() => api.unsendMessage(loadingMessage.messageID), 3000);
    } catch (err) {
      console.error("❌ Failed to send video:", err.message || err);
      await message.reply("⚠️ ভিডিও লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন ❤️");
      setTimeout(() => api.unsendMessage(loadingMessage.messageID), 3000);
    }
  },
};
