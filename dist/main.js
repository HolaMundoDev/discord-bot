"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv = require("dotenv");
const config_1 = require("./config");
const onMessage_1 = require("./events/onMessage");
const client = new discord_js_1.Client(); // create new client (bot)
dotenv.config(); // load dotenv
client.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Logged in as ${client.user.tag}!`);
    yield client.user.setActivity({
        name: `use '${config_1.default.bot.prefix}help' for help`,
        type: 'PLAYING',
    });
}));
client.on('message', (msg) => onMessage_1.default(msg, client));
client.login(config_1.default.bot.token);
