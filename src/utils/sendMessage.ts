import { DMChannel, MessageEmbed, NewsChannel, TextChannel } from 'discord.js';

function sleep(miliseconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

async function SendMessage(
  channel: TextChannel | DMChannel | NewsChannel,
  msgToSend: string | MessageEmbed,
  miliseconds: number
) {
  channel.startTyping();
  await sleep(miliseconds);
  channel.stopTyping();
  await channel.send(msgToSend);
}

export default SendMessage;
