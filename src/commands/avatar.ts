import { Message, MessageEmbed } from 'discord.js';
import config from '../config';

async function AvatarCommand(msg: Message): Promise<void> {
  const user = msg.mentions.users.first() || msg.author;
  const embed = new MessageEmbed()
    .setColor(config.bot.color)
    .setTitle('Avatar')
    .setDescription(
      msg.mentions.users.first()
        ? `Este es el avatar de ${user.username}`
        : `${user.username}, Este es tu avatar`
    )
    .setImage(
      user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })
    );
  await msg.channel.send(embed);
}

export default AvatarCommand;
