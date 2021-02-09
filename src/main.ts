import { Client } from 'discord.js';
import * as dotenv from 'dotenv';
import 'module-alias/register';
import config from '@/config';
import onMessage from '@/events/onMessage';
import GuildMemberAdd from '@/events/guildMemberAdd';

const client = new Client(); // create new client (bot)
dotenv.config(); // load dotenv

client.on('ready', async () => {
  console.log(`Logged in as ${client.user!.tag}!`);
  await client.user!.setActivity({
    name: `use '${config.bot.prefix}help' for help`,
    type: 'PLAYING',
  });
});

client.on('message', msg => onMessage(msg, client));
client.on('guildMemberdAdd', async member => await GuildMemberAdd(member));

client.login(config.bot.token);
