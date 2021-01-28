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
const config_1 = require("../config");
function RoleAdd(msg) {
    config_1.default.roles.map((role) => {
        var _a, _b;
        const roleNumberToAdd = msg.content.split(' ', 3)[2];
        let roleIdToAdd = undefined;
        if (role.number == roleNumberToAdd) {
            roleIdToAdd = role.id;
            let roleNameToAdd = role.name;
            if (((_a = msg.member) === null || _a === void 0 ? void 0 : _a.roles.cache.some((role) => role.name === roleNameToAdd)) ==
                true) {
                msg.reply('¡Ya tienes el rol!');
            }
            else {
                msg.channel.startTyping();
                (_b = msg.member) === null || _b === void 0 ? void 0 : _b.roles.add(roleIdToAdd);
                msg.reply('Rol agregado!');
                msg.channel.stopTyping();
            }
        }
    });
}
function RoleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const subCommand = msg.content.split(' ', 2)[1];
        switch (subCommand) {
            case 'add':
                RoleAdd(msg);
        }
    });
}
exports.default = RoleCommand;
