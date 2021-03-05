import { HolaMundoInt } from "../@types/main";
import { EmbedProps } from "../@types/utils";
import { MessageEmbed } from "discord.js";

/**
 * @function
 * @param  { EmbedProps } props
 * @returns { MessageEmbed }
 */
function Embed(props: EmbedProps, HolaMundo: HolaMundoInt): MessageEmbed {
  let embed = new MessageEmbed();

  props.title ? embed.setTitle(props.title) : undefined;
  props.description ? embed.setDescription(props.description) : undefined;
  props.color ? embed.setColor(props.color) : embed.setColor(HolaMundo.color);
  props.timestamp
    ? embed.setTimestamp(props.timestamp)
    : embed.setTimestamp(Date.now());
  props.image ? embed.setImage(props.image) : undefined;

  return embed;
}

export default Embed;
