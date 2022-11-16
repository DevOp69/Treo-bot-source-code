const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment, MessageCollector, MessageSelectMenu } = require('discord.js');
const ee = require("../../config/embed.json")
const em = require("../../config/emojis.json")

module.exports = {
  name: 'helps',
  description: 'shows all commands',
  userperm: [],
  botperm: [],
  ownerOnly: false,


  /** 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   * @param {String[]} args 
   */
  run: async (client, interaction, args) => {


    const serverinvite = `https://discord.gg/KDWwetWtbN`;
    const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=1016392200516550736&permissions=257698417728&scope=bot%20applications.commands`;
    
    const embed = new MessageEmbed()
      .setTitle('Treo Commands')
      .setDescription(`↷₊˚ʚ Bot totally in slash commands
 ・If you have any enquires about the bot, you could join our [Support Server](https://discord.gg/KDWwetWtbN)`)
.addFields({name: "**<:icons_bulb:1018201993979891793> Suggetion commands**", value: "`suggestion set , suggetion reset , suggest`"},
{name: "**<:icons_info:1018200051086008330> Info commands**", value: "`help , invite , vote , ping , developers` "},
{name: "**<:Icons_utility:1018371744416923738>Utility commands**", value: "`poll , calc , userinfo` "},
          {name: "**<:icons_magicwand:1023226970873540689>Extra commands**", value: "`nitro` , `changelogs` , `avatar` "},)

      
      .setColor('RANDOM')
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL())
      .setImage("https://media.discordapp.net/attachments/1017764767244505190/1017793760937123971/standard_10.gif")
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