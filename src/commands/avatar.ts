import { Message } from 'discord.js';
import config from '@/config';
import SendMessage from '@/utils/sendMessage';
import Embed from '@/utils/embed';
import { Command } from '@/types/commands';

const AvatarCommand: Command = {
  name: 'avatar',
  description: 'This is avatar command',
  category: 'general',
  run: async (message: Message) => {
    const user = message.mentions.users.first() || message.author;
    let embed = Embed({
      author: {
        name: message.author.username,
        avatar: message.author.displayAvatarURL({
          format: 'webp',
          dynamic: true,
          size: 32,
        }),
      },
      title: 'Avatar',
      description: message.mentions.users.first()
        ? `Este es el avatar de **${user.username}**`
        : `**${user.username}**, Este es tu avatar`,
      color: config.bot.color,
      image: user.displayAvatarURL({
        format: 'png',
        dynamic: true,
        size: 1024,
      }),
    });

    SendMessage(message.channel, embed, 1000);
    return;
  },
};

export default AvatarCommand;
