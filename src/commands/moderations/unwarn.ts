import { Message, TextChannel } from 'discord.js';

import config from '@/config';
import { Command } from '@/types/commands';
import Embed from '@/utils/embed';
import SendMessage from '@/utils/sendMessage';

const UnwarnCommand: Command = {
  name: 'unwarn',
  description: 'This is unwarn command',
  category: 'moderation',
  run: async (message: Message) => {
    // verify mentions
    if (!message.mentions.members?.first()) {
      let embed = Embed({
        author: {
          name: message.author.username,
          avatar: message.author.displayAvatarURL({
            dynamic: true,
            size: 32,
            format: 'webp',
          }),
        },
        title: 'Mención requerida',
        description: `No se ha mencionado el usuario que sera advertido`,
        color: config.bot.color,
      });

      SendMessage(message.channel, embed, 1000);
      return;
    } else {
      const userToWarn = message.mentions.members?.first();
      const warnRole = '800804456156626984';

      // checking if the user has already been warned
      if (userToWarn?.roles.cache.has(warnRole) == false) {
        let embed = Embed({
          author: {
            name: message.author.username,
            avatar: message.author.displayAvatarURL({
              dynamic: true,
              size: 32,
              format: 'webp',
            }),
          },
          title: 'No ha sido advertido',
          description: `El usuario **${userToWarn.user.username}** no ha sido advertido`,
          color: config.bot.color,
        });

        SendMessage(message.channel, embed, 1000);
        return;
      }

      const warnReason = message.content.split(' ', 3)[2] || undefined;

      // unwarn user
      await userToWarn?.roles.remove(warnRole, warnReason);

      // create embed
      let embed = Embed({
        author: {
          name: message.author.username,
          avatar: message.author.displayAvatarURL({
            dynamic: true,
            size: 32,
            format: 'webp',
          }),
        },
        title: '¡Desadvertencia exitosa!',
        description: `Se ha desadvertido correctamente al usuario **${userToWarn?.user.username}**`,
        color: config.bot.color,
      });
      const moderationsChannel = message.guild?.channels.cache.get(
        '790959815060226068'
      );
      if (
        !((moderationsChannel): moderationsChannel is TextChannel =>
          moderationsChannel?.type === 'text')(moderationsChannel)
      )
        return;

      let moderationEmbed = Embed({
        title: '¡Desadvertencia!',
        description: `**Usuario:** ${
          userToWarn?.user.username
        }\n**Moderador:** ${message.author.username}\n**Razón**: ${
          warnReason || 'No se ha indicado una razón'
        }`,
        color: config.bot.color,
      });

      SendMessage(moderationsChannel, moderationEmbed, 1000);
      message.delete({ timeout: 500 });
      SendMessage(message.channel, embed, 1000);
      return;
    }
  },
};

export default UnwarnCommand;
