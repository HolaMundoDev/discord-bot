import discord
from discord.ext import commands
from settings import settings


def main():
    # Create bot
    bot = commands.Bot(command_prefix=settings["prefix"], description="Hola Mundo bot")

    @bot.event
    async def on_ready():
        print(f"Initial as {bot.user}")

    bot.run(settings["token"])


if __name__ == "__main__":
    main()
