module.exports = {
    config: {
        name: "murgi6",
        aliases: ["war2"],
        version: "3.0",
        author: "Jisan Khan",
        role: 2,
        category: "War2",
        shortDescription: "Banglish Heavy War Command",
        longDescription: "",
        guide: {
            vi: "Not Available",
            en: "{p} murgi6 @mention / reply"
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
            return api.sendMessage("Guru khankirpulare ekta mention den ba reply koren! 🫂", event.threadID);
        }

        let userInfo = await api.getUserInfo(uid);
        let name = userInfo[uid].name;
        let arraytag = [{ id: uid, tag: name }];

        var a = function (textObj) {
            api.sendMessage(textObj, event.threadID);
        };

        // --- Start Message ---
        a("Madarchod........ Bokachoda, Khankir chele, " + name);

        // --- Fast Timing (1.5s gap) ---
        setTimeout(() => { a({ body: "Gud marani, Pod marani, Rendir chele " + name, mentions: arraytag }) }, 1500);
        setTimeout(() => { a({ body: "Bichir bal guder chhal......... " + name, mentions: arraytag }) }, 3000);
        setTimeout(() => { a({ body: "Bainchod, tor boner chudum magir put " + name, mentions: arraytag }) }, 4500);
        setTimeout(() => { a({ body: "Khoya choda, bazarer magir bachha tui " + name, mentions: arraytag }) }, 6000);
        setTimeout(() => { a({ body: "Kutta choda, kutta choday jonmo tor " + name, mentions: arraytag }) }, 7500);
        setTimeout(() => { a({ body: "Beshya magi, potitaloye jonmo tor " + name, mentions: arraytag }) }, 9000);
        setTimeout(() => { a({ body: "Hati choda khankir bachha " + name, mentions: arraytag }) }, 10500);
        setTimeout(() => { a({ body: "Shoytan choda, tor jonmer somoy shoytan chudsil tor mare " + name, mentions: arraytag }) }, 12000);
        setTimeout(() => { a({ body: "Penti chor, condom chor, utkhankir dim " + name, mentions: arraytag }) }, 13500);
        setTimeout(() => { a({ body: "Ei manger beta tor boure chudi uthte chudi boyte chudi " + name, mentions: arraytag }) }, 15000);
        setTimeout(() => { a({ body: "Daine chudi, bame chudi, upre chudi, niche chudi " + name, mentions: arraytag }) }, 16500);
        setTimeout(() => { a({ body: "Ghore chudi, baire chudi, sokale chudi, bikale chudi " + name, mentions: arraytag }) }, 18000);
        setTimeout(() => { a({ body: "Kochur loti dekhte sada, tor boinre chudte onek moja " + name, mentions: arraytag }) }, 19500);
        setTimeout(() => { a({ body: "Aulul bakchod, ulluk, chagol, patha, shuyor, pecha " + name, mentions: arraytag }) }, 21000);
        setTimeout(() => { a({ body: "Murkho, boka, hadaram, moronone, pacha, paji " + name, mentions: arraytag }) }, 22500);
        setTimeout(() => { a({ body: "Haramjada, madarchot-ta, haramkhor, shuyoreres bachha " + name, mentions: arraytag }) }, 24000);
        setTimeout(() => { a({ body: "Chutmarani, shali, gadha, kutta, magi, vatar " + name, mentions: arraytag }) }, 25500);
        setTimeout(() => { a({ body: "Tor mare chuidda kormu ami khal, hati chode daraiya " + name, mentions: arraytag }) }, 27000);
        setTimeout(() => { a({ body: "Brishti pore tapur tupur tor mare chuidda dimu sonar nupur " + name, mentions: arraytag }) }, 28500);
        setTimeout(() => { a({ body: "Online korlam shuru kire murgi chutani magir pola " + name, mentions: arraytag }) }, 30000);
        setTimeout(() => { a({ body: "Tor mayer voday dukamu champakola, chotmarani pola " + name, mentions: arraytag }) }, 31500);
        setTimeout(() => { a({ body: "Abbaler nai limit, tor mar vuday dhumu simit " + name, mentions: arraytag }) }, 33000);
        setTimeout(() => { a({ body: "Khale ase naki mach tor mayre chudmu ami 12 mash " + name, mentions: arraytag }) }, 34500);
        setTimeout(() => { a({ body: "Tui to amar condom phatar karone jonmo nichos " + name, mentions: arraytag }) }, 36000);
        setTimeout(() => { a({ body: "Tor putkite dega super glue lagai dimu magir put " + name, mentions: arraytag }) }, 37500);
        
        // --- Extra Added Banglish Slangs (New) ---
        setTimeout(() => { a({ body: "Tor kochi boner voday mobil dhalmu, vibration chudmu " + name, mentions: arraytag }) }, 39000);
        setTimeout(() => { a({ body: "Hizra magir pola tor mare chudmu gamsa pechiye " + name, mentions: arraytag }) }, 40500);
        setTimeout(() => { a({ body: "Tor ma ekhono amar jonno voda phak kore boshe thake " + name, mentions: arraytag }) }, 42000);
        setTimeout(() => { a({ body: "Pakisthaner manchitro banaye tor pison diya dhumu " + name, mentions: arraytag }) }, 43500);
        setTimeout(() => { a({ body: "
