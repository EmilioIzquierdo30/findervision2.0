from pymongo import MongoClient, errors
from bson.objectid import ObjectId
from pymongo import UpdateOne
from dotenv import load_dotenv
import os

# Cargar variables de entorno
load_dotenv()

# Conexión a MongoDB
def conectar_mongodb():
    try:
        mongo_uri = os.getenv("MONGO_URI")
        if not mongo_uri:
            raise ValueError("MONGO_URI no está definido en el archivo .env")

        cliente = MongoClient(mongo_uri)
        db = cliente["FinderVision"]
        return db
    except errors.ConnectionFailure as e:
        print(f"Error de conexión a MongoDB: {e}")
        return None
    except Exception as e:
        print(f"Error inesperado: {e}")
        return None

def actualizar_categorias_masivas(db, actualizaciones):
    """
    Actualiza las categorías de múltiples plantas en la colección 'plantas' utilizando bulk_write.

    Args:
        db (Database): Objeto de la base de datos.
        actualizaciones (list): Lista de diccionarios con '_id' y 'nueva_categoria'.

    Returns:
        None
    """
    try:
        operaciones = []
        for actualizacion in actualizaciones:
            planta_id = actualizacion["_id"]
            nueva_categoria = actualizacion["nueva_categoria"]

            # Convertir el ID de texto a ObjectId
            object_id = ObjectId(planta_id)

            # Crear una operación de actualización
            operaciones.append(
                UpdateOne(
                    {"_id": object_id},
                    {"$set": {"categoria": nueva_categoria}}
                )
            )

        # Ejecutar todas las actualizaciones en una sola operación
        if operaciones:
            resultado = db.plantas.bulk_write(operaciones)
            print(f"Se actualizaron {resultado.modified_count} categorías de plantas correctamente.")
        else:
            print("No se proporcionaron actualizaciones para procesar.")
    except errors.PyMongoError as e:
        print(f"Error al actualizar las categorías: {e}")
    except Exception as e:
        print(f"Error inesperado: {e}")

if __name__ == "__main__":
    db = conectar_mongodb()

    if db is not None:  # Cambiar la comparación aquí
        actualizaciones = [
            {"_id": "674a40e4be9f984aa1e15c08", "nueva_categoria": "Antioxidantes"},
            {"_id": "674a40e6be9f984aa1e15c09", "nueva_categoria": "Antiespasmódicas"},
            {"_id": "674a40e6be9f984aa1e15c0a", "nueva_categoria": "Digestivas"},
            {"_id": "674a40e6be9f984aa1e15c0b", "nueva_categoria": "Hepatoprotectoras"},
            {"_id": "674a40e6be9f984aa1e15c0c", "nueva_categoria": "Antioxidantes"},
            {"_id": "674a40e6be9f984aa1e15c0d", "nueva_categoria": "Antiinflamatorias"},
            {"_id": "674a40e7be9f984aa1e15c0e", "nueva_categoria": "Cardioprotectoras"},
            {"_id": "674a40e7be9f984aa1e15c0f", "nueva_categoria": "Sedantes"},
            {"_id": "674a40e7be9f984aa1e15c10", "nueva_categoria": "Digestivas"},
            {"_id": "674a40e7be9f984aa1e15c11", "nueva_categoria": "Antimicrobianas"},
            {"_id": "674a40e7be9f984aa1e15c12", "nueva_categoria": "Antioxidantes"},
            {"_id": "674a40e7be9f984aa1e15c13", "nueva_categoria": "Antiinflamatorias"},
            {"_id": "674a40e7be9f984aa1e15c14", "nueva_categoria": "Digestivas"},
            {"_id": "674a40e8be9f984aa1e15c19", "nueva_categoria": "Digestivas"},
            {"_id": "674a40e8be9f984aa1e15c1a", "nueva_categoria": "Antiinflamatorias"},
            {"_id": "674a40e8be9f984aa1e15c1b", "nueva_categoria": "Sedantes"},
            {"_id": "674a40e8be9f984aa1e15c1c", "nueva_categoria": "Digestivas"},
            {"_id": "674a40e8be9f984aa1e15c1d", "nueva_categoria": "Antioxidantes"},
            {"_id": "674a40e8be9f984aa1e15c1e", "nueva_categoria": "Hepatoprotectoras"},
            {"_id": "674a40e9be9f984aa1e15c1f", "nueva_categoria": "Digestivas"},
            {"_id": "674a40eabe9f984aa1e15c20", "nueva_categoria": "Antioxidantes"},
            {"_id": "674a40eabe9f984aa1e15c21", "nueva_categoria": "Antiinflamatorias"},
            {"_id": "674a40eabe9f984aa1e15c22", "nueva_categoria": "Antioxidantes"},
            {"_id": "674a40ebbe9f984aa1e15c25", "nueva_categoria": "Digestivas"},
            {"_id": "674a40e7be9f984aa1e15c15", "nueva_categoria": "Digestivas"},
            {"_id": "674a40e8be9f984aa1e15c16", "nueva_categoria": "Altamente Tóxica"},
            {"_id": "674a40e8be9f984aa1e15c17", "nueva_categoria": "Antidiabéticas"},
            {"_id": "674a40e8be9f984aa1e15c18", "nueva_categoria": "Antiinflamatorias"},
            {"_id": "674a40ebbe9f984aa1e15c23", "nueva_categoria": "Inmunoestimulantes"},
            {"_id": "674a40ebbe9f984aa1e15c24", "nueva_categoria": "Sedantes"}
        ]

        actualizar_categorias_masivas(db, actualizaciones)