const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment, MessageCollector, MessageSelectMenu } = require('discord.js');
const ee = require("../../config/embed.json")
const em = require("../../config/emojis.json")

module.exports = {
  name: 'developer',
  description: 'Shows developers',
  userperm: [],
  botperm: [],
  ownerOnly: false,
	category: "info",


  /** 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   * @param {String[]} args 
   */
  run: async (client, interaction, args) => {


    const serverinvite = `https://discord.gg/Y457mstEDz`;
    const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=1016392200516550736&permissions=257698417728&scope=bot%20applications.commands`;
    const embed = new MessageEmbed()
      .setTitle('<:developersss:1018518662589722674> Developers')
      .setDescription(`
DEVANSH#4075\nAyush#1234`
  
              )
      .setColor('#03fcdb')
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
		{ name: '<a:owner:1018179421309513890> Owner', value: 'DEVANSH#4075' },) 
      .setFooter({ text: client.user.tag })

    const actionRow = new MessageActionRow()
      .addComponents([
        new MessageButton()
          .setLabel('Invite')
          .setURL(inviteUrl)
          .setStyle("LINK")
        .setEmoji('1018201327853109248')
        
      ])
    .addComponents([
        new MessageButton()
          .setLabel('Support server')
          .setURL(serverinvite)
          .setStyle("LINK")
        .setEmoji('1018200173081546783')
        
      ])
    interaction.followUp({ embeds: [embed], components: [actionRow] })
  }
          }