import { Client } from 'discord.js';
import dotenv from "dotenv"

const bot = new Client();
dotenv.config()

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => {
    if (msg.content === '!ping') {
        msg.reply('Pong!');
    }
});

bot.login(process.env.DISCORD_BOT_TOKEN);
