

const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {

    name: "leave",

    description: "Leave's the selected server",

    type: 'CHAT_INPUT',

    ephemeral: true,

    UserPerms: [],

    BotPerms: [],

    OwnerOnly: true,

    options: [

        {

            name: "guildid",

            description: "The guild id to leave",

            type: "STRING",

            required: true

        }

    ],

    /**

     *

     * @param {Client} client

     * @param {CommandInteraction} interaction

     * @param {String[]} args

     */

    run: async (client, interaction, args) => {

        const guildid = interaction.options.getString('guildid')

        try {

            let guild = client.guilds.cache.get(guildid)

           await guild.leave().then((g) => {
               const embed = new MessageEmbed()

                            .setTitle(`Left ${g.name}`)

                            .setColor("RANDOM")

                            .addField(`--> Guild ID : ${g.id}`)

                            .addField(`--> Guild Members : ${g.memberCount}`)

                            .addField(`--> Guild Owner ID : ${g.ownerId}`)

                            .setThumbnail(g.iconURL())

                interaction.followUp({embeds: [embed]})


                        

                    

               

            })

        } catch (err) {

            interaction.followUp({

                embeds: [

                    new MessageEmbed()

                    .setTitle(`:x: Error occured!`)

                    .setDescription(`Bot does not exists in that guild `)

                ]

            })

        }

    },

};

