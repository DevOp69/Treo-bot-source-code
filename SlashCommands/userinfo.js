  const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
const Discord = require('discord.js')
const db = require("quick.db")
let moment = require('moment')

module.exports = {
    name: "userinfo",
    description: "Give info about a user",
    type: 'CHAT_INPUT',
	  category: "others",
    options: [
    {
      name: "user",
      description: "the user of whom you want info",
      type: "USER",
      required: true,

    },
  ],
  run: async (client, interaction, args) => {

try {
let message = interaction
    const member = interaction.options.getMember('user');
    var status = member.presence?.status;
    

        if(status === 'dnd') status = "<:dnd_status:1023221091348516874> **User Do not Disturb**"// if the person is dnd  so it will type in the embed Do no Distrub
        if(status == 'online') status = "<:icons_green:1018200492402282596> **User Online**"
        if(status == 'offline') status = "<:H_status:1023221024537452654> **User Offline**"
        if(status === 'idle') status = "<:idle_status:1023221051401982013> **User Idle**"
        if(status === 'streaming') status = "<:Streaming:1023221476289159189> **User Streaming**"

        const permissions = member.permissions.toArray().map(perm => {
            return perm
              .toLowerCase()
              .replace(/_/g, " ") // Replace all underscores with spaces
              .replace(/\w\S*/g, txt => {
                // Capitalize the first letter of each word
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
              });
          });

        const flags = member.user.flags.toArray();
        
    let emoji = "<:CheckMark:886812691262496850>"

    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Select the category')
          .addOptions([

            {
              label: 'User status',
              description: 'Click to see the user status',
              value: 'status',
              
            },
            {
              label: 'User permissions',
              description: 'Click to user perms',
              value: 'perms',
              
            },

          ]),
      )



    let loads = await db.get(`freeload_${member.id}_${member.guild.id}`)
    if(loads == null) loads = 0
console.log(loads)
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("**Welcome to user info!**")
      .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(
        `↷ **Username**: ${member.user.tag} \n ↷ **User ID**: ${member.user.id} \n ↷ **Join On** : ${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} \n ↷ **Created On**: ${member.user.createdAt.toLocaleString()} \n ↷ **User freeloads**: ${loads}`
      )







    let menumsg = await interaction.editReply({ content: 'ㅤ', ephemeral: true, embeds: [embed], components: [row]});

     let embed1 = new MessageEmbed()
      .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTitle("User status")
      .addField('User Status ',`${status}`, true)
      .setColor('2F3136')

      let embed3 = new MessageEmbed()
      .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTitle("User Permissions")
      .addField('Permissions', `${permissions.join(`, `)}`)
      .setColor('2F313')



    const collector = interaction.channel.createMessageComponentCollector({

      componentType: "SELECT_MENU"
    });


    collector.on("collect", async (collected) => {
      const value = collected.values[0]
      if (value === "status") {
        collected.reply({ embeds: [embed1], ephemeral: true })
      }
       if (value === "perms") {
        collected.reply({ embeds: [embed3], ephemeral: true })
      }

    })
} catch(err) {
  console.log(err)
  interaction.followUp("Possible command error")
}
  }
          }