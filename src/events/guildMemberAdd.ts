// import SendMessage from "@/utils/sendMessage";
import { GuildChannel, GuildMember } from 'discord.js';

function GuildMemberAdd(member: GuildMember) {
  const welcomeChannel = member.guild.channels.cache.get('791070017877442600');
  if (!welcomeChannel) return;
}

export default GuildMemberAdd;
