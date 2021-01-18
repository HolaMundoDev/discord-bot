import { Client, Message } from 'discord.js';

async function PingCommand(msg: Message, client: Client): Promise<void> {
  await msg.channel.send(
    `Pong!, la latencia actual es ${Date.now() - msg.createdTimestamp}ms.`
  );
}

export default PingCommand;
