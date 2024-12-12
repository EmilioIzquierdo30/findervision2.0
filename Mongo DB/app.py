from flask import Flask, jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Cargar variables de entorno
load_dotenv()

# Configuración de Flask y MongoDB
app = Flask(__name__)

mongo_uri = os.getenv("MONGO_URI")
client = MongoClient(mongo_uri)
db = client["FinderVision"]

@app.route('/api/plantas', methods=['GET'])
def obtener_plantas():
    try:
        plantas = list(db.plantas.find({}, {"_id": 0}))  # Excluir el campo _id si no es necesario
        return jsonify(plantas), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
