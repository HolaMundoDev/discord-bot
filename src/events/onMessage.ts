import { Client, Message } from 'discord.js';

import AvatarCommand from '@/commands/avatar';
import BanCommand from '@/commands/moderations/ban';
import UnbanCommand from '@/commands/moderations/unban';
import UnwarnCommand from '@/commands/moderations/unwarn';
import WarnCommand from '@/commands/moderations/warn';
import PingCommand from '@/commands/ping';
import config from '@/config';

function onMessage(msg: Message, client: Client) {
  if (msg.content.startsWith(config.bot.prefix)) {
    const msgSplit = msg.content.split(' ', 2);
    const commandName = msgSplit[0].replace(config.bot.prefix, '');

    switch (commandName) {
      case 'avatar':
        AvatarCommand.run(msg, client);
        break;
      case 'ping':
        PingCommand.run(msg, client);
        break;
      case 'warn':
        WarnCommand.run(msg, client);
        break;
      case 'unwarn':
        UnwarnCommand.run(msg, client);
        break;
      case 'ban':
        BanCommand.run(msg, client);
        break;
      case 'unban':
        UnbanCommand.run(msg, client);
        break;
    }
  }
}

export default onMessage;
