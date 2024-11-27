# Importar el cliente de MongoDB y los errores comunes
from pymongo import MongoClient, errors
from bson.objectid import ObjectId
from datetime import datetime


def conectar_mongodb():
    """Conecta a MongoDB y retorna la base de datos."""
    try:
        cliente = MongoClient("mongodb://localhost:27017/")
        db = cliente["FinderVision"]  # Conectar o crear la base de datos
        return db
    except errors.ConnectionFailure as e:
        print(f"Error de conexión a MongoDB: {e}")
        return None


def insertar_planta(db):
    """Función para insertar una planta en la colección 'plantas'."""
    try:
        # Datos de la planta proporcionados por el usuario
        nombre_comun = input("Ingrese el nombre común de la planta: ")
        nombre_cientifico = input("Ingrese el nombre científico de la planta: ")
        descripcion = input("Ingrese una breve descripción de la planta: ")
        usos_medicinales = input("Ingrese los usos medicinales de la planta: ")
        partes_utilizadas = input("Ingrese las partes utilizadas de la planta: ")
        imagen = input("Ingrese la ruta o URL de la imagen de la planta: ")
        propiedades = input("Ingrese las propiedades de la planta: ")
        categoria = input("Ingrese la categoría de la planta: ")

        # Crear el documento de la planta
        planta = {
            "nombre_comun": nombre_comun,
            "nombre_cientifico": nombre_cientifico,
            "descripcion": descripcion,
            "usos_medicinales": usos_medicinales,
            "partes_utilizadas": partes_utilizadas,
            "imagen": imagen,
            "propiedades": propiedades,
            "categoria": categoria,
            "fecha_registro": datetime.now()
        }

        # Insertar en la colección
        planta_id = db.plantas.insert_one(planta).inserted_id
        print(f"Planta insertada exitosamente con _id: {planta_id}")

    except Exception as e:
        print(f"Ocurrió un error al insertar la planta: {e}")


# Conectar a la base de datos y llamar a la función
if __name__ == "__main__":
    db = conectar_mongodb()
    if db is not None:  # Cambiado de if db: a if db is not None
        insertar_planta(db)