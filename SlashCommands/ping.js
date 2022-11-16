const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment, MessageCollector, MessageSelectMenu } = require('discord.js');
const ee = require("../../config/embed.json")
const em = require("../../config/emojis.json")

module.exports = {
  name: 'ping',
  description: 'shows bots ping',
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
    let days = Math.floor(client.uptime / 86400000)
    let hours = Math.floor(client.uptime / 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60
    let webLatency = new Date() - interaction.createdAt
    let apiLatency = client.ws.ping
    let totalLatency = webLatency + apiLatency
    let emLatency = {
      Green: '🟢',
      Yellow: '🟡',
      Red: '🔴'
    }
    interaction.followUp({
      embeds: [
        new MessageEmbed()
          .setColor("#00ffaa")
          .setTitle(`Returns Latency And API Ping`)
          .setFields([
            {
              name: `<:SC_dot:1018377664811245668> Websocket Latency`,
              value: `>>> \`\`\`yml\n${webLatency <= 200 ? emLatency.Green : webLatency <= 400 ? emLatency.Yellow : emLatency.Red} ${webLatency}ms\`\`\``,
              inline: true
            },
            {
              name: `<:SC_dot2:1018377650261205073> API Latency`,
              value: `>>> \`\`\`yml\n${apiLatency <= 200 ? emLatency.Green : apiLatency <= 400 ? emLatency.Yellow : emLatency.Red} ${apiLatency}ms\`\`\``,
              inline: true
            },
            {
              name: `<:icons_green:1018200492402282596> Uptime`,
              value: `>>> \`\`\`m\n${days} Days : ${hours} Hrs : ${minutes} Mins : ${seconds} Secs\`\`\``,
              inline: false
            }
          ])]
    })
  }
}