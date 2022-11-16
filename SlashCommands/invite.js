const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment, MessageCollector, MessageSelectMenu } = require('discord.js');
const ee = require("../../config/embed.json")
const em = require("../../config/emojis.json")

module.exports = {
  name: 'invite',
  description: 'invite me',
  userperm: [],
  botperm: [],
  ownerOnly: false,


  /** 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   * @param {String[]} args 
   */
  run: async (client, interaction, args) => {


    const serverinvite = `https://discord.gg/Y457mstEDz`;
    const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=1016392200516550736&permissions=257698417728&scope=bot%20applications.commands`;
    const embed = new MessageEmbed()
      .setTitle('Invite me')
      .setDescription(`Invite the bot to your server. [Click here](${inviteUrl})`)
      .setColor('#03fcdb')
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL())
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