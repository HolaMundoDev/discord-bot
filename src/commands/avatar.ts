import { Message, MessageEmbed } from 'discord.js';
import config from '../config';
import SendMessage from '../utils/sendMessage';
import Embed from '../utils/embed';

async function AvatarCommand(msg: Message): Promise<void> {
  const user = msg.mentions.users.first() || msg.author;
  let embed = Embed({
    author: {
      name: msg.author.username,
      avatar: msg.author.displayAvatarURL({
        format: 'webp',
        dynamic: true,
        size: 32,
      }),
    },
    title: 'Avatar',
    description: msg.mentions.users.first()
      ? `Este es el avatar de **${user.username}**`
      : `**${user.username}**, Este es tu avatar`,
    color: config.bot.color,
    image: user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }),
  });

  SendMessage(msg, embed, 1000);
  return;
}

export default AvatarCommand;
