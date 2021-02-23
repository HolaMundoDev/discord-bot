import { Message, TextChannel } from 'discord.js';

import { Command } from '@/types/commands';

import config from '../../config';
import Embed, { createBaseEmbed } from '../../utils/embed';
import SendMessage from '../../utils/sendMessage';

const BanCommand: Command = {
  name: 'ban',
  description: 'This ban command',
  category: 'moderation',
  run: async (message: Message) => {
    // verify mentions
    if (!message.mentions.members?.first()) {
      const embed = createBaseEmbed(message, {
        title: 'Mención requerida',
        description: `No se ha mencionado el usuario que será baneado`,
      });

      SendMessage(message.channel, embed, 1000);
      return;
    }

    const userToBan = message.mentions.members?.first();
    const banReason: string = message.content.split(' ', 3)[2];

    // ban
    await userToBan?.ban();

    // create embed
    const embed = createBaseEmbed(message, {
      title: '¡Ban exitoso!',
      description: `Se ha baneado correctamente al usuario **${userToBan?.user.username}**`,
    });

    const moderationsChannel = message.guild?.channels.cache.get(
      '790959815060226068'
    );
    if (
      !((moderationsChannel): moderationsChannel is TextChannel =>
        moderationsChannel?.type === 'text')(moderationsChannel)
    )
      return;

    const moderationEmbed = Embed({
      title: '!Ban!',
      description: `**Usuario:** ${userToBan?.user.username}\n**Moderador:** ${
        message.author.username
      }\n**Razón**: ${banReason || 'No se ha indicado una razón'}`,
      color: config.bot.color,
    });

    SendMessage(moderationsChannel, moderationEmbed, 1000);
    message.delete({ timeout: 500 });
    SendMessage(message.channel, embed, 1000);
  },
};

export default BanCommand;
