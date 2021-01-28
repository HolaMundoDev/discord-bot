"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
let config = {
    bot: {
        prefix: process.env.BOT_PREFIX || '$',
        token: process.env.BOT_TOKEN || undefined,
        color: '#277ecd',
    },
    roles: [
        {
            id: '790965297754275860',
            name: 'Web Dev',
            number: '01',
        },
        {
            id: '790965381505875988',
            name: 'Movil Dev',
            number: '02',
        },
        {
            id: '790965462497755156',
            name: 'Desktop Dev',
            number: '03',
        },
        {
            id: '790965631230935070',
            name: 'Diseñador/a',
            number: 0x4,
        },
        {
            id: '791441857947238420',
            name: 'Hacker',
            number: 0x5,
        },
    ],
};
exports.default = config;
