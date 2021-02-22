import config from '@/config';
import { Client, Message } from 'discord.js';
import AvatarCommand from '@/commands/avatar';
import PingCommand from '@/commands/ping';
import MentionCommand from '@/commands/mention';
import WarnCommand from '@/commands/moderations/warn';
import UnwarnCommand from '@/commands/moderations/unwarn';

function onMessage(msg: Message, client: Client) {
  if (msg.content.startsWith(config.bot.prefix)) {
    let msgSplit = msg.content.split(' ', 2);
    let commandName = msgSplit[0].replace(config.bot.prefix, '');

    switch (commandName) {
      case 'avatar':
        AvatarCommand.run(msg, client);
        break;
      case 'ping':
        PingCommand.run(msg, client);
        break;
      case 'mention':
        MentionCommand.run(msg, client);
        break;
      case 'warn':
        WarnCommand.run(msg, client);
        break;
      case 'unwarn':
        UnwarnCommand.run(msg, client);
        break;
    }
  } else if (msg.content === '<@!795347849159901194>') {
    MentionCommand.run(msg, client);
  }
}

export default onMessage;
