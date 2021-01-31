import { Client, Message } from 'discord.js';
import Embed from '../../utils/embed';
import config from '../../config';
import SendMessage from '../../utils/sendMessage';

async function WarnCommand(msg: Message, _client: Client): Promise<void> {
  // verify mentions
  if (!msg.mentions.members?.first()) {
    let embed = Embed({
      author: {
        name: msg.author.username,
        avatar: msg.author.displayAvatarURL({
          dynamic: true,
          size: 32,
          format: 'webp',
        }),
      },
      title: 'Mencion requerida',
      description: `No se ha mencionado el usuario que sera advertido`,
      color: config.bot.color,
    });

    SendMessage(msg.channel, embed, 1000);
    return;
  } else {
    const userToWarn = msg.mentions.members?.first();
    const warnRole = '800804456156626984';

    // checking if the user has already been warned
    if (userToWarn?.roles.cache.has(warnRole) == true) {
      let embed = Embed({
        author: {
          name: msg.author.username,
          avatar: msg.author.displayAvatarURL({
            dynamic: true,
            size: 32,
            format: 'webp',
          }),
        },
        title: 'Ya ha sido advertido',
        description: `El usuario **${userToWarn.user.username}** ya ha sido advertido`,
        color: config.bot.color,
      });

      SendMessage(msg.channel, embed, 1000);
      return;
    }

    const warnReason = msg.content.split(' ', 3)[2] || undefined;

    // warning
    await userToWarn?.roles.add(warnRole, warnReason);

    // create embed
    let embed = Embed({
      author: {
        name: msg.author.username,
        avatar: msg.author.displayAvatarURL({
          dynamic: true,
          size: 32,
          format: 'webp',
        }),
      },
      title: '¡Advertencia exitosa!',
      description: `Se ha advertido correctamente al usuario **${userToWarn?.user.username}**`,
      color: config.bot.color,
    });

    SendMessage(msg.channel, embed, 1000);
    return;
  }
}

export default WarnCommand;
