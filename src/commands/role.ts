import config from '../config';
import { Message } from 'discord.js';

function RoleAdd(msg: Message) {
  config.roles.map((role) => {
    const roleNumberToAdd = msg.content.split(' ', 3)[2];
    let roleIdToAdd = undefined;
    if (role.number == roleNumberToAdd) {
      roleIdToAdd = role.id;
      let roleNameToAdd = role.name;
      if (
        msg.member?.roles.cache.some((role) => role.name === roleNameToAdd) ==
        true
      ) {
        msg.reply('¡Ya tienes el rol!');
      } else {
        msg.channel.startTyping();
        msg.member?.roles.add(roleIdToAdd);
        msg.reply('Rol agregado!');
        msg.channel.stopTyping();
      }
    }
  });
}

async function RoleCommand(msg: Message): Promise<void> {
  const subCommand = msg.content.split(' ', 2)[1];
  switch (subCommand) {
    case 'add':
      RoleAdd(msg);
  }
}

export default RoleCommand;
