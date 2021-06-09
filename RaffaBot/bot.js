const Discord = require("discord.js");
const bot = DIscord.CLient({disableEveryone: true});
const dotenv = require("dotenv");
dotenv.config();

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
      
      bot.on("message", (message) => {
      
         if (message.content == "Hai") {
            message.channel.send(`Hai bang ${message.author} :)`)
         };
         
         else if (message.content == "Bacot" || message.content == "bacot") {
            message.channel.send("NGAJAK GELUD LU BANG " + message.author + " ?!?!?!?!"
         };

     });
         
   bot.token(process.env.RB_token);
   }
}
