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
             type: "STREAMING",
             state: "Subscribe Raffa Dian!",
             url: "https://youtu.be/ymmt39sDdG8"
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
         
                  else if (message.content == "Badut" || message.content == "badut") {
            message.channel.send("Lu Yang Badut Bege")
         }
         
                           else if (message.content == "<3" || message.content == "<3") {
            message.channel.send(`GABOLEH BUCIN ${message.author} !! `)
         }
     });
         
   bot.login(process.env.RB_token);
   }
}
