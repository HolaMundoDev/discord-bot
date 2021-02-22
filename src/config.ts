import * as dotenv from 'dotenv';

dotenv.config();

/**
 * This is global config for the bot
 */
const config = {
  bot: {
    prefix: process.env.BOT_PREFIX || '!',
    token: process.env.BOT_TOKEN || undefined,
    color: '#277ecd',
  },
  channels: {
    rules: process.env.RULES_CHANNEL_ID || '789293321960554517',
    welcome: process.env.WELCOME_CHANNEL_ID || '791070017877442600',
  },
};

export default config;
