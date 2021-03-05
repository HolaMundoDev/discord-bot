import { Client, Message } from "discord.js";

interface CommandInt {
  name: string;
  description: string;
  category: "general" | "moderation";
  run(message: Message, client: Client): Promise<void>;
}
