module.exports.config = {
    name: "murgi2",
    version: "2.5",
    role: 1,
    author: "XAIKO-JISAN",
    description: "রিপ্লাই বা মেনশন দিলেই ফাস্ট গালি শুরু হবে (Custom Text)",
    category: "nsfw",
    guide: "{pn} @mention / reply to message",
    coolDown: 10
};

module.exports.onStart = async function ({ api, event }) {
    let uid;

    // 👉 রিপ্লাই চেক
    if (event.type === "message_reply") {
        uid = event.messageReply.senderID;
    }
    // 👉 মেনশন চেক
    else if (Object.keys(event.mentions).length > 0) {
        uid = Object.keys(event.mentions)[0];
    }
    // 👉 কিছুই না দিলে এরর
    else {
        return api.sendMessage("বস জিসান, ওই রেনডি মাগির মেয়ে কে একটা মেনশন দেন বা রিপ্লাই করেন! ☠", event.threadID, event.messageID);
    }

    let userInfo = await api.getUserInfo(uid);
    let name = userInfo[uid].name;
    let arraytag = [{ id: uid, tag: name }];

    var a = function (text) { 
        api.sendMessage(text, event.threadID); 
    };

    // --- প্রথম মেসেজ ---
    a("তোকে চুদলো তোর মার ৫০৫ নাম্বার ভাতার 🐥");

    // --- ফাস্ট টাইমিং সেট করা হয়েছে ---
    setTimeout(() => { a({ body: "ভোদাই জানে চোদার মজা তোর মাকে জিজ্ঞেস কর কেমন দিছিলাম চোদা 🥰। নিশি রাতে তোর মাকে চুদে পেয়েছিলাম অনেক আনন্দ।🤩✊🏻 " + name, mentions: arraytag }) }, 1500);
    setTimeout(() => { a({ body: "খাংকির মেয়া তর কচি বোন রে চুদি 😍.. " + name, mentions: arraytag }) }, 3000);
    setTimeout(() => { a({ body: "মাদারচোদ তর আম্মু পম পম খাংকির মেয়ে 🐰 " + name, mentions: arraytag }) }, 4500);
    setTimeout(() => { a({ body: "খাংকির মেয়া তর কচি ভুদায় কামর দিমু 💔! তুর মারে আটলান্টিক মহাসাগরের মাঝামাঝি গলা টিপে ধরে চুদতে চুদতে ভুদার মাসিক চেন্জ করমো 🙈 " + name, mentions: arraytag }) }, 6000);
    setTimeout(() => { a({ body: "খাংকি মাগির মেয়ে কথা ক কম কম তর আম্মু রে চুদে বানামু আইটেম বোম " + name, mentions: arraytag }) }, 7500);
    setTimeout(() => { a({ body: "depression থেকেও তর মাইরে চু*** দি 🤬 " + name, mentions: arraytag }) }, 9000);
    setTimeout(() => { a({ body: "তর আম্মু রে আচার এর লোভ দেখিয়ে আমি চুদি মাগির মেয়া🤬 " + name, mentions: arraytag }) }, 10500);
    setTimeout(() => { a({ body: "বান্দির মেয়া তর কচি বোনের ভুদা ফাক কর থুতু দিয়ে ভুদায় দন ডুকামু 🤟 " + name, mentions: arraytag }) }, 12000);
    setTimeout(() => { a({ body: "বান্দি মাগির পোলা তর আম্মু রে চুদি তর দুলা ভাই এর কান্দে ফেলে 🤝 " + name, mentions: arraytag }) }, 13500);
    setTimeout(() => { a({ body: "উফফফ খাদ্দামা মাগির মেয়া তর আম্মুর কালা ভুদায় আমার মাল আউট তোর কচি বোন রে উপ্তা করে এবার চুদবো 💉। খানকি মাগির পোলা তুর মারে চাইনা রেস্তোরাঁ নিয়ে জাইয়া রেসিপি লোভ দেখিয়ে চুদি তুই কি রাগ করবি 😅🤣💋🥵💋😹💋 " + name, mentions: arraytag }) }, 15500);
    setTimeout(() => { a({ body: "অনলাইনে গালি বাজ হয়ে গেছত মাগির মেয়া এমন চুদা দিমু লাইফ টাইম মনে রাখভি JISAN তর বাপ মাগির ছেলে 😘। " + name, mentions: arraytag }) }, 17500);
    setTimeout(() => { a({ body: "বাতিজা শুন তর আম্মু রে চুদলে রাগ করবি না তো আচ্ছা জা রাগ করিস না তর আম্মুর কালা ভুদায় আর চুদলাম না তো বোন এর জামা টা খুলে দে ✋ খানকি মাগির পোলা তুর মারে চাইনা রেস্তোরাঁ নিয়ে জাইয়া রেসিপি লোভ দেখিয়ে চুদি তুই কি রাগ করবি 😅🤣💋🥵💋😹💋 " + name, mentions: arraytag }) }, 19500);
    setTimeout(() => { a({ body: "হাই মাদারচোদ তর তর ব্যাশা জাতের আম্মু টা রে আদর করে করে চুদি " + name, mentions: arraytag }) }, 21500);
    setTimeout(() => { a("~ চুদা কি আরো খাবি মাগির মেয়া 🤖 ভাগলে তুর মারে তুর বাপ কাকায় সবাই এক লগে চুদে 🌸💋❤🙀❤❤") }, 23500);
    setTimeout(() => { a({ body: "খাংকির মেয়ে 🥰। " + name, mentions: arraytag }) }, 25000);
    setTimeout(() => { a({ body: "মাদারচোদ😍.. __ এত কথা বাদ চল ২ জন মিলে তর মারে ধষন করি কালা মাগীর পুত ︵❛❛༎ 🦋🖇🌈🍒-!! " + name, mentions: arraytag }) }, 27000);
    setTimeout(() => { a({ body: "ব্যাস্যার মেয়ে 🐰 " + name, mentions: arraytag }) }, 28500);
    setTimeout(() => { a({ body: "ব্যাশ্যা মাগির মেঐ 💔! __তর মার কচি ভুদায় ৭০ মণ বাগুন চাষ করমু নডির পুত পাগল ছাগল 💦👄💚🌻💯 " + name, mentions: arraytag }) }, 30500);
    setTimeout(() => { a({ body: "পতিতা মাগির মেয়ে ____ তোর মারে শেখ হাসিনা এর জামাই নরেন্দ্র মোদি কে দিয়ে পুটকি মারি😝🤨🤨 " + name, mentions: arraytag }) }, 32500);
    setTimeout(() => { a({ body: "depression থেকেও তর মাইরে চু*** দি 🤬 ছিরা জুতায় গুহ লাগায় তোর মার বুইড়া ভোদা ডুকায় তোর মাই এর কোলে বসায় রাখমু 🥶😎💯🤣🤣 " + name, mentions: arraytag }) }, 34500);
    setTimeout(() => { a({ body: "তর মারে চুদি আপনার মারে ভুতের গল্প সুনিয়ে আসতে আসতে শির শির ভাবে চুদতে জায় 👍🥀😂🥀💋 " + name, mentions: arraytag }) }, 36500);
    setTimeout(() => { a({ body: "নাট বল্টু মাগির মেয়া🤟 __তোর মারে পাকিস্তান রাজধানী লাহোর এ নিয়ে উচ্চ শিহ্মায় শিহ্মিত করে চুদবো-))!!🥱🌻🫦💦💯 " + name, mentions: arraytag }) }, 38500);
    setTimeout(() => { a({ body: "তর বোন রে পায়জামা খুলে চুদি 🤣 " + name, mentions: arraytag }) }, 40000);
    setTimeout(() => { a({ body: "উম্মম্মা তর বোন এর কচি ভুদায়💉। " + name, mentions: arraytag }) }, 41500);
    setTimeout(() => { a({ body: "DNA টেষ্ট করা দেখবি আমার চুদা তেই তর জন্ম। " + name, mentions: arraytag }) }, 43000);
    setTimeout(() => { a({ body: " বাস্ট্রাড এর বাচ্ছা বস্তির মেয়া ____তোর মাকে গ্রীন লাইন গাড়ির ছাদের উপর ফালিয়ে ভোদার উপর পাড়া দিয়া চুদবো-))!!💦👄🐰💚🌻💯 " + name, mentions: arraytag }) }, 45000);
    setTimeout(() => { a("~ জিসান এর জারজ শন্তান🤖") }, 47000);
    setTimeout(() => { a({ body: "Welcome মাগির মেয়া 🥰। " + name, mentions: arraytag }) }, 49000);
};
