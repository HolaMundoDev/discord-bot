import { Client } from "discord.js";
import { Command } from "./commands";

interface HolaMundoInt extends Client {
  token: string;
  prefix: string;
  color: string;
  commands: { [key: string]: Command };
}
