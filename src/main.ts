import { Client } from 'discord.js';
import * as dotenv from 'dotenv';
import config from './config';
import onMessage from './events/onMessage';

const client = new Client(); // create new client (bot)
dotenv.config(); // load dotenv

client.on('ready', async () => {
  console.log(`Logged in as ${client.user!.tag}!`);
  await client.user!.setActivity({
    name: `use '${config.bot.prefix}help' for help`,
    type: 'PLAYING',
  });
});

client.on('message', (msg) => onMessage(msg, client));

client.login(config.bot.token);
