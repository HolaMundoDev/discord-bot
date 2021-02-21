import { Message } from 'discord.js';

import { Command } from '@/types/commands';

import config from '../../config';
import Embed, { createBaseEmbed } from '../../utils/embed';
import SendMessage from '../../utils/sendMessage';

const UnbanCommand: Command = {
  name: 'unban',
  description: 'This unban command',
  category: 'moderation',
  run: async (message: Message, _client: any) => {
    const matches = message.content.match(/<@!([^;]*)>/);
    if (!matches) {
      const embed = createBaseEmbed(message, {
        title: 'Mención requerida',
        description: `No se ha mencionado el usuario que será desbaneado`,
      });

      SendMessage(message.channel, embed, 1000);
      return;
    }

    const bans = await message.guild?.fetchBans();
    const userToUnban = bans?.find(ban => ban.user.id === matches[1]);

    if (!userToUnban) {
      const embed = createBaseEmbed(message, {
        title: 'El usuario no ha sido baneado',
        description: `El usuario **${matches[0]}** no ha sido baneado`,
      });

      SendMessage(message.channel, embed, 1000);
      return;
    }

    await message.guild?.members.unban(userToUnban.user);

    const moderationEmbed = createBaseEmbed(message, {
      title: '¡Unban exitoso!',
      description: `Se ha desbaneado correctamente al usuario **${userToUnban?.user.username}**`,
    });

    const unbanReason: string = message.content.split(' ', 3)[2];
    const embed = Embed({
      title: '!Unban!',
      description: `**Usuario:** ${
        userToUnban?.user.username
      }\n**Moderador:** ${message.author.username}\n**Razón**: ${
        unbanReason || 'No se ha indicado una razón'
      }`,
      color: config.bot.color,
    });

    SendMessage(message.channel, moderationEmbed, 1000);
    message.delete({ timeout: 500 });
    SendMessage(message.channel, embed, 1000);
  },
};

export default UnbanCommand;
