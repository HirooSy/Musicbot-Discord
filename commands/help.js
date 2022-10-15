const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Information about the bot",
  emoticon: "💬",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${cmd.emoticon ? cmd.emoticon + " " : ""}${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );

    let Embed = new MessageEmbed()
      .setAuthor(
        `${client.user.username}`,
        client.botconfig.IconURL
      )
      .setColor(client.botconfig.EmbedColor)
      .setFooter(
        `© Hiroosy Dev`
      ).setDescription(`🐾 𝗟𝗶𝘀𝘁 𝗖𝗼𝗺𝗺𝗮𝗻𝗱
${"• " + Commands.join("\n")}

[Support](${client.botconfig.SupportServer}) | [Github](https://github.com/hiroosy) | [Developer](https://wa.me/77781097455) | [Dination](https://saweria.co/LettaDev`);
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(
          message.channel,
          `❌ | Unable to find that command.`
        );

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .addField(
          "Permissions",
          "Member: " +
            cmd.permissions.member.join(", ") +
            "\nBot: " +
            cmd.permissions.channel.join(", "),
          true
        )
        .setFooter(
          `Prefix - ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }`
        );

      message.channel.send(embed);
    }
  },

  SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false,
      },
    ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
`> ${cmd.emoticon ? cmd.emoticon : ""} **<${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix} ${cmd.name}:0>** {cmd.usage ? "\`" + cmd.usage + "\`" : ""}\`
            • \`ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\` ${cmd.description}`
      );

      let Embed = new MessageEmbed()
        .setAuthor(
          `${client.user.username}`,
          client.botconfig.IconURL
        )
        .setColor(client.botconfig.EmbedColor)
        .setFooter(
          `© Hiroosy`
        ).setDescription(`\`\`\` •  Ｌ Ｉ Ｓ Ｔ   Ｃ Ｏ Ｍ Ｍ Ａ Ｎ Ｄ  •\`\`\`
${Commands.join("\n")}

[Support](${client.botconfig.SupportServer}) | [Github](https://github.com/hiroosy) | [Developer](https://wa.me/996999991832) | [Donation](https://saweria.co/LettaDev)`);
      if (!args) return interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find(
            (x) => x.aliases && x.aliases.includes(args[0].value)
          );
        if (!cmd)
          return client.sendTime(
            interaction,
            `❌ | Unable to find that command.`
          );

        let embed = new MessageEmbed()
          .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
          .setDescription(`> **Description:**\n${cmd.description}`)
          .setColor("GREEN")
          //.addField("Name", cmd.name, true)
          .addField("> **Aliases**", cmd.aliases.join(", "), true)
          .addField(
            "> **Usage**",
            `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
          )
          .addField(
            "> **Permissions**",
            "\`Member:\`\n" +
              cmd.permissions.member.join(", ") +
              "\n\`Bot:\`\n " +
              cmd.permissions.channel.join(", "),
            true
          )
          .setFooter(
            `Prefix - ${
              GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
            }`
          );

        interaction.send(embed);
      }
    },
  },
};