module.exports = {
    config: {
        name: "ros",
        aliases: ["roasting", "pachani"],
        version: "4.0",
        author: "Jisan Khan",
        role: 2,
        category: "War",
        shortDescription: "Brutal Roasting Command",
        longDescription: "High-level roasting with heavy slangs",
        guide: {
            en: "{p} roast @mention / reply"
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
            return api.sendMessage("Oi murgi, kauk mention de ba reply kor roasting shuru korar jonno! 😈", event.threadID);
        }

        let userInfo = await api.getUserInfo(uid);
        let name = userInfo[uid].name;
        let arraytag = [{ id: uid, tag: name }];

        var a = function (text) {
            api.sendMessage(text, event.threadID);
        };

        // --- Roasting Start ---
        a("Kire " + name + ", tui naki khub boro don hoyechos online e? Shon ekhon tor roast shuru kormu... 💀");

        // --- Roasting Cycles (1.5s gap) ---
        setTimeout(() => { a({ body: "Tor thopda dekhle mone hoy tor bap naki condom kinte giye vule morich niye ashilo, tai tor jonmo eto jhal! 🔥 " + name, mentions: arraytag }) }, 1500);
        setTimeout(() => { a({ body: "Tui naki online er king? Tor mayer voday ekhon 50 takar ticket kete murgi lorai dekhabo khankir pola! 🐔 " + name, mentions: arraytag }) }, 3000);
        setTimeout(() => { a({ body: "Tor kochi boner thopda dekhle kukur o pison fire takay na, r tui ashso roast khete? 🤣 " + name, mentions: arraytag }) }, 4500);
        setTimeout(() => { a({ body: "Tor bap naki rasta rasta vikkha kore tor bot-er bill dey? Tor shathi choda bap-re jigash korish ami ki jinish! 💸 " + name, mentions: arraytag }) }, 6000);
        setTimeout(() => { a({ body: "Khankir pola tui to amar condom phatar karone jonmo nichos, ekhon amare baper daka dakos? 🤡 " + name, mentions: arraytag }) }, 7500);
        setTimeout(() => { a({ body: "Tor mayer voday ekhon public toilet banamu, shobai ashbe r 2 taka diye tor mar voday muita jabe! 🚽 " + name, mentions: arraytag }) }, 9000);
        setTimeout(() => { a({ body: "Tor boin naki raate raate vatarer kande uthe? Tor gunda-giri ekhon tor boiner voday vore dimu boka choda! 🐍 " + name, mentions: arraytag }) }, 10500);
        setTimeout(() => { a({ body: "Online e boro boro kotha bolish, bashay giye dekh tor ma naki amar mal out korar jonno ha-kore boshe ase! 💦 " + name, mentions: arraytag }) }, 12000);
        setTimeout(() => { a({ body: "Tor moto murgi ke chudte hole amar don lage na, tor kochi boner churi diyei tor baper putki mere dibo! 🔪 " + name, mentions: arraytag }) }, 13500);
        setTimeout(() => { a({ body: "Tor jonmo naki potitaloy er dasta-bin e hoisilo? Tai tor mukh diye eto norodomar gandho ber hoy! 🤮 " + name, mentions: arraytag }) }, 15000);
        setTimeout(() => { a({ body: "Tor mayer voday ekhon shirish kagoj diye ghoisha lal banaye dimu, tui sudu pison diye daraye dekhish! 🪵 " + name, mentions: arraytag }) }, 16500);
        setTimeout(() => { a({ body: "Hizra magir pola, tor duto bichi naki vatre baji kora hoise? Roast khabi naki choda khabi bol? 🥚 " + name, mentions: arraytag }) }, 18000);
        setTimeout(() => { a({ body: "Tor boiner kochi voday ekhon mobil dhalmu r vibration chaya-te vore dimu, murgir pola! 📱 " + name, mentions: arraytag }) }, 19500);
        setTimeout(() => { a({ body: "DNA test korle dekhbi tor bap naki rasta-r kukur chilo, tai tui eto geu geu korish! 🐕 " + name, mentions: arraytag }) }, 21000);
        setTimeout(() => { a({ body: "Tor mayer voday pakisthaner manchitro banaye tor baper 12-inchi lathi dukaye dimu boka-choda! 🗺️ " + name, mentions: arraytag }) }, 22500);
        
        setTimeout(() => { a("Roasting shesh! Ekhon giye tor mare bol JISAN BOSS tor baap hoy. 🤖🔥") }, 24000);
    }
};
