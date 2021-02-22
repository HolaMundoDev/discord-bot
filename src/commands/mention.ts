import config from '@/config';
import { Command } from '@/types/commands';
import Embed from '@/utils/embed';
import SendMessage from '@/utils/sendMessage';
import axios from 'axios';
import { Message } from 'discord.js';

const MentionCommand: Command = {
  name: 'mention',
  category: 'general',
  description: 'This is mention command',
  run: async (message: Message) => {
    // get qoutes
    const qoutes = await axios.get('https://type.fit/api/quotes');
    const qoutesIndex = Math.floor(Math.random() * 1501);

    let embed = Embed({
      title: 'Mention',
      description: `"${qoutes.data[qoutesIndex].text}"\n\n**- ${qoutes.data[qoutesIndex].author}**`,
      color: config.bot.color,
    });
    qoutes.data[qoutesIndex] ? SendMessage(message.channel, embed, 1000) : null;
  },
};

export default MentionCommand;
