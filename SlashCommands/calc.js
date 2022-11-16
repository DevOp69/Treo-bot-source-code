const { Client, CommandInteraction } = require("discord.js");
const simplydjs = require("simply-djs") 
module.exports = {
   name: "calc",
   description: "Calculator",
	 category: "others",
   type: "CHAT_INPUT",
   run: async (client, interaction, args) => {
      // interactionCreate Event


simplydjs.calculator(interaction, {
  slash: true
  // other options
});
   },
};