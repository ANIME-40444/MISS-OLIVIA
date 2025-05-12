module.exports = {
 config: {
	 name: "attack on titan",
	 version: "1.0",
	 author: "Jisan",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "attack on titan") {
 return message.reply({
 body: "     「 𝗔𝗧𝗧𝗔𝗖𝗞 𝗢𝗡 𝗧𝗜𝗧𝗔𝗡 ❤️‍🩹😅\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆MR☆\n\nJISAN ッ」",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/496350357_24300019726266365_7406190965173027258_n.mp4?_nc_cat=106&_nc_cb=47395efc-686078dc&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=lbLwjO0dVrEQ7kNvwFzTxZJ&_nc_oc=AdkIQLXO3tf62qmZ3012WL-_3ZpmmuFABYhgsWVkZQoKXoQHglL6KNOHK_FDktlDv-Q&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=qTqDwl7BxrysH1aK9jD1vg&oh=03_Q7cD2QF2h2imXTgZh2cKTXXukBhJX2XSdCWMPuHcga_EHJZFDA&oe=6823E35E&dl=1")
 });
 }
 }
}
