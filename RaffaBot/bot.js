const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
   RaffaBot_start: function() {
      bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
     bot.user.setPresence({
         game: {
             name: "Raffa Dian | Subscribe now!",
             type: "WATCHING",
             state: "Subscribe Raffa Dian!",
             url: "https://youtube.com/channel/UCut55YrZ1FqZlB10gXzQw2A"
         },
     });
 });
      
      bot.on("message", (message) => {
      if (message.author.equals(bot.user)) return;
         if (message.content == "Hai") {
            message.channel.send(`Hai bang ${message.author} :)`)
         }
         
         else if (message.content == "Bacot" || message.content == "bacot") {
            message.channel.send("NGAJAK GELUD LU BANG " + message.author + " ?!?!?!?!")
         }
     });
         
   bot.login(process.env.RB_token);
   }
}
