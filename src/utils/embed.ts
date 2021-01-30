import { MessageEmbed } from 'discord.js';

interface EmbedProps {
  author?: {
    name: string;
    avatar?: string | undefined;
  };
  title: string | null;
  description: string | null;
  image?: string;
  color: string;
}

function Embed({ author, title, description, image, color }: EmbedProps) {
  let embed = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setColor(color);

  image ? embed.setImage(image) : null;
  author ? embed.setAuthor(author?.name, author?.avatar) : null;

  return embed;
}

export default Embed;
