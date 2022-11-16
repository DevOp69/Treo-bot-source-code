const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment, MessageCollector, MessageSelectMenu, Discord } = require('discord.js');
const util = require('util');
const ee = require("../../config/embed.json")

const em = require("../../config/emojis.json")

module.exports = {

  name: 'lists',

  description: 'DEVs Only',

  userperm: [],

  botperm: [],

  ownerOnly: true,

	category: "owner",

  /** 

   * @param {Client} client 

   * @param {CommandInteraction} interaction 

   * @param {String[]} args 

   */

  run: async (client, interaction, args) => {
  
  interaction.followUp({content:"**Look in your DMs!**"})

  const guilds = await client.guilds.cache.map(

    (guild) =>

  `${guild.name} | ${guild.id} | ${guild.memberCount} Members`

    );

    interaction.member.send({files: [new MessageAttachment(Buffer.from(`${require('util').inspect(guilds)}`), 'all_guilds.json')]})
  
  }
    }