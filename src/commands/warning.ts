import config from '../config';
import { Message } from 'discord.js';

async function WarningAdd(msg: Message): Promise<void> {
  const userToWarn = msg.mentions.members?.first();
  let warnedRoleId = '800804456156626984';
  let warnReason = msg.content.split(' ', 4)[3] || undefined;
  if (userToWarn?.roles.cache.has(warnedRoleId) == true) {
    msg.reply(
      `El usuario **${
        msg.mentions.users.first()?.username
      }** ya ha sido advertido.`
    );
  } else {
    msg.channel.startTyping();
    userToWarn?.roles.add(warnedRoleId, warnReason);
    await msg.reply(
      `¡Se ha advertido al usuario **${
        msg.mentions.users.first()?.username
      }** exitosamente!`
    );
    msg.channel.stopTyping();
  }
}

async function WarningRemove(msg: Message): Promise<void> {
  const userToUnWarn = msg.mentions.members?.first();
  let warnedRoleId = '800804456156626984';
  let warnReason = msg.content.split(' ', 4)[3] || undefined;
  if (userToUnWarn?.roles.cache.has(warnedRoleId) == false) {
    msg.reply(
      `El usuario **${
        msg.mentions.users.first()?.username
      }** no ha sido advertido.`
    );
  } else {
    msg.channel.startTyping();
    userToUnWarn?.roles.remove(warnedRoleId, warnReason);
    await msg.reply(
      `¡Se ha desadvertido al usuario **${
        msg.mentions.users.first()?.username
      }** exitosamente!`
    );
    msg.channel.stopTyping();
  }
}

async function WarningCommand(msg: Message): Promise<void> {
  if (
    msg.member?.roles.cache.has('789581683749158984') == false ||
    msg.member?.roles.cache.has('789593087293784115') == false
  ) {
    msg.channel.startTyping();
    await msg.reply('No tienes permisos suficentes para moderar');
    msg.channel.stopTyping();
    return;
  }
  const subCommand = msg.content.split(' ', 2)[1];
  switch (subCommand) {
    case 'add':
      WarningAdd(msg);
      break;
    case 'remove':
      WarningRemove(msg);
      break;
  }
}

export default WarningCommand;
