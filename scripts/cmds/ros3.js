module.exports = {
    config: {
        name: "ros3",
        aliases: ["war3", "spamroast"],
        version: "6.0",
        author: "Jisan Khan",
        role: 2,
        category: "War",
        shortDescription: "murgi4 style non-stop roasting",
        longDescription: "Fast spamming roast with short messages",
        guide: {
            en: "{p} roast3 @mention / reply"
        }
    },

    onStart: async function ({ api, event }) {
        let uid;
        if (event.type === "message_reply") {
            uid = event.messageReply.senderID;
        } 
        else if (Object.keys(event.mentions).length > 0) {
            uid = Object.keys(event.mentions)[0];
        } 
        else {
            return api.sendMessage("বস জিসান, মুরুগিটারে মেনশন দেন বা রিপ্লাই করেন! 😈", event.threadID);
        }

        let userInfo = await api.getUserInfo(uid);
        let name = userInfo[uid].name;
        let arraytag = [{ id: uid, tag: name }];

        var a = function (text) {
            api.sendMessage(text, event.threadID);
        };

        // --- Roasting Non-Stop (murgi4 style) ---
        a("Kire murgi " + name + ", ready ho choda khanar jonno! 💀");

        // --- Super Fast 1.2s - 1.5s interval ---
        setTimeout(() => { a({ body: "Tor thopda dekhle kukur o mutta dey na! 🐕 " + name, mentions: arraytag }) }, 1500);
        setTimeout(() => { a({ body: "Khankir pola online e don hoyechos? 🤡 " + name, mentions: arraytag }) }, 3000);
        setTimeout(() => { a({ body: "Tor mare chudi raate dupure! ☀️ " + name, mentions: arraytag }) }, 4500);
        setTimeout(() => { a({ body: "Bokachoda tor boin naki vatarer kandi? 🐍 " + name, mentions: arraytag }) }, 6000);
        setTimeout(() => { a({ body: "Tor bap naki condom kinar taka pay na? 💸 " + name, mentions: arraytag }) }, 7500);
        setTimeout(() => { a({ body: "Tor jonmo naki potitaloye hoise? 🤮 " + name, mentions: arraytag }) }, 9000);
        setTimeout(() => { a({ body: "Tor mayer voda ekhon public toilet! 🚽 " + name, mentions: arraytag }) }, 10500);
        setTimeout(() => { a({ body: "Khankir chele tor boin re chudi ghotok diye! 🤝 " + name, mentions: arraytag }) }, 12000);
        setTimeout(() => { a({ body: "Online e gunda giri tor boiner voday vore dimu! 🔪 " + name, mentions: arraytag }) }, 13500);
        setTimeout(() => { a({ body: "Tor thopda naki chidra voday bhora? 🐣 " + name, mentions: arraytag }) }, 15000);
        setTimeout(() => { a({ body: "Madarchod tor mare chudmu champakola diye! 🍌 " + name, mentions: arraytag }) }, 16500);
        setTimeout(() => { a({ body: "Tor bap naki bazarer kuli? 🏗️ " + name, mentions: arraytag }) }, 18000);
        setTimeout(() => { a({ body: "Guder bal tor boiner kochi voda! 🥥 " + name, mentions: arraytag }) }, 19500);
        setTimeout(() => { a({ body: "Tor mare chudmu 12-inchi lathi diye! 🪵 " + name, mentions: arraytag }) }, 21000);
        setTimeout(() => { a({ body: "Bainchod tor boner chudum magir put! 🥊 " + name, mentions: arraytag }) }, 22500);
        setTimeout(() => { a({ body: "Tor ma naki amar mal out korar jonno ha-kore thake? 💦 " + name, mentions: arraytag }) }, 24000);
        setTimeout(() => { a({ body: "Hizra magir pola tor bichi baji kormu! 🥚 " + name, mentions: arraytag }) }, 25500);
        setTimeout(() => { a({ body: "Tor boin re chuidda banamu banglar moshin! 🤖 " + name, mentions: arraytag }) }, 27000);
        setTimeout(() => { a({ body: "DNA test korle tor bap kukur ber hobe! 🐕 " + name, mentions: arraytag }) }, 28500);
        setTimeout(() => { a({ body: "Tor mayer voda shirish kagoj diye ghoishmu! 🪵 " + name, mentions: arraytag }) }, 30000);
        setTimeout(() => { a({ body: "Pakisthaner manchitro tor pison diya dhumu! 🗺️ " + name, mentions: arraytag }) }, 31500);
        setTimeout(() => { a({ body: "Tor boiner voday mobil dhalmu kire murgi? 📱 " + name, mentions: arraytag }) }, 33000);
        setTimeout(() => { a({ body: "Kochur loti dekhte sada tor boinre chudte moja! 🍲 " + name, mentions: arraytag }) }, 34500);
        setTimeout(() => { a({ body: "Tor mare chudmu tel polish kore! 🛢️ " + name, mentions: arraytag }) }, 36000);
        setTimeout(() => { a({ body: "Murgi choda tui to amar condom phatar result! 🎈 " + name, mentions: arraytag }) }, 37500);
        setTimeout(() => { a({ body: "Tor thopda dekhle kukur o piche fire mutta dey! 🐕 " + name, mentions: arraytag }) }, 39000);
        setTimeout(() => { a({ body: "Khankir pola tor jonmo naki dustbin e? 🗑️ " + name, mentions: arraytag }) }, 40500);
        setTimeout(() => { a({ body: "Tor mare chudmu dhum-machale style e! 🛵 " + name, mentions: arraytag }) }, 42000);
        setTimeout(() => { a({ body: "Tor boin naki raate raate vatarer kande uthe? 🐍 " + name, mentions: arraytag }) }, 43500);
        setTimeout(() => { a({ body: "Abbaler nai limit tor mar vuday dhumu simit! 🏗️ " + name, mentions: arraytag }) }, 45000);
        setTimeout(() => { a({ body: "Welcome magir pola, tor bapare daka de! 😈 " + name, mentions: arraytag }) }, 46500);

        setTimeout(() => { a("BOSS JISAN ER KASE CHODA KHAYE KEMON LAGLO MURGI? Chal vag! 🤖🔥🔥") }, 48500);
    }
};
