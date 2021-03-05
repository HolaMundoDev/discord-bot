import { Client } from "discord.js";
import * as dotenv from "dotenv";
import OnReady from "./events/OnReady";
import OnMessage from "./events/OnMessage";
import { GetCommands } from "./utils/ReadDirectory";
import ClientToHolaMundoInt from "./utils/ClientToHolaMundoInt";
import { HolaMundoInt } from "./@types/main";

// Config dotenv
dotenv.config();

(async (): Promise<void> => {
  const HolaMundo: HolaMundoInt = ClientToHolaMundoInt(new Client());
  HolaMundo.commands = await GetCommands();

  HolaMundo.on("ready", async () => await OnReady(HolaMundo));
  HolaMundo.on(
    "message",
    async (message) => await OnMessage(message, HolaMundo)
  );

  HolaMundo.login(process.env.BOT_TOKEN);
})();
