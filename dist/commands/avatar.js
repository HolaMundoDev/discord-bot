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
const config_1 = require("../config");
function AvatarCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = msg.mentions.users.first() || msg.author;
        const embed = new discord_js_1.MessageEmbed()
            .setColor(config_1.default.bot.color)
            .setTitle('Avatar')
            .setDescription(msg.mentions.users.first()
            ? `Este es el avatar de **${user.username}**`
            : `**${user.username}**, Este es tu avatar`)
            .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
        msg.channel.startTyping();
        yield msg.channel.send(embed);
        msg.channel.stopTyping();
    });
}
exports.default = AvatarCommand;
