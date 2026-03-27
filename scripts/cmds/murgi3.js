module.exports = {
    config: {
        name: "murgi3",
        aliases: ["war2"],
        version: "2.0",
        author: "nihan",
        role: 2,
        category: "War2",
        shortDescription: "Fast Continuous War Command",
        longDescription: "",
        guide: {
            vi: "Not Available",
            en: "{p} murgi3 @mention / reply"
        }
    },

    onStart: async function ({ api, event }) {
        let uid;

        // 👉 রিপ্লাই এবং মেনশন চেক
        if (event.type === "message_reply") {
            uid = event.messageReply.senderID;
        } 
        else if (Object.keys(event.mentions).length > 0) {
            uid = Object.keys(event.mentions)[0];
        } 
        else {
            return api.sendMessage("গুরু খানকিরপুলারে একটা মেনশন দেন বা রিপ্লাই করেন-!!🫂", event.threadID);
        }

        let userInfo = await api.getUserInfo(uid);
        let name = userInfo[uid].name;
        let arraytag = [{ id: uid, tag: name }];

        var a = function (textObj) {
            api.sendMessage(textObj, event.threadID);
        };

        // --- প্রথম মেসেজ ---
        a(" মাদারচোদ........ বোকাচোদা, খানকির ছেলে, ");

        // --- ফাস্ট টাইমিং সেট করা হয়েছে (১.৫ সেকেন্ড গ্যাপে) ---
        setTimeout(() => { a({ body: " গুদ মারানি, পোড মারানি, রেন্ডির ছেলে " + name, mentions: arraytag }) }, 1500);
        setTimeout(() => { a({ body: " বিচির বাল গুদের ছাল......... " + name, mentions: arraytag }) }, 3000);
        setTimeout(() => { a({ body: " বাইনচোদ , তোর বনকের চুদুম মাগির পুত " + name, mentions: arraytag }) }, 4500);
        setTimeout(() => { a({ body: " খোয়া চোদা ,বাজারের মাগির বাচ্চা তুই " + name, mentions: arraytag }) }, 6000);
        setTimeout(() => { a({ body: " কুত্তাচোদা ্‌,কুত্তা চোদায় জন্ম তোর, " + name, mentions: arraytag }) }, 7500);
        setTimeout(() => { a({ body: " বেশ্যা মাগী ,পতিতালয়ে জন্ম তোর , " + name, mentions: arraytag }) }, 9000);
        setTimeout(() => { a({ body: " হাতি চোদা খাঙ্কির বাচ্চা , " + name, mentions: arraytag }) }, 10500);
        setTimeout(() => { a({ body: " ডাইনোসর চুদা মাল " + name, mentions: arraytag }) }, 12000);
        setTimeout(() => { a({ body: " চোদা " + name, mentions: arraytag }) }, 13500);
        setTimeout(() => { a({ body: " , শয়তান চোদা ,্তোর জন্মের সময় সয়তানে চুদছিল তোর মাকে " + name, mentions: arraytag }) }, 15000);
        setTimeout(() => { a({ body: " পেন্টি চোর , কনডম চোর, " + name, mentions: arraytag }) }, 16500);
        setTimeout(() => { a({ body: " উৎখানকির ডিম,হেডা ভরা কারেন্ট " + name, mentions: arraytag }) }, 18000);
        setTimeout(() => { a({ body: " ভাইরাস চোদা বিলুপ্ত প্রানী ডাইনোসর, তোর বাপ " + name, mentions: arraytag }) }, 19500);
        setTimeout(() => { a({ body: " গুদির ছেলে , ট্রফিক্যাল চোদা " + name, mentions: arraytag }) }, 21000);
        setTimeout(() => { a({ body: ", চালক চোদা ,, টেপন মাগীর , রেন্ডি মাগীর গুদ............. " + name, mentions: arraytag }) }, 22500);
        setTimeout(() => { a({ body: "ডিজিটাল খানকি চোদন ৪২০ , পাগলা চোদা , " + name, mentions: arraytag }) }, 24000);
        setTimeout(() => { a({ body: " গুনিয়ার গার পাকা বারা চোদা ভরা চোদা , গুদ চোর..." + name, mentions: arraytag }) }, 25500);
        setTimeout(() => { a({ body: " .এই মাংগের বেটা তোর বউরে চুদি উঠতে চুদি বইতে চুদি দারাই চুদি বসে চুদি রাস্তায় চুদি রাস্তার ধারে চুদি চুদি আর চুদি খানকির পোলা 🙂 " + name, mentions: arraytag }) }, 27500);
        setTimeout(() => { a({ body: "ডেলি রাইতে তর মারে চুদি আমি খালে,, " + name, mentions: arraytag }) }, 29000);
        setTimeout(() => { a({ body: "্তোর bow re চুদি আমি😴 " + name, mentions: arraytag }) }, 30500);
        setTimeout(() => { a({ body: " ডাইনে চুদি 🖕 -বামে চুদি 🖕 -উপ্রে চুদি 🖕 -নিচে চুদি 🖕 -সাম্নে চুদি 🖕 -পিছে চুদি 🖕 - " + name, mentions: arraytag }) }, 32500);
        setTimeout(() => { a(" হালাইয়া চুদি 🖕 -উডাইয়া চুদি🖕 - গুরাইয়া চুদি 🖕 -খালে চুদি 🖕 -বিলে চুদি 🖕 -জাইতে চুদি 🖕 -আইতে চুদি🖕") }, 34500);
        setTimeout(() => { a({ body: "-দিনে চুদি 🖕 -রাইতে চুদি 🖕 -খারাইয়া চুদি 🖕 -বইয়া চুদি🖕 " + name, mentions: arraytag }) }, 36000);
        setTimeout(() => { a({ body: " -ঘরে চুদি 🖕 -বাইরে চুদি🖕 -সকালে চুদি🖕 -বিকালে চুদি 🖕 🖕 " + name, mentions: arraytag }) }, 37500);
        setTimeout(() => { a({ body: " বাড়িতে চুদি🖕 -আকাসে চুদি 🖕 -বাতাসে চুদি " + name, mentions: arraytag }) }, 39000);
        setTimeout(() => { a({ body: " আইনা তর মারে উপ্তা কইরা দিমু কঠিন এক চোদনকলা গাছে কলা নাই, তর মারে চুদলে কোন মজা নাই 😭😭" }) }, 41000);
        setTimeout(() => { a({ body: " কচুর লতি দেখতে সাদা, তর বইনেরে চুদতে অনেক মজা 😆" + name, mentions: arraytag }) }, 42500);
        setTimeout(() => { a({ body: " কাঠাল গাছের গোড়া আর আম গাছের ছাল,...🙂" + name, mentions: arraytag }) }, 44000);
        setTimeout(() => { a({ body: " শালি😳 গাধা😳কুত্তা😒 মাগি😰 " + name, mentions: arraytag }) }, 45500);
        setTimeout(() => { a({ body: " বকচোদ উল্লুক 😱 ছাগল🤕 পাঁঠা😎শুয়োর😀 ছুঁচো😁 পেঁচা 😂" + name, mentions: arraytag }) }, 47000);
        setTimeout(() => { a({ body: " মূর্খ😧বোকা😲 হাঁদারাম 😕মরচনানে 😳 পচা😃পাজি🤣 " + name, mentions: arraytag }) }, 48500);
        setTimeout(() => { a({ body: " কানা😖 খোড়া😵 কালা🤓চোর🤡 ডাকাইত🌞কুলি🤢মুটে🌚 মুচি🤔 " + name, mentions: arraytag }) }, 50000);
        setTimeout(() => { a({ body: " মেথর😢 শালী😠 হতীন😭 জিত্তা মাগি😩হালার পোত😥 " + name, mentions: arraytag }) }, 51500);
        setTimeout(() => { a({ body: " বাস্টার্ড😖 ফ্রড😩 ড্যাম😧 হারামির বাচ্চা😞 শয়তান😜’😐আস্ত একটা গাঁধা😌" + name, mentions: arraytag }) }, 53000);
        setTimeout(() => { a({ body: " হারামজাদা 😌মাদারচোতটা🌛হারামখোর😥 শুয়ারের বাচ্চা🌛কুত্তার বাচ্চা😱 নটিরপুরি🤓ছাওয়াল😭 " + name, mentions: arraytag }) }, 54500);
        setTimeout(() => { a({ body: " তর মারে চুইদ্দা করমু আমি খাল 🖕হাতি চোদে দাড়াইয়া,বানর চোদে ডালে, " + name, mentions: arraytag }) }, 56000);
        setTimeout(() => { a({ body: " বৃষ্টি পরে টাপুর টুপুর তর মারে চুইদ্দা দিমু আমি সোনার নুপুর " + name, mentions: arraytag }) }, 57500);
        setTimeout(() => { a({ body: " নাউজুবিল্লাহ বইলা করলাম শুরু আমি নাকি চুদার গুরু গুরু মহা গুরু তোর মারে চুইদ্দা " + name, mentions: arraytag }) }, 59000);
        setTimeout(() => { a({ body: " চুতমারানি মাগির পোলা তর মায়ের ভোদায় ডুকামু চাম্পাকলা " + name, mentions: arraytag }) }, 61000);
        setTimeout(() => { a({ body: " হিন্দু চুদে বুদ্ধ চুদে চুদে হুনুমান তর মার ভোদা চুইদ্দা করুম খাল " + name, mentions: arraytag }) }, 63000);
        setTimeout(() => { a({ body: " অই চুদানি মাগির পোলা গিয়েছিলাম ছোট্ট বেলা সেই জেলা নোয়াখালী সেখানে তর কচি বইনের ভোদায় ভইরা দিছিলাম বালি। " + name, mentions: arraytag }) }, 65000);
        setTimeout(() => { a({ body: " এতুল পাতা তেতুল পাতা তেতুল বড় টক রে তর মায়ের ভোদা চুদা আমার অনেক শখ রে " + name, mentions: arraytag }) }, 67000);
        setTimeout(() => { a({ body: " আবালের নাই লিমিট,তোর মার ভুদায় ভরুম সিমিট।" + name, mentions: arraytag }) }, 69000);
        setTimeout(() => { a({ body: " খালে আছে নাকি মাছ তর মায়রে চুদমো আমি অলটাইম ১২ মাস " + name, mentions: arraytag }) }, 71000);
        setTimeout(() => { a({ body: " ফেনডালে আছে নাকি বাশ তর মায়রে চুদমো তর আব্বুযর কান্দে ফালাইয়া ঠাস ঠাস+++++😂 " + name, mentions: arraytag }) }, 73000);
        setTimeout(() => { a({ body: " তুই তো আমার কন্ডম ফাটার কারণেই জন্ম নিছস " + name, mentions: arraytag }) }, 75000);
        setTimeout(() => { a({ body: " তোর পুটকিতে দেখ সুপার গ্লু লাগাই দিমু মাগির পুত " + name, mentions: arraytag }) }, 76500);
        setTimeout(() => { a({ body: " হিজলা মাগির পোলা বালি দিয়া চুদমু তরে খাঙ্কি মাগী!তর মাকে। ✋ " + name, mentions: arraytag }) }, 78000);
        setTimeout(() => { a({ body: " অনলাইনে গালি বাজ হয়ে গেছত মাগির পোলা এমন চুদা দিমু লাইফ টাইম মনে রাখভি তানিম তর বাপ মাগির ছেলে 😘 " + name, mentions: arraytag }) }, 80000);
        setTimeout(() => { a({ body: " উফফফ খাদ্দামা মাগির পোলা তর আম্মুর কালা ভুদায় আমার মাল আউট তর কচি বোন রে উপ্তা করে এবার চুদবো 💉। " + name, mentions: arraytag }) }, 82000);
        setTimeout(() => { a({ body: " টুকাই মাগির পোলা মোবাইল ভাইব্রেশন কইরা তুর কচি বোন এর পুকটিতে ভরবো।🤟 " + name, mentions: arraytag }) }, 84000);
        setTimeout(() => { a({ body: " তর মায়ের ভোদা বোম্বাই মরিচ দিয়া চুদামু।💔! " + name, mentions: arraytag }) }, 86000);
        setTimeout(() => { a({ body: " ~ আমার ফাটা কন্ডমের ফসল। জা ভাগ🤖 " + name, mentions: arraytag }) }, 88000);
        setTimeout(() => { a("চুদা শেষ! এখন গিয়ে তোর মার ভোদায় তেল মালিশ কর।") }, 90000);
    }
};
