import { HolaMundoInt } from "@/@types/main";
import { Client } from "discord.js";

function ClientToHolaMundoInt(client: Client): HolaMundoInt {
  const newClient = client as HolaMundoInt;
  newClient.token = process.env.BOT_TOKEN || "";
  newClient.prefix = "!";
  newClient.color = "#3B82F6";

  return newClient;
}

export default ClientToHolaMundoInt;
