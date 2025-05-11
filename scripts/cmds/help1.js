const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 🌟 | 🅼🆁 🅹🅸🆂🅰🅽 🅱🅾🆃 🅱🅾🆇 🩷 ]";

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "MR.AYAN", //**orginal author fb I'd : https://m.me/NOOBS.DEVELOPER.AYAN **//
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
  const { threadID } = event;
  const threadData = await threadsData.get(threadID);
  const prefix = getPrefix(threadID);

  if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += `╔═══════════╗\n     🅹🅸🆂🅰🅽 🅲🅼🅳 ⭐\n╚═══════════╝`;

      for (const [name, value] of commands) {
          if (value.config.role > 1 && role < value.config.role) continue;

          const category = value.config.category || "Uncategorized";
          categories[category] = categories[category] || { commands: [] };
          categories[category].commands.push(name);
      }

      Object.keys(categories).forEach(category => {
          if (category !== "info") {
              msg += `\n╭─╮\n│『 ${category.toUpperCase()} 』`;

              const names = categories[category].commands.sort();
              for (let i = 0; i < names.length; i += 3) {
                  const cmds = names.slice(i, i + 3).map(item => `✧${item}`);
                  msg += `\n│${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
              }

              msg += `\n╰────────────ꔪ`;
          }
      });

      const totalCommands = commands.size;
      msg += `\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆, 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗵𝗮𝘀 ${totalCommands} 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝘁𝗵𝗮𝘁 𝗰𝗮𝗻 𝗯𝗲 𝘂𝘀𝗲𝗱\n`;
      msg += `𝗧𝘆𝗽𝗲 ${prefix}𝗵𝗲𝗹𝗽 [🅹🅸🆂🅰🅽 🅱🅾🆃 🅱🅾🆇 🩷] 𝘁𝗼 𝘃𝗶𝗲𝘄 𝘁𝗵𝗲 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 𝗼𝗳 𝘁𝗵𝗮𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱\n`;
      msg += `🌟 | 🅹🅸🆂🅰🅽 🅱🅾🆃 🅱🅾🆇 🩷 `;


      const helpListImages = [

  "https://i.imgur.com/TDuYjG0.jpeg",
        // Add more image links as needed
      ];


      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];


      await message.reply({
          body: msg,
          attachment: await global.utils.getStreamFromURL(helpListImage)
      });
  } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `━━━━━━━━━━━━━━━━━♡
   
   ➢  ♡𝐍𝐀𝐌𝐄♡ 
    ➠${configCommand.name}
   ➢ 𝙄𝙉𝙁𝙊
    
     ➠𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 : ${longDescription}
     ➠𝗼𝘁𝗵𝗲𝗿 𝗻𝗮𝗺𝗲𝘀 : ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"}
    Other names in your group:  Do not have
     ➠𝗔𝘂𝘁𝗵𝗼𝗿: ${author}
     ➠𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : ${configCommand.version || "1.0"}
     ➠𝗥𝗼𝗹𝗲 : ${roleText}
     ➠𝗧𝗶𝗺𝗲 𝗽𝗲𝗿 𝗰𝗼𝗺𝗺𝗮𝗱: ${configCommand.countDown || 1}s
   ➢ 𝙐𝙎𝘼𝙂𝙀
     ➠ ${usage}
   ➢ 𝙉𝙊𝙏𝙀𝙎
    scripts coding by MR.AYAN
  ━━━━━━━━━━━━━━━━━━ꔪ`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
}
