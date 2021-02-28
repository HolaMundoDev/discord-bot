import os
from dotenv import load_dotenv

# Load env's from .env files
load_dotenv()

settings = {
    "prefix": os.getenv("BOT_PREFIX") or "!",
    "token": os.getenv("BOT_TOKEN"),
}
