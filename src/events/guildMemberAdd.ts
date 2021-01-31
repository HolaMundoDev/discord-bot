// import SendMessage from "@/utils/sendMessage";
import config from '@/config';
import Embed from '@/utils/embed';
import SendMessage from '@/utils/sendMessage';
import { GuildMember, TextChannel } from 'discord.js';

function GuildMemberAdd(member: GuildMember) {
  const welcomeChannel = member.guild.channels.cache.get('791070017877442600');
  if (!welcomeChannel) return;

  if (
    !((welcomeChannel): welcomeChannel is TextChannel =>
      welcomeChannel.type === 'text')(welcomeChannel)
  )
    return;

  let embed = Embed({
    author: {
      name: member.user.username,
      avatar: member.user.displayAvatarURL({
        format: 'webp',
        dynamic: false,
        size: 32,
      }),
    },
    title: 'Nuevo miembro',
    description: 'asd',
    color: config.bot.color,
    thumbnail: member.user.displayAvatarURL({
      format: 'png',
      dynamic: true,
      size: 1024,
    }),
  });

  SendMessage(welcomeChannel, embed, 1000);
}

export default GuildMemberAdd;
