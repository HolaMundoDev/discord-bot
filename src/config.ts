import * as dotenv from 'dotenv';

dotenv.config();

let config = {
  bot: {
    prefix: process.env.BOT_PREFIX || '!',
    token: process.env.BOT_TOKEN || undefined,
    color: '#277ecd',
  },
  roles: [
    {
      id: '790965297754275860',
      name: 'Web Dev',
      private: false,
    },
    {
      id: '790965381505875988',
      name: 'Movil Dev',
      private: false,
    },
    {
      id: '790965462497755156',
      name: 'Desktop Dev',
      private: false,
    },
    {
      id: '790965631230935070',
      name: 'Diseñador/a',
      private: false,
    },
    {
      id: '800804889021906945',
      name: 'Silenciado/a',
      private: true,
    },
  ],
  channels: {
    rules: '789293321960554517',
    welcome: '791070017877442600',
  },
};

export default config;
