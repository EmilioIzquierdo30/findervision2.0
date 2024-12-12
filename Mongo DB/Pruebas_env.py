from dotenv import load_dotenv
import os

load_dotenv()
mongo_uri = os.getenv("MONGO_URI")
print(f"Mongo URI: {mongo_uri}")
