const { MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu, Client, CommandInteraction, MessageAttachment, MessageCollector} = require("discord.js"); 

module.exports = {

  name: "helps",

  description: "shows help menu",

  botperm: ["EMBED_LINKS"],


  ownerOnly: false,

  /** 

   * @param {Client} client 

   * @param {CommandInteraction} interaction 

   * @param {String[]} args 

   */

 

  run: async (client, interaction, args) => {

    let actionRow = new MessageActionRow()

      .addComponents([

        new MessageButton()

          .setLabel('Invite')

          .setURL('https://treoinv.tk')

          .setStyle("LINK")

        .setEmoji('1018201327853109248')

        

      ])

    .addComponents([

        new MessageButton()

          .setLabel('Support server')

          .setURL('https://discord.gg/euf5mqAMmM')

          .setStyle("LINK")

        .setEmoji('1018200173081546783')

        

      ])

    

    

    let helpMenu = new MessageActionRow()

    .addComponents(

      new MessageSelectMenu()

      .setCustomId("help_menu")

      .setPlaceholder('Help Menu')

      .setMinValues(1)

      .setMaxValues(1)

      .addOptions([

       

        {

          

          label: "Home",

          description: "Home page",

          value: "home",

          emoji: "1020164143816396820"

        },

        {

          

          label: "Suggetions",

          description: "Shows suggetions related commands",

          value: "suggetions",

          emoji: "1018201993979891793"

        },

        {

          label: "Info",

          description: "Shows all the Info commands",

          value: "info",

          emoji: "1018200051086008330"

        },

        {

          label: "Utilities",

          description: "Shows all the utilities commands",

          value: "utilities",

          emoji: "1018371744416923738"

          

        },

{

          label: "Extra commands",

          description: "Shows some extra commands",

          value: "extra",

          emoji: "<:icons_magicwand:1023226970873540689>"

          

        }

      ]) 

    )

    let editEmbed = new MessageEmbed()

   .setTitle('Treo Commands')

      .setDescription(`↷₊˚ʚ Bot totally in slash commands\n・If you have any enquires about the bot, you could join our [Support Server](https://discord.gg/KDWwetWtbN)\n\n\n**<:icons_bulb:1018201993979891793> Suggetion commands**\n\n**<:icons_info:1018200051086008330> Info commands**\n\n**<:Icons_utility:1018371744416923738>Utility commands**\n\n**<:icons_magicwand:1023226970873540689>Extra commands**`)

      

      .setColor('RANDOM')

      .setTimestamp()

      .setThumbnail(client.user.displayAvatarURL())

      .setImage("https://media.discordapp.net/attachments/982518625191723058/1033378431494266972/standard_16.gif")

      .setFooter({ text: client.user.tag })

    

await interaction.followUp({

embeds: [editEmbed], components :

[helpMenu,actionRow] })

let embed1 = new MessageEmbed()

    .setTitle('Suggetions commands')

    .setDescription('Suggetions commands')

.addFields(

		{ name: '**suggetion set**', value: 'Sets the suggetions channel where suggestions will go!' },

		{ name: '**Suggestions reset**', value: 'resets the suggestions system!' },

		{ name: '**suggest**', value: 'sends the suggestions!', inline: true },

	)

    .setColor('GREEN')

    

	let embed2 = new MessageEmbed()

    .setTitle('Info commands')

    .setDescription('Some of the INFO COMMANDS')

.addFields(

		{ name: '**help**', value: 'Shows the help menu!' },

		{ name: '**invite**', value: 'Send bot invite link!' },

		{ name: '**ping**', value: 'Shows bot Bots ping/uptime!', inline: true },

		{ name: '**vote**', value: 'Sends the top.gg vote link!', inline: true },

    	{ name: '**developers**', value: 'Sends the list of developers/owners of the bot!', inline: true },

	)

    .setColor('GREEN')

let embed3 = new MessageEmbed()

    .setTitle('Utilities commands')

    .setDescription('Some utilities commands')

.addFields(

		{ name: '**poll**', value: 'Advanced poll system!' },

		{ name: '**calc**', value: 'a simple calculator!' },

		{ name: '**userinfo**', value: 'Get some information of a user! ', inline: true },

	)

    .setColor('GREEN')

let embed4 = new MessageEmbed()

    .setTitle('Extra commands')

    .setDescription("Some of the extra commands")

.addFields(

		{ name: '**Nitro**', value: 'Rick roll your friends with fake nitro!' },

		{ name: '**avatar**', value: 'Get any users avatar in png/jpg/gif!' },

		{ name: '**changelogs**', value: 'See what changes we made in bot!', inline: true },

	

	)

      

    .setColor("GREEN")

const collector = interaction.channel.createMessageComponentCollector({ 

  componentType: 'SELECT_MENU',

}) 

  collector.on("collect", async (collected) => {

    const value = collected.values[0]

      

       if(value === "suggetions") {

         collected.update({embeds:[embed1], ephemeral:true})

}      

if(value === "info") {

         collected.update({embeds:[embed2], ephemeral:true})

}

if(value === "utilities") {

         collected.update({embeds:[embed3], ephemeral:true})

}

    if(value === "home") {

         collected.update({embeds:[editEmbed], ephemeral:true})

}      

      if(value === "extra") {

         collected.update({embeds:[embed4], ephemeral:true})

}      

                          }) 

                  

  }

};