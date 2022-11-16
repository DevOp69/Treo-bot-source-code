const { Client, Message, MessageEmbed, Collection, MessageActionRow, MessageButton } = require("discord.js");
const colors = require("colors");
const fs = require("fs");
const math = require('mathjs');
const { Command } = require("reconlx");
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: "32767",
});
module.exports = client;



const config = require("./config/config.json");
const ee = require("./config/embed.json");

const { Api } = require ("@top-gg/sdk");
client.topgg = new Api(process.env.token2);


// Global Variables
client.voiceManager = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.commands = new Collection();

// Initializing the project
//Loading files, with the client variable like Command Handler, Event Handler, ...
["command"].forEach((handler) => {
  require(`./handler/${handler}`)(client);
});

client.login(process.env.token).catch((e) => { console.log((e.message).red.bold) })



//message create lul

// **MAKE YOUR BOT RESPOND TO MENTIONS**
client.on("messageCreate", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
      const embed = new MessageEmbed()
      .setColor('#FFFFFF')
         .setTitle('')
         .setDescription("I'm totally in slash!! use `/helps` to get started!")
         .setFooter('')
      message.channel.send({
        embeds: [embed]
      })
    };
});
// stream status
  
client.on('ready', () => {
  const activities = [
      
    { name: `/helps | /invite`, type: 0 }, // LISTENING
    
        { name: `${client.guilds.cache.size} Servers`, type: 2 }, // PLAYING
        { name: `${client.users.cache.size} Users`, type: 3 }, // WATCHING
    ];
    const status = [
        'online',
        'dnd',
        'idle'
    ];
    let i = 0;
    setInterval(() => {
        if(i >= activities.length) i = 0
        client.user.setActivity(activities[i])
        i++;
    }, 5000);
  
    let s = 0;
    setInterval(() => {
        if(s >= activities.length) s = 0
        client.user.setStatus(status[s])
        s++;
    }, 5000);
});



// guild create
client.on('guildCreate', guild =>{

  const channelId = '1016289853538844692'; //put your channel ID here

  const channel = client.channels.cache.get(channelId); 
   //This Gets The Guild Owner
  if(!channel) return; //If the channel is invalid it returns
  const embed10 = new MessageEmbed()
    .setTitle("Treo joined")
      .setDescription(`<:icons_Discord:1018200173081546783> Guild name **${guild.name}**\n<:icons_id:1024349166463352932> Guild ID **${guild.id}**\n<:mcn_members:1024349274097582093> Guild member **${guild.memberCount}**\n<:LM_Icons_Home:1020164143816396820> Treo is now in **${client.guilds.cache.size}** guilds`)
  
      .setColor('RANDOM')
      .setFooter(`Treo joined`);
      channel.send({ embeds: [embed10]});
});


client.on('guildDelete', guild =>{
  const channelId = '1016289853538844692';//add your channel ID
  const channel = client.channels.cache.get(channelId); //This Gets That Channel
  
  if(!channel) return;  //If the channel is invalid it returns
  const embed11 = new MessageEmbed()
    .setTitle("Treo is kicked")
     .setDescription(`<:icons_Discord:1018200173081546783> Guild name **${guild.name}**\n<:icons_id:1024349166463352932> Guild ID **${guild.id}**\n<:mcn_members:1024349274097582093> Guild member **${guild.memberCount}**\n<:LM_Icons_Home:1020164143816396820> Treo is now in **${client.guilds.cache.size}** guilds`)
      .setFooter(`Treo kicked`)
      .setColor('RANDOM')
      channel.send({ embeds: [embed11]});
});


//  Guild create random message
client.on("guildCreate", (guild) => {
  let channelToSend;
  let commands = client.commands.map(command => command.name).join(", ");

  guild.channels.cache.forEach((channel) => {
    if (channel.type === "GUILD_TEXT" && !channelToSend && channel.permissionsFor(guild.me).has("SEND_MESSAGES")) channelToSend = channel;
  });

  if (!channelToSend) return;

  let joinMessageEmbed = new MessageEmbed()
    .setTitle("Thanks for inviting me!")
    .setURL("")
    .setDescription(`I'm Totally in slash!! Use /helps to get started\nMade by [DEVANSH#4075](https://discord.gg/KDWwetWtbN)`)
    .setFooter({ text: `TNX FOR INVITING ME 💖` });
      const actionRow = new MessageActionRow()
      .addComponents([
        new MessageButton()
          .setLabel('Support Server')
          .setURL('https://discord.gg/KDWwetWtbN')
          .setStyle("LINK")
          .setEmoji("<:icons_Discord:1018200173081546783>")
          .setDisabled(false)
        
      ])
  channelToSend.send({ embeds: [joinMessageEmbed] , components: [actionRow] });
});






const express = require('express');
const app = express();
const port = 8080;
app.all('/', (req, res) => {
  res.send(`Express Activated`);
  res.end();
});
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));