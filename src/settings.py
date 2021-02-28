import os

settings = {
    "prefix": os.getenv("BOT_PREFIX") or "!",
    "token": os.getenv("BOT_TOKEN"),
}
