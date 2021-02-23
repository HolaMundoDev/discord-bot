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
    rules: process.env.RULES_CHANNEL || '789293321960554517',
    welcome: process.env.WELCOME_CHANNEL || '791070017877442600',
  },
};

export default config;
