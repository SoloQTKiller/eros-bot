const Discord = require("discord.js"); 
const bans = require('./bans/banimentos_personalizados.json');
const moment = require("moment");
moment.locale("pt-BR");

exports.run = async (bot, message, args) => { 

  if(message.member.id != "477567345439801345") return("Opaaaaaaa somente o <@477567345439801345> tem permissão de usar esse comando.");

  let user = message.mentions.users.first()|| bot.users.get(args[0]);
  if(!user) return message.reply("Por favor mencione um usuário.\nEx: e!SoloQTKiller @SoloQTKiller");

  let reason = args.slice(1).join(" ")
  if(!reason) reason = "Motivo não especificado.";

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:x: | **${message.author}** sem permissão!`);

  if(!message.guild.member(user).bannable) return message.reply("Eu não posso banir esse usuário!")

  message.guild.member(user).ban(reason);

  const mudarhora = moment.utc(message.createdAt).format('HH');
  const hora = mudarhora - 2;

  let Embed = new Discord.RichEmbed() 
  .setTitle("Ban SoloQTKiller")
  .setFooter("Hora do Banimento")
  .setColor("#ff0000")
  .setTimestamp()
  .addField(" Usuário Banido:", `${user}`)
  .addField(" ID:", `${user.id}`)
  .addField("Motivo:", reason)
  .addField("Horário:", hora + moment.utc(message.createdAt).format(':mm:ss'))
  .setImage(bans.imagem_477567345439801345)

  message.channel.send(Embed);
}
exports.help = {
  name: "SoloQTKiller"
}