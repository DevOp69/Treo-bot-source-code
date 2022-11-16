const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment, MessageCollector, MessageSelectMenu } = require('discord.js');
const ee = require("../../config/embed.json")
const em = require("../../config/emojis.json")

module.exports = {
  name: 'vote',
  description: 'vote me',
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


    const voteUrl = `https://top.gg/bot/1016392200516550736/vote`;
    
    const embed = new MessageEmbed()
      .setTitle('Vote me')
      .setDescription(`Vote the bot For cool perks and Voter role in our [support server](https://discord.gg/Y457mstEDz)`)
      .setColor('#03fcdb')
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter({ text: client.user.tag })
.setImage('') 
    const actionRow = new MessageActionRow()
      .addComponents([
        new MessageButton()
          .setLabel('Vote')
          .setURL(voteUrl)
          .setStyle("LINK")
          .setEmoji("1018200886268412017")
          .setDisabled(false)
        
      ])
    interaction.followUp({ embeds: [embed], components: [actionRow] })
  }
}