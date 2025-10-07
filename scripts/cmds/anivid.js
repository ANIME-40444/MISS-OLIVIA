const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.join(__dirname, ".env") });

module.exports = {
  config: {
    name: "anivid",
    aliases: [],
    author: "MR-JISAN ☠️",
    version: "2.1",
    shortDescription: "Send random anime video",
    category: "fun",
  },

  onStart: async function ({ api, event, message }) {
    // Environment check
    const AES_KEY = process.env.AES_KEY;
    const encFile = path.join(__dirname, "anime.enc");

    if (!fs.existsSync(".env")) return message.reply("❌ AES_KEY set করা হয়নি! কারণ: `.env` ফাইল পাওয়া যায়নি।");
    if (!AES_KEY) return message.reply("❌ AES_KEY set করা হয়নি! কারণ: `.env` ফাইল থেকে লোড হয়নি।");
    if (!fs.existsSync(encFile)) return message.reply("❌ anime.enc ফাইল পাওয়া যায়নি!");

    try {
      // এনক্রিপশন ডিক্রিপ্ট
      const key = Buffer.from(AES_KEY, "hex");
      const [iv64, data64] = fs.readFileSync(encFile, "utf8").split(":");
      const iv = Buffer.from(iv64, "base64");
      const encrypted = Buffer.from(data64, "base64");
      const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
      const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
      const posts = JSON.parse(decrypted.toString()).posts;

      // র‍্যান্ডম ভিডিও সিলেকশন
      const randomGroup = posts[Math.floor(Math.random() * posts.length)];
      const randomUrl = randomGroup[Math.floor(Math.random() * randomGroup.length)];

      if (!randomUrl) return message.reply("❌ ভিডিও লোড করতে পারিনি! সম্ভবত `anime.enc` ফাইল খালি বা ভুল।");

      // ভিডিও পাঠানো
      await message.reply({
        body: `🎬 Random Anime Video URL: ${randomUrl}\n💡 Open in browser or use directly in bot.`,
      });

    } catch (e) {
      console.error(e);
      message.reply(`❌ ভিডিও লোড করতে সমস্যা হয়েছে। কারণ: ${e.message}`);
    }
  },
};
