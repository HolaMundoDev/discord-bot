import { GuildMember, TextChannel } from 'discord.js';

import config from '@/config';
import Embed from '@/utils/embed';
import SendMessage from '@/utils/sendMessage';

async function GuildMemberAdd(member: GuildMember) {
  const welcomeChannel = member.guild.channels.cache.get(
    config.channels.welcome
  );
  if (!welcomeChannel) return;

  if (
    !((welcomeChannel): welcomeChannel is TextChannel =>
      welcomeChannel.type === 'text')(welcomeChannel)
  )
    return;

  let embed = Embed({
    title: 'Nuevo miembro',
    description: `hola ${
      member.user.tag
    }, bienvenido a **HolaMundo** un servidor de programacion donde prestamos aprendizaje a toda hora cuando sea posible. tenemos reglas para mantener la conducta de los usuarios si quieres saber como son pasate por <#${member.guild.channels.cache
      .has(config.channels.rules)
      .toString()}>. y que tengas un buen dia`,
    color: config.bot.color,
    thumbnail: member.user.displayAvatarURL({
      format: 'png',
      dynamic: true,
      size: 1024,
    }),
  });

  await SendMessage(welcomeChannel, embed, 1000);
}

export default GuildMemberAdd;
