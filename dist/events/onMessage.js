"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const avatar_1 = require("../commands/avatar");
const ping_1 = require("../commands/ping");
const role_1 = require("../commands/role");
const warning_1 = require("../commands/warning");
function onMessage(msg, client) {
    if (msg.content.startsWith(config_1.default.bot.prefix)) {
        let msgSplit = msg.content.split(' ', 2);
        let commandName = msgSplit[0].replace(config_1.default.bot.prefix, '');
        switch (commandName) {
            case 'avatar':
                avatar_1.default(msg);
                break;
            case 'ping':
                ping_1.default(msg, client);
                break;
            case 'role':
                role_1.default(msg);
                break;
            case 'warning':
                warning_1.default(msg);
                break;
        }
    }
}
exports.default = onMessage;
