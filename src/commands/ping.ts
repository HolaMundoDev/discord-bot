import { Client, Message } from 'discord.js';
import { Command } from '@/types/commands';
import SendMessage from '@/utils/sendMessage';
import Embed from '@/utils/embed';
import config from '@/config';

const PingCommand: Command = {
  name: 'ping',
  description: 'This is ping',
  category: 'general',
  run: async (message: Message) => {
    let embed = Embed({
      title: '¡Pong!',
      description: `La latencia actual es de ${
        Date.now() - message.createdTimestamp
      }ms.`,
      color: config.bot.color,
    });
    await SendMessage(message.channel, embed, 1000);
  },
};

export default PingCommand;
