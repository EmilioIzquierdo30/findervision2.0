# Importamos las librerías necesarias para interactuar con MongoDB, manejar contraseñas y fechas.
from pymongo import MongoClient, errors  # MongoClient: para conectar a MongoDB; errors: para manejar errores específicos de MongoDB.
from bson.objectid import ObjectId  # ObjectId: permite trabajar con identificadores únicos de MongoDB.
from datetime import datetime  # datetime: para registrar fechas y horas.
import bcrypt  # bcrypt: librería para encriptar contraseñas de forma segura.
from dotenv import load_dotenv  # dotenv: para cargar variables de entorno desde un archivo .env
import os  # os: para acceder a las variables de entorno

# Cargar variables de entorno desde el archivo .env
load_dotenv()

# Función principal para conectar y gestionar MongoDB.
def conectar_mongodb():
    """
    Establece conexión con MongoDB, inicializa la base de datos y colecciones con datos de ejemplo,
    encripta contraseñas y maneja errores comunes.
    """
    try:
        # Obtener la URI desde las variables de entorno
        mongo_uri = os.getenv("MONGO_URI")
        if not mongo_uri:
            raise ValueError("MONGO_URI no está definido en el archivo .env")

        # Crear un cliente para conectarse a MongoDB usando la URI desde el archivo .env
        cliente = MongoClient(mongo_uri)

        # Solicitar una contraseña al usuario.
        password_porpocionada = input("Por favor, ingrese su contraseña: ")

        # Generar un salt único para encriptar la contraseña.
        salt = bcrypt.gensalt()

        # Crear un hash seguro para la contraseña.
        password_encriptada = bcrypt.hashpw(password_porpocionada.encode('utf-8'), salt)

        # Seleccionar o crear la base de datos 'FinderVision'.
        db = cliente["FinderVision"]

        # Insertar un documento en la colección 'usuarios' y obtener el _id generado automáticamente.
        usuario_id = db.usuarios.insert_one({
            "nombre": "Nombre de Ejemplo",
            "email": "ejemplo@correo.com",
            "fecha_registro": datetime.now(),
            "google_id": "google_unique_id",
            "instagram_id": "instagram_unique_id",
            "microsoft_id": "microsoft_unique_id",
            "twitter_id": "twitter_unique_id",
            "facebook_id": "facebook_unique_id",
            "apple_id": "apple_unique_id",
            "linkedin_id": "linkedin_unique_id",
            "github_id": "github_unique_id"
        }).inserted_id

        # Insertar la contraseña en la colección 'passwords' asociada al usuario.
        db.passwords.insert_one({
            "usuario_id": usuario_id,  # Relación con el usuario.
            "password_hash": password_encriptada.decode('utf-8'),  # Hash de la contraseña.
            "fecha_creacion": datetime.now()
        })

        print("Usuario y contraseña creados exitosamente.")

        # Insertar un documento de ejemplo en la colección 'plantas'.
        planta_id = db.plantas.insert_one({
            "nombre_comun": "Ejemplo Comun",
            "nombre_cientifico": "Ejemplo Cientifico",
            "descripcion": "Descripción de la planta",
            "usos_medicinales": "Usos medicinales de la planta",
            "partes_utilizadas": "Partes de la planta utilizadas",
            "imagen": "ruta_imagen.jpg",
            "propiedades": "Propiedades de la planta",
            "categoria": "Categoría de la planta"
        }).inserted_id

        # Insertar documentos relacionados en diferentes colecciones.
        db.favoritos.insert_one({
            "usuario_id": usuario_id,
            "planta_id": planta_id,
            "fecha_agregado": datetime.now()
        })

        db.recetas.insert_one({
            "planta_id": planta_id,
            "titulo": "Título de la receta",
            "descripcion": "Descripción de la receta",
            "ingredientes": "Ingredientes necesarios",
            "instrucciones": "Instrucciones de preparación"
        })

        db.imagenes_plantas.insert_one({
            "planta_id": planta_id,
            "imagen": "ruta_imagen_planta.jpg",
            "descripcion": "Descripción de la imagen"
        })

        db.historial_reconocimiento.insert_one({
            "usuario_id": usuario_id,
            "planta_id": planta_id,
            "fecha_reconocimiento": datetime.now(),
            "imagen_procesada": "ruta_imagen_procesada.jpg"
        })

        db.comentarios.insert_one({
            "usuario_id": usuario_id,
            "planta_id": planta_id,
            "comentario": "Comentario sobre la planta",
            "fecha_comentario": datetime.now()
        })

        db.calificaciones.insert_one({
            "usuario_id": usuario_id,
            "planta_id": planta_id,
            "calificacion": 4,  # Calificación de ejemplo.
            "fecha_calificacion": datetime.now()
        })

        print("Base de datos y colecciones inicializadas correctamente.")

    except errors.ConnectionFailure as e:
        # Manejo de errores de conexión con MongoDB.
        print(f"Error de conexión a MongoDB: {e}")
    except errors.DuplicateKeyError as e:
        # Manejo de errores por duplicidad de claves únicas.
        print(f"Error: Ya existe un documento con la misma clave única. Detalles: {e}")
    except ValueError as e:
        # Manejo de errores cuando la URI no está definida.
        print(f"Error en la configuración de variables de entorno: {e}")
    except Exception as e:
        # Manejo de otros errores inesperados.
        print(f"Ocurrió un error inesperado: {e}")

# Llamar a la función principal para ejecutar el código.
if __name__ == "__main__":
    conectar_mongodb()