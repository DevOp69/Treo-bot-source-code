const client = require("..");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const ee = require("../config/embed.json")
const em = require("../config/emojis.json")



  
client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

      const wait = require('node:timers/promises').setTimeout;

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        const userperm = interaction.member.permissions.has(cmd.userperm || []);

        if (!userperm) {
            let userperm = new MessageEmbed().setDescription(
                `*<:icons_no:1018202282657058866> You Need **${cmd.userperm}**  Permissions!*`
              );
         return interaction.followUp({embeds : [userperm]}); }

        const botperm = interaction.guild.me.permissions.has(cmd.botperm || []);
        if (!botperm) {
            let perms = new MessageEmbed().setDescription(
                `*<:icons_no:1018202282657058866> I Need **${cmd.botperm}** Permissions!*`
              );
          
         return interaction.followUp({embeds : [perms]}); }
     
      // Starting 

      let hasVoted = await client.topgg.hasVoted(interaction.user.id);

    const voteme = new MessageEmbed()

      .setTitle('')

      .setDescription(`You must vote me on [TOP.GG](https://top.gg/bot/1016392200516550736) to use this command`)

      .setColor('#03fcdb')

       const actionRow = new MessageActionRow()

      .addComponents([

        new MessageButton()

          .setLabel('Vote')

          .setURL("https://top.gg/bot/1016392200516550736")

          .setStyle("LINK")

          .setEmoji("1018200886268412017")

          .setDisabled(false)

        

      ])

if(cmd.voteOnly && !hasVoted){

  return interaction.followUp({embeds: [voteme] , components: [actionRow]}

  );

}

      //ending
             const { owners } = require("../config/config.json");
     if (cmd) {
      if (cmd.ownerOnly) {
     if (!owners.includes(interaction.user.id)) {
     let ownerOnly = new MessageEmbed()
      .setDescription( `*<:icons_no:1018202282657058866> Only Bot Developer can use this command!*`)
    return interaction.followUp({embeds : [ownerOnly]})
    }}
    }
       

        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    }
}); 
client.on('interactionCreate', interaction => {
	if (!interaction.isSelectMenu()) return;
	console.log(interaction);
});