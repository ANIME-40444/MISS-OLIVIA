module.exports = {
    config: {
        name: "ros2",
        aliases: ["roasting2", "heavyroast"],
        version: "5.0",
        author: "Jisan Khan",
        role: 2,
        category: "War",
        shortDescription: "Ultra Brutal Rhyming Roasting",
        longDescription: "Long-duration roasting with rhyming slangs and logic",
        guide: {
            en: "{p} roast2 @mention / reply"
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

        // --- Brutal Intro ---
        a("Kire " + name + ", tor naki khub boro dukan online e? Ajke tor baper putki mere tor mure rasta-r kukur banamu! Ready ho... 💀🔥");

        // --- Long-Duration Rhyming Roast (2s gap for better delivery) ---
        
        setTimeout(() => { a({ body: "Tor thopda naki chidra voday bhora, tui to jonmo nichos potitaloye thakee bikaal bhela! Tor bap naki bazarer kuli, tor mare niye ami rasta-r dhare chuda-chudi kuli! 🤡 " + name, mentions: arraytag }) }, 2000);

        setTimeout(() => { a({ body: "Gache gache jol, tor boiner kochi voday dhumu mobiler boro-boro bal! Bal naki hoy kishmish, tor mar voday dhumu ami 12-inchi lathi dhumish-dhumish! 🥊 " + name, mentions: arraytag }) }, 4000);

        setTimeout(() => { a({ body: "Tor bap naki condom kinar taka pay na, tai tor moto abal murgi jonmo niye online e geu geu kore thame na! Tor mar voday ekhon train vore dhumu, tui sudu daraye pison diya dhuwa khabi khankir pola! 🚂 " + name, mentions: arraytag }) }, 6500);

        setTimeout(() => { a({ body: "Tor kochi bon naki vatarer kandi kore, raat holei amar baper kande uthe chuda khaye more! Morle naki hoy kofin, tor boin re chuidda ami banaye dhumu banglar moshin! 🐍 " + name, mentions: arraytag }) }, 9000);

        setTimeout(() => { a({ body: "Brishti pore tapur tupur tor mare chuidda kormu sonar nupur, sonar nupur naki hoy lal, tor mar voday dhumu ami 12-balti boro-boro mal! 💦 " + name, mentions: arraytag }) }, 11500);

        setTimeout(() => { a({ body: "Online e tui naki boro gunda, bashay giye dekh tor bap-re chudte chudte baniye felsi kochi munda! Munda naki hoy mishti, tor moto jaroj pola online e korsa tui srishti! 🤮 " + name, mentions: arraytag }) }, 14000);

        setTimeout(() => { a({ body: "Tor thopda dekhle kukur o piche fire mutta dey na, tor mar voday naki kukur chuda chara r kichu hoy na! Tor boin naki raate raate vatarer kande dhum-machale kore, tui naki kishmish choda khaye more! 🐕 " + name, mentions: arraytag }) }, 17000);

        setTimeout(() => { a({ body: "Tor mar voda naki ekhon public toiler er goli, tui naki shobai-re 'baba' bole online e boro kotha boli! Tor bichi duto naki vatre baji kora hoise, tui naki ekhon murgi choda khaye online e boshe? 🥚 " + name, mentions: arraytag }) }, 20000);

        setTimeout(() => { a({ body: "Kochur loti dekhte naki shada, tor mare chuidda banamu ami online er ekta boro gadha! Gadha naki hoy boka, tor boiner kochi voday dukamu ami boro-boro poka! 🐛 " + name, mentions: arraytag }) }, 23000);

        setTimeout(() => { a({ body: "Tor bap naki condom phatar result, tor moto hizra pola-re ami korchi khali insult! Insult naki hoy kotha, tor mare chudle ki tor baper lage khub betha? 🤣 " + name, mentions: arraytag }) }, 26000);

        setTimeout(() => { a({ body: "Khale ase naki mach, tor mar voday lagamu ami boro-boro baash-er gach! Gach hole naki hoy fol, tor boiner kochi voday dhumu boro-boro jol! 🪵 " + name, mentions: arraytag }) }, 29000);

        setTimeout(() => { a({ body: "Tor ma naki ekhon bazarer randi, tor bap naki rasta-r ganjakhorer kandi! Tor boin naki chuda khaye raste raste khula, tor mare chudmu ami tar kapor gula-gula! 👙 " + name, mentions: arraytag }) }, 32000);

        setTimeout(() => { a({ body: "Tor thopda dekhle mone hoy tor jonmo naki dustbin er moyla-te hoise, tai tor mukh diye norodomar gandho ber hoy shob-shomoy! Tor mare chuidda ekhon kormu on-line er boro raja, tui sudu tor boiner voday dukaye rakhish gaja! 💨 " + name, mentions: arraytag }) }, 36000);

        setTimeout(() => { a({ body: "DNA test korle dekhbi tor bap naki rasta-r pagol kukur chilo, tai tui online e ashle khali geu-geu korosh! Tor mare chudle ki tor kochi boiner voday betha hoy? Shala khankir pola murgi choda! 🤡 " + name, mentions: arraytag }) }, 40000);

        // --- Final Kick ---
        setTimeout(() => { a("BOSS JISAN er kase roast kheye ekhon giye tor mare bol tui naki amar condom phatar 'Mistake'! Chal vag online er murgi! 🤖🔥🔥") }, 43000);
    }
};
