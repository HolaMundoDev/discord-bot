import { HolaMundoInt } from "../@types/main";
import Embed from "../utils/Embed";
import { Message } from "discord.js";

async function OnMessage(message: Message, HolaMundo: HolaMundoInt) {
  const messageSplit = message.content.split(" ");
  if (messageSplit[0].startsWith(HolaMundo.prefix)) {
    const command =
      HolaMundo.commands[
        messageSplit[0].replace(HolaMundo.prefix, "").toLowerCase()
      ];

    if (command) {
      await command.run(message, HolaMundo);
    }
  }
}

export default OnMessage;
