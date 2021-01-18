import { Client, Message } from 'discord.js';

async function PingCommand(msg: Message, client: Client): Promise<void> {
  await msg.channel.send(
    `:pandaKiller: Latency is ${Date.now() - msg.createdTimestamp}ms.`
  );
}

export default PingCommand;
