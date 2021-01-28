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
function WarningAdd(msg) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const userToWarn = (_a = msg.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        let warnedRoleId = '800804456156626984';
        let warnReason = msg.content.split(' ', 4)[3] || undefined;
        if ((userToWarn === null || userToWarn === void 0 ? void 0 : userToWarn.roles.cache.has(warnedRoleId)) == true) {
            msg.reply(`El usuario **${(_b = msg.mentions.users.first()) === null || _b === void 0 ? void 0 : _b.username}** ya ha sido advertido.`);
        }
        else {
            msg.channel.startTyping();
            userToWarn === null || userToWarn === void 0 ? void 0 : userToWarn.roles.add(warnedRoleId, warnReason);
            yield msg.reply(`¡Se ha advertido al usuario **${(_c = msg.mentions.users.first()) === null || _c === void 0 ? void 0 : _c.username}** exitosamente!`);
            msg.channel.stopTyping();
        }
    });
}
function WarningRemove(msg) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const userToUnWarn = (_a = msg.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        let warnedRoleId = '800804456156626984';
        let warnReason = msg.content.split(' ', 4)[3] || undefined;
        if ((userToUnWarn === null || userToUnWarn === void 0 ? void 0 : userToUnWarn.roles.cache.has(warnedRoleId)) == false) {
            msg.reply(`El usuario **${(_b = msg.mentions.users.first()) === null || _b === void 0 ? void 0 : _b.username}** no ha sido advertido.`);
        }
        else {
            msg.channel.startTyping();
            userToUnWarn === null || userToUnWarn === void 0 ? void 0 : userToUnWarn.roles.remove(warnedRoleId, warnReason);
            yield msg.reply(`¡Se ha desadvertido al usuario **${(_c = msg.mentions.users.first()) === null || _c === void 0 ? void 0 : _c.username}** exitosamente!`);
            msg.channel.stopTyping();
        }
    });
}
function WarningCommand(msg) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (((_a = msg.member) === null || _a === void 0 ? void 0 : _a.roles.cache.has('789581683749158984')) == false ||
            ((_b = msg.member) === null || _b === void 0 ? void 0 : _b.roles.cache.has('789593087293784115')) == false) {
            msg.channel.startTyping();
            yield msg.reply('No tienes permisos suficentes para moderar');
            msg.channel.stopTyping();
            return;
        }
        const subCommand = msg.content.split(' ', 2)[1];
        switch (subCommand) {
            case 'add':
                WarningAdd(msg);
                break;
            case 'remove':
                WarningRemove(msg);
                break;
        }
    });
}
exports.default = WarningCommand;
