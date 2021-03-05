import { CommandInt } from "../../@types/commands";
import { HolaMundoInt } from "../../@types/main";
import Embed from "../../utils/Embed";
import SendMessage from "../../utils/SendMessage";
import { Message } from "discord.js";

const AvatarCommand: CommandInt = {
  name: "avatar",
  description: "This is avatar command",
  category: "general",
  run: async (message: Message, HolaMundo: HolaMundoInt) => {
    if (message.content.split(" ").length > 2) {
      SendMessage(
        message.channel,
        Embed(
          {
            title: "Muchos argumentos",
            description:
              "Estas usando mas argumentos de los deseados por favor utilza bien el comando",
          },
          HolaMundo
        )
      );
      return;
    } else if (
      message.content.split(" ").length >= 2 &&
      !message.content.split(" ")[1].startsWith("<@") &&
      !message.content.split(" ")[1].endsWith(">")
    ) {
      SendMessage(
        message.channel,
        Embed(
          {
            title: "No has menciondo",
            description: `Has enviado el argumentos \`${
              message.content.split(" ")[1]
            }\` el cual deebria ser una mencion a un usuario. Porfavor corrije tu error y vuelve a intentarlo`,
          },
          HolaMundo
        )
      );
      return;
    }
    const userToAvatar = message.mentions.members?.first() || message.member;
    SendMessage(
      message.channel,
      Embed(
        {
          title: "Avatar",
          description:
            userToAvatar == message.member
              ? `<@${userToAvatar?.user.id}>, Este es tu avatar`
              : `Este es el avatar de <@${userToAvatar?.user.id}>`,
          image: userToAvatar?.user.displayAvatarURL({
            dynamic: false,
            size: 2048,
            format: "webp",
          }),
        },
        HolaMundo
      )
    );
  },
};

export default AvatarCommand;
