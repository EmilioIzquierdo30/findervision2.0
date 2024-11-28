# Importar el cliente de MongoDB y los errores comunes
from pymongo import MongoClient, errors
from bson.objectid import ObjectId
from datetime import datetime
import bcrypt  # Para encriptar las contraseñas

# Definición de la función para conectar y gestionar MongoDB
def conectar_mongodb():
    try:
        # Intentar establecer una conexión al servidor de MongoDB
        cliente = MongoClient("mongodb://localhost:27017/")  # Dirección local y puerto predeterminado de MongoDB
        
        # Proporcionar la contraseña como entrada del usuario
        password_porpocionada = input("Por favor, ingrese su contraseña: ")
        
        # Crear y encriptar la contraseña proporcionada
        salt = bcrypt.gensalt()  # Genera un salt único
        password_encriptada = bcrypt.hashpw(password_porpocionada.encode('utf-8'), salt)

        # Crear la base de datos "FinderVision" si no existe
        db = cliente["FinderVision"]

        # Insertar un usuario y obtener su _id
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

        # Insertar la contraseña asociada al usuario
        db.passwords.insert_one({
            "usuario_id": usuario_id,  # Relación con el usuario
            "password_hash": password_encriptada.decode('utf-8'),  # Contraseña encriptada
            "fecha_creacion": datetime.now()
        })

        print("Usuario y contraseña creados exitosamente.")

        # Insertar una planta y obtener su _id
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

        # Insertar documentos relacionados usando los _id generados
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
            "calificacion": 4,
            "fecha_calificacion": datetime.now()
        })

        print("Base de datos y colecciones inicializadas correctamente.")

    except errors.ConnectionFailure as e:
        print(f"Error de conexión a MongoDB: {e}")  # Error de conexión
    except errors.DuplicateKeyError as e:
        print(f"Error: Ya existe un documento con la misma clave única. Detalles: {e}")  # Documento duplicado
    except Exception as e:
        print(f"Ocurrió un error inesperado: {e}")  # Otros errores


# Llamar a la función para ejecutar el código
conectar_mongodb()