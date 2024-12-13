from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Cargar las variables de entorno desde el archivo .env
load_dotenv()

def conectar_mongo():
    try:
        # Leer la URI desde las variables de entorno
        mongo_uri = os.getenv("MONGO_URI")
        if not mongo_uri:
            raise ValueError("La variable MONGO_URI no está definida en el archivo .env")
        
        # Crear la conexión
        cliente = MongoClient(mongo_uri)
        
        # Acceder a la base de datos
        base_datos = cliente["FinderVision"]  # Reemplaza "nombre_base" con el nombre de tu base de datos
        
        print("Conexión exitosa a MongoDB")
        return base_datos
    except Exception as e:
        print(f"Error al conectar a MongoDB: {e}")
        return None

# Uso de la conexión
if __name__ == "__main__":
    db = conectar_mongo()
    if db is not None:
        # Ejemplo de acceso a una colección
        coleccion = db["usuarios"]  # Reemplaza "nombre_coleccion" con el nombre de tu colección
        documentos = coleccion.find()
        for documento in documentos:
            print(documento)
