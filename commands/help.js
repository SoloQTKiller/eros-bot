const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.channel.send('teste').then(async msg => {
    
    await msg.react('ð')
    await msg.react('ð')
    })

const filter = (reaction, user) => {
    return ['ð', 'ð'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === 'ð') {
            message.reply('voce reagiu com ð');
        }
        if (reaction.emoji.name === 'ð') {
            message.reply('voce reagiu com ð');
        }
    }).catch(collected => {
        console.log('Aviso comando help: o membro nÃ£o reagiu a mensagem');
    });
}
        

module.exports.help = {
    name:"help"
}