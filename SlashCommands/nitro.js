
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');
module.exports = {
  name: "nitro",
  description: "FREE nitro!!!",
  aliases: [""],
  category: "fun",
  cooldown: 10,
    voteOnly: "true",
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  botPerms: "",
  userPerms: "",
  run: async (client, interaction, args) => {
    
      const nitro = new MessageEmbed()      
        .setColor("WHITE")      
        .setTitle("You've been gifted a subscription!")      
        .setThumbnail("https://static.roundme.com/upload/user/d30750eda6c30bba9295ad629961420555c05496.png")      
        .setDescription(`You've been gifted Nitro for **1 Month!**\nExpires in **48 hours**`)      
        .setFooter({ text: "Free nitro!!", iconURL: "https://static.roundme.com/upload/user/d30750eda6c30bba9295ad629961420555c05496.png"});  
      const row = (state) => [
        new MessageActionRow().addComponents(
          new MessageButton().setCustomId("clicked").setDisabled(state).setLabel("Claim").setStyle(3)
      ),
    ];
      const msg = await interaction.followUp({
      embeds: [nitro],
      components: row(false),
      });
      const collector = msg.createMessageComponentCollector((button) => button.user.id === message.author.id, {time: 60e3});    
      collector.on('collect', async (b) => {
        if (b.customId === "clicked") {
        msg.edit({ content: "https://imgur.com/NQinKJB", embeds: [], components: [] });
      }
      })   
    
  
  }}
