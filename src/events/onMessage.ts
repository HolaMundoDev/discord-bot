import config from '@/config';
import { Client, Message } from 'discord.js';
import AvatarCommand from '@/commands/avatar';
import PingCommand from '@/commands/ping';
import WarnCommand from '@/commands/moderations/warn';
import UnwarnCommand from '@/commands/moderations/unwarn';

function onMessage(msg: Message, client: Client) {
  if (msg.content.startsWith(config.bot.prefix)) {
    let msgSplit = msg.content.split(' ', 2);
    let commandName = msgSplit[0].replace(config.bot.prefix, '');

    switch (commandName) {
      case 'avatar':
        AvatarCommand(msg);
        break;
      case 'ping':
        PingCommand(msg, client);
        break;
      case 'warn':
        WarnCommand(msg, client);
        break;
      case 'unwarn':
        UnwarnCommand(msg);
        break;
    }
  }
}

export default onMessage;
