import { MessageEmbed } from 'discord.js';

function Embed({ ...props }: EmbedProps) {
  let embed = new MessageEmbed()
    .setTitle(props.title)
    .setDescription(props.description)
    .setColor(props.color)
    .setTimestamp(props.timestamp || Date.now());

  props.image ? embed.setImage(props.image) : null;
  props.author
    ? embed.setAuthor(props.author?.name, props.author?.avatar)
    : null;
  props.thumbnail ? embed.setThumbnail(props.thumbnail) : null;
  props.footer
    ? embed.setFooter(props.footer?.text, props.footer.iconURL)
    : null;

  return embed;
}

export default Embed;
