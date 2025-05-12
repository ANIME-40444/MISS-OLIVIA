module.exports = {
 config: {
   name: "obito",
   version: "1.0",
   author: "MR-JISAN",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "obito") {
 return message.reply({
 body: "𝗜 𝗹𝗼𝘃𝗲𝗱 𝗵𝗶𝗺 𝗮 𝗹𝗶𝘁𝘁𝗹𝗲 𝗺𝗼𝗿𝗲 𝗯𝘂𝘁 𝗵𝗲 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗼𝗼𝗱 𝗺𝘆 𝗹𝗼𝘃𝗲 𝗮 𝗹𝗶𝘁𝘁𝗹𝗲 𝗹𝗮𝘁𝗲 ...! ❤‍🩹💔😅",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/497102329_9630894377006861_7188045910953138747_n.mp4?_nc_cat=100&_nc_cb=47395efc-686078dc&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=TwRGyOCZ-dcQ7kNvwGCnEtb&_nc_oc=AdnJR-4ExBRJwE6fWWR_wvO_9AZc4mSnoqehwQ35deqCVA3Yq9lqotkm3kQPBuiQkeU&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=3D3UiWC14vSldqLY9nLM9A&oh=03_Q7cD2QEX371tYvD3QyWM-DatdDPkC0DtY-iqZbk3-PWMh4Xp4Q&oe=682401E1&dl=1")
 });
 }
 }
}
