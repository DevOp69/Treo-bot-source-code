const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment, MessageCollector, MessageSelectMenu } = require('discord.js');
const ee = require("../../config/embed.json")
const em = require("../../config/emojis.json")

module.exports = {
  name: 'changelogs',
  description: 'Shows the change logs/updates of bot',
  userperm: [],
  botperm: [],
  ownerOnly: false,
	category: "others",


  /** 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   * @param {String[]} args 
   */
  run: async (client, interaction, args) => {


    const voteUrl = `https://discord.gg/KDWwetWtbN`;
    
    const embed = new MessageEmbed()
      .setTitle('Change logs')
      .setDescription(`Currently there is no changes`)
      .setColor('#03fcdb')
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter({ text: client.user.tag })
    const actionRow = new MessageActionRow()
      .addComponents([
        new MessageButton()
          .setLabel('Support Server')
          .setURL(voteUrl)
          .setStyle("LINK")
          .setEmoji("1018200173081546783")
          .setDisabled(false)
        
      ])
    interaction.followUp({ embeds: [embed], components: [actionRow] })
  }
}