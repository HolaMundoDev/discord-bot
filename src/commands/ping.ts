import { Client, Message } from 'discord.js';
import { Command } from '@/@types/commands';
import SendMessage from '@/utils/sendMessage';

const PingCommand: Command = {
  name: 'ping',
  description: 'This is ping',
  category: 'general',
  run: async (message: Message) => {
    await SendMessage(
      message.channel,
      `Pong!, la latencia actual es ${
        Date.now() - message.createdTimestamp
      }ms.`,
      1000
    );
  },
};

export default PingCommand;
