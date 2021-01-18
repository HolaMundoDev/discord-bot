import * as dotenv from 'dotenv';

dotenv.config();

let config = {
  bot: {
    prefix: process.env.BOT_PREFIX || '$',
    token: process.env.BOT_TOKEN || undefined,
    color: '#277ecd',
  },
};

export default config;
