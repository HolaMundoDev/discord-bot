import { CommandInt } from "@/@types/commands";
import { HolaMundoInt } from "@/@types/main";
import Embed from "../../utils/embed";
import SendMessage from "../../utils/SendMessage";

const PingCommand: CommandInt = {
  name: "ping",
  description: "this is ping command",
  category: "general",
  run: async (message, HolaMundo: HolaMundoInt) => {
    SendMessage(
      message.channel,
      Embed(
        {
          title: "¡Pong!",
          description: `La latencia actual es de ${
            Date.now() - message.createdTimestamp
          }ms.`,
        },
        HolaMundo
      )
    );
  },
};

export default PingCommand;
