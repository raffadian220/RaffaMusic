const Discord = require("discord.js");

module.exports = {
   RaffaBot_start: function() {
      bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
     bot.user.setPresence({
         game: {
             name: ``,
             type: "",
           state: `${statuslist[random]}`,
             url: "https://www.twitch.tv/monstercats"
         },
     });
 });
   }
}
