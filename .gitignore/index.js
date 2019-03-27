const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Command: /help");
    console.log("Connected");
});

bot.login("NTU3OTU2MDI4NzYzOTk2MTYw.D30Lsw.-PWAkKtxsLlPyGjuyBhpt7YQW2g");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -/help");
    }

    if (message.content === "Salut"){
        message.reply("Bonjour a toi aussi !");
        console.log("Le bot a répondu au Salut");
    }
});
