from flask import Flask, jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Cargar variables de entorno
load_dotenv()

# Configuración del servidor Flask
app = Flask(__name__)

# Conectar a MongoDB
mongo_uri = os.getenv("MONGO_URI")
client = MongoClient(mongo_uri)
db = client["FinderVision"]  # Nombre de tu base de datos

@app.route("/api/plantas", methods=["GET"])
def obtener_plantas():
    """
    Endpoint para obtener todas las plantas de la base de datos.
    """
    plantas = list(db.plantas.find({}, {"_id": 1, "nombre": 1, "categoria": 1, "imagen": 1, "descripcion": 1, "beneficios": 1, "recetario": 1, "precauciones": 1}))
    # Convertir ObjectId a string para evitar problemas con JSON
    for planta in plantas:
        planta["_id"] = str(planta["_id"])
    return jsonify(plantas)

if __name__ == "__main__":
    app.run(debug=True)