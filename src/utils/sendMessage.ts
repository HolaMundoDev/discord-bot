import { Message, MessageEmbed } from "discord.js";

function sleep(miliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, miliseconds));
}

async function SendMessage(msg: Message, msgToSend: string | MessageEmbed, miliseconds: number) {
    msg.channel.startTyping();
    await sleep(miliseconds);
    msg.channel.stopTyping();
    await msg.channel.send(msgToSend);
}

export default SendMessage;