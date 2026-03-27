module.exports.config = {
    name: "murgi",
    version: "3.5",
    role: 0,
    author: "Jisan Khan",
    description: "কাউকে মুরগি বানিয়ে গালি দেওয়ার কমান্ড (Fast Version)",
    category: "nsfw",
    guide: "{pn} @mention / reply to message",
    coolDown: 10
};

module.exports.onStart = async function ({ api, event }) {
    let uid;

    if (event.type === "message_reply") {
        uid = event.messageReply.senderID;
    }
    else if (Object.keys(event.mentions).length > 0) {
        uid = Object.keys(event.mentions)[0];
    }
    else {
        return api.sendMessage("⚠ জিসান বস খানকির পুলারে একটা মেনশন দে বা রিপ্লাই কর! 🫂", event.threadID, event.messageID);
    }

    let userInfo = await api.getUserInfo(uid);
    let name = userInfo[uid].name;
    let arraytag = [{ id: uid, tag: name }];

    var a = function (text) { 
        api.sendMessage(text, event.threadID); 
    };

    // --- টেক্সট এবং ফাস্ট টাইমিং ---
    a("তোর জিসান আব্বুর চুদা লো");

    setTimeout(() => { a({ body: "خانকির বাচ্চা তোর মারে চুদি 🫦। " + name, mentions: arraytag }) }, 1000);
    setTimeout(() => { a({ body: "খানকির বাচ্চা তোর কচি বোন রে চুদি 💋.. " + name, mentions: arraytag }) }, 2500);
    setTimeout(() => { a({ body: "মাদারচোদ তোর আম্মুর পম পম খানকির পো 🐰 " + name, mentions: arraytag }) }, 4000);
    setTimeout(() => { a({ body: "খানকির বাচ্চা তোর মার ভুদায় কামর দিমু 🖕! " + name, mentions: arraytag }) }, 5500);
    setTimeout(() => { a({ body: "খানকি মাগির বাচ্চা কথা ক কম কম তোর আম্মু রে চুদে বানামু আইটেম বোম " + name, mentions: arraytag }) }, 7000);
    setTimeout(() => { a({ body: "depression থেকেও তোর মাইরে চু*** দি 🫵🥵 " + name, mentions: arraytag }) }, 8500);
    setTimeout(() => { a({ body: "তোর আম্মু রে আচার এর লোভ দেখিয়ে চুদি নটির বাচ্চা 🤬 " + name, mentions: arraytag }) }, 10000);
    setTimeout(() => { a({ body: "বান্দির বাচ্চা তোর কচি বোনের ভুদা ফাক করে থুতু দিয়ে ভুদায় ধোন ডুকামু 🫦 " + name, mentions: arraytag }) }, 11500);
    setTimeout(() => { a({ body: "মাগির বাচ্চা তোর আম্মু রে চুদি তোর দুলা ভাই এর কান্দে ফেলে 🤝 " + name, mentions: arraytag }) }, 13000);
    setTimeout(() => { a({ body: "উফফফ খাদ্দামা মাগির বাচ্চা তোর আম্মুর কালা ভুদায় আমার মাল আউট তোর কচি বোন রে দুই পা উচু করে এবার চুদবো 💉। " + name, mentions: arraytag }) }, 14500);
    setTimeout(() => { a({ body: "অনলাইনে গালি বাজ হয়ে গেছো মাগির বাচ্চা এমন চুদা দিমু লাইফ টাইম মনে রাখবি আমার বস তোর বাপ নটির বাচ্চা 🤬। " + name, mentions: arraytag }) }, 16000);
    setTimeout(() => { a({ body: "ভাতিজা শুন তোর আম্মু রে চুদলে রাগ করবি না তো, আচ্ছা যা রাগ করিস না তোর আম্মুর কালা ভুদা আর চুদলাম না তোর বোন এর জামা টা খুলে দে 😋 " + name, mentions: arraytag }) }, 17500);
    setTimeout(() => { a({ body: "হাই মাদারচোদ তোর কচি বোন কে আদর করে করে চুদি " + name, mentions: arraytag }) }, 19000);
    setTimeout(() => { a("~ চুদা কি আরো খাবি মাগির বাচ্চা 🤖") }, 20500);
    setTimeout(() => { a({ body: "খাংকির বাচ্চা 🥰। " + name, mentions: arraytag }) }, 22000);
    setTimeout(() => { a({ body: "মাদারচোদ 😍.. " + name, mentions: arraytag }) }, 23500);
    setTimeout(() => { a({ body: "নটির বাচ্চা 🐰 " + name, mentions: arraytag }) }, 25000);
    setTimeout(() => { a({ body: "খানকি মাগির বাচ্চা 💔! " + name, mentions: arraytag }) }, 26500);
    setTimeout(() => { a({ body: "পতিতা মাগির বাচ্চা " + name, mentions: arraytag }) }, 28000);
    setTimeout(() => { a({ body: "depression থেকেও তোর বোন কে চু*** দি 🤬 " + name, mentions: arraytag }) }, 29500);
    setTimeout(() => { a({ body: "তোর মারে চুদি " + name, mentions: arraytag }) }, 31000);
    setTimeout(() => { a({ body: "নাট বল্টু মাগির বাচ্চা 🫵 " + name, mentions: arraytag }) }, 32500);
    setTimeout(() => { a({ body: "তোর বোন কে পায়জামা খুলে চুদি 🤣 " + name, mentions: arraytag }) }, 34000);
    setTimeout(() => { a({ body: "উম্মম্মা তোর বোন এর কচি ভুদায় 💋। " + name, mentions: arraytag }) }, 35500);
    setTimeout(() => { a({ body: "DNA টেষ্ট কইরা দেখবি আমার বস এর চুদা তেই তোর জন্ম। " + name, mentions: arraytag }) }, 37000);
    setTimeout(() => { a({ body: "কামলা মাগির বাচ্চা 🤣 " + name, mentions: arraytag }) }, 38500);
    setTimeout(() => { a({ body: "বাস্ট্রাড এর বাচ্চা বস্তিতে জন্ম তোর 🫵 " + name, mentions: arraytag }) }, 40000);
    setTimeout(() => { a("~ আমার বস এর জারজ শন্তান 😜") }, 41500);
    setTimeout(() => { a({ body: "Welcome মাগির বাচ্চা 🫦। " + name, mentions: arraytag }) }, 43000);
    setTimeout(() => { a({ body: "তোর কচি বোন এর পম পম 💋.. " + name, mentions: arraytag }) }, 44500);
    setTimeout(() => { a({ body: "নটির বাচ্চা কথা শুন তোর আম্মু রে চুদি গামছা পেচিয়ে 🐰 " + name, mentions: arraytag }) }, 46000);
    setTimeout(() => { a({ body: "Hi আমার বস এর জারজ শন্তান মাগির বাচ্চা 🤣! " + name, mentions: arraytag }) }, 47500);
    setTimeout(() => { a({ body: "২০ টাকার পতিতা মাগির বাচ্চা 😝 " + name, mentions: arraytag }) }, 49000);
    setTimeout(() => { a({ body: "depression থেকেও তোর মাইরে চু*** দি 🫦🖕 " + name, mentions: arraytag }) }, 50500);
    setTimeout(() => { a({ body: "বস্তিতে জন্ম অনলাইনে ভাব চুদাও এমন চুদা চুদবো তোর মা,বোন এর পুটকির তার ছিড়ে যাবে 👻 " + name, mentions: arraytag }) }, 52000);
    setTimeout(() => { a({ body: "টুকাই মাগির বাচ্চা 🖕 " + name, mentions: arraytag }) }, 53500);
    setTimeout(() => { a({ body: "তোর আম্মু রে পায়জামা খুলে চুদি 🤣 " + name, mentions: arraytag }) }, 55000);
};
