module.exports = {
    config: {
        name: "war",
        version: "2.0",
        author: "Jisan Khan",
        role: 2,
        category: "texts",
        guide: {
            vi: "Not Available",
            en: "{p} war @mention / reply"
        } 
    },

    onStart: async function ({ api, event }) {
        let uid;

        // 👉 রিপ্লাই এবং মেনশন স্মার্ট চেক
        if (event.type === "message_reply") {
            uid = event.messageReply.senderID;
        } 
        else if (Object.keys(event.mentions).length > 0) {
            uid = Object.keys(event.mentions)[0];
        } 
        else {
            return api.sendMessage("বস জিসান, খানকিরপুলারে একটা মেনশন দেন বা রিপ্লাই করেন! 🫂", event.threadID);
        }

        let userInfo = await api.getUserInfo(uid);
        let name = userInfo[uid].name;
        let arraytag = [{ id: uid, tag: name }];

        var a = function (textObj) { 
            api.sendMessage(textObj, event.threadID); 
        };

        // --- প্রথম মেসেজ ---
        a("BOSS JISAN IS HERE! WAR START... 😈");

        // --- ফাস্ট টাইমিং সেট করা হয়েছে (১.৫ সেকেন্ড গ্যাপে) ---
        setTimeout(() => { a({ body: "RANDIKO CHOKTAA MUJII RAUTEE KHATE KO XORO AMA CHIKWAA MUJI " + name, mentions: arraytag }) }, 1500);
        setTimeout(() => { a({ body: "LADOOO LES TAT TC TAUKEE SALLAA XKKKAAA TEORO PUTI MA MERO NAM LEKHXU ABAA😭💋 " + name, mentions: arraytag }) }, 3000);
        setTimeout(() => { a({ body: "TEORO AMA KO PUTI MA DAHI HALERW LYAAMM LYAM CHIKAMAMMM BHNNTW🤠❤ " + name, mentions: arraytag }) }, 4500);
        setTimeout(() => { a({ body: "TERII AMA KO KALO PUTII MA LYAMMMA LYAMMA CHKAMM MUJII THUKK LAII LAII MADRCHOOOD BESYYA AMA KO XORO " + name, mentions: arraytag }) }, 6000);
        setTimeout(() => { a({ body: "TEORO AMAA LAAII KOPCHI MAA LAGERW CHIKAAMM RANNDDII MAKAA BAXHHA😭💋 " + name, mentions: arraytag }) }, 7500);
        setTimeout(() => { a({ body: "TERO AAMA LAAII MERO LADO MAA BASAII NEPAALL GHUMAUXXUU RANNDDI MAA KAA BXHHAA😭 " + name, mentions: arraytag }) }, 9000);
        setTimeout(() => { a({ body: "TEERII MAA KI CHUTT PAKAR K RODDD DALDUU BEHENCHODDD SALA NALAYKK BACHHA ANPADDD MUJIII " + name, mentions: arraytag }) }, 10500);
        setTimeout(() => { a({ body: "TEROO AMAA KO KALO PUTII MA SARAF HAALI GORO BANA JAA XORO 🤠❤ " + name, mentions: arraytag }) }, 12000);
        setTimeout(() => { a({ body: "TRII BEHN KI KALII CHUTT UMMAHH MADRCHOOOD EXYY PJUTII TERIII BAINIKO RATOO RATOO CHIKI CHIKI LYAMMA LYMMA " + name, mentions: arraytag }) }, 13500);
        setTimeout(() => { a({ body: "TEOROO AMAA KO PUTTII MAA COKEE HAALII BDAYY PARTY MANAAMAM MEROOLADO KO😭💋 " + name, mentions: arraytag }) }, 15000);
        setTimeout(() => { a({ body: "MEROO LADOO DHOGNNAA AIJAA SALALA XKK KO BXHHHA RNNDII KO BAXHHAA😭💋 " + name, mentions: arraytag }) }, 16500);
        setTimeout(() => { a({ body: "TERII BAHINILAII MEROO LADOO MA JHUNDAYE MARDENXUU SALA DAMAII KO BACHHA HAKKK THUUU HAHAHAHAHA " + name, mentions: arraytag }) }, 18000);
        setTimeout(() => { a({ body: "HAKKK THUUU MUJIIII VAGGG SALA ABAUU ANGAA BOLNEE AUKAAT BANA PAHELE ANI AIJNAAA ALA RAUTE KO BACHHHA KHIKHIHKHI " + name, mentions: arraytag }) }, 19500);
        setTimeout(() => { a({ body: "MEROO LAODO LE HAANI TEORO KHAANNDANN DAFANN HAANNDDIMM FUCHEHEEE😭💋 " + name, mentions: arraytag }) }, 21000);
        setTimeout(() => { a({ body: "MEROO LADOO KO JHATTAROO HANEE TERIII AMA KO TAUKOO FUTALXUU RANDIKO BANN HAHHAHA " + name, mentions: arraytag }) }, 22500);
        setTimeout(() => { a({ body: "TEROO NIDHARR MAA MEROOLAODO KO JHATAROO HAANI CHAAPP BASAUXUU😭💋 " + name, mentions: arraytag }) }, 24000);
        setTimeout(() => { a({ body: "LADOOOMA KISS HANN FUVCHHHEE RANDIKO XORO " + name, mentions: arraytag }) }, 25500);
        setTimeout(() => { a({ body: "TERROO AMA KO PUTI MA LAGAII TORI KO TELL CHIKI CHIKI GRDINXXUU PUTI TROO AMA KO FAILLL🤠❤ " + name, mentions: arraytag }) }, 27000);
        setTimeout(() => { a({ body: "RANDIKKO BACHHHA SALA UMMMAHH MADRCHOOD TERII AMAMO RATOO PJUTII MAAA ALA PUTII HOWW HANN VANTAA OA TERII AMA LAII MERO NAM LEYERW " + name, mentions: arraytag }) }, 28500);
        setTimeout(() => { a({ body: "TROO AMAA KO PUTI YETI ADHYARO KALO XA KI CHIKDA TERO AMA LAI TORCH BALI BALI HERNA PARX🤠❤ " + name, mentions: arraytag }) }, 30000);
        setTimeout(() => { a({ body: "TEROO KHAANNDAAN LAAII MEROO LADO LE HANERW DHALLDIMM XAKKEE MC FUCHEY🤠❤ " + name, mentions: arraytag }) }, 31500);
        setTimeout(() => { a({ body: "BAUU VANN RANDIKOO CHOKTAA MUJII DALITTE SALAA HAHAHAHAHA " + name, mentions: arraytag }) }, 33000);
        setTimeout(() => { a({ body: "TEROO AMAA LAAI RATI BED MA LAGII VTENN KO SONGG MA NACHDAI UFRII DAI LYAAMM LYAMMM CHIKAAMM RDD KOO NSOO🤠🫀 " + name, mentions: arraytag }) }, 34500);
        setTimeout(() => { a({ body: "OLELEL MUJI NA RONARONA RANDIKO BAN VALU TERI AMA RAMDIKO XORO " + name, mentions: arraytag }) }, 36000);
        setTimeout(() => { a({ body: "LADOLEES XORO MUJI TERI AMA CHIKI CHIKI CONDOM FUTERWWW JANMYAKO TALAII ASLAAA " + name, mentions: arraytag }) }, 37500);
        setTimeout(() => { a({ body: "TERII AMA KO KALO PUTII MA UMMAH " + name, mentions: arraytag }) }, 39000);
        setTimeout(() => { a({ body: "THOPPDAA PDDIIT SLALA XORORO TEORO THOPPDA HERDAA MEROO UTHEEKO LADOO NI SUTXA🙀❤ " + name, mentions: arraytag }) }, 40500);
        setTimeout(() => { a({ body: "TWROO AMAA NAII HO MEROO TURUU AND PURE LOVE KANNXXOO😘😘 " + name, mentions: arraytag }) }, 42000);
        setTimeout(() => { a({ body: "TEROO BAAINI LAI GULAABI PUTII SHOW GARNAA VANTA BAAU KO AGHADDII😻 " + name, mentions: arraytag }) }, 43500);
    }
};
