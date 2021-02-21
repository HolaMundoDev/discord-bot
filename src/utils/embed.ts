import { Message, MessageEmbed } from 'discord.js';

import config from '@/config';

const Embed = ({ ...props }: EmbedProps): MessageEmbed => {
  const embed = new MessageEmbed()
    .setTitle(props.title)
    .setDescription(props.description)
    .setColor(props.color)
    .setTimestamp(props.timestamp || Date.now());

  return embed;
};

export const createBaseEmbed = (
  message: Message,
  props: Omit<Omit<EmbedProps, 'author'>, 'color'>
): MessageEmbed =>
  Embed({
    author: {
      name: message.author.username,
      avatar: message.author.displayAvatarURL({
        dynamic: true,
        size: 32,
        format: 'webp',
      }),
    },
    color: config.bot.color,
    ...props,
  });

export default Embed;
