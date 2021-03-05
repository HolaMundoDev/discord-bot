import { HolaMundoInt } from "@/@types/main";

/**
 * @async
 * @function
 * @returns { Promise<void> }
 */
async function OnReady(HolaMundo: HolaMundoInt): Promise<void> {
  console.log(`Logged in as ${HolaMundo.user!.tag}`);
  await HolaMundo.user!.setActivity({
    name: `${HolaMundo.prefix}help`,
    type: "PLAYING",
  });
}

export default OnReady;
