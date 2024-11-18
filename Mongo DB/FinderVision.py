# Importar el cliente de MongoDB y los errores comunes
from pymongo import MongoClient, errors

# Importar ObjectId para manejar identificadores únicos en MongoDB
from bson.objectid import ObjectId

# Importar datetime para registrar fechas y horas
from datetime import datetime

# Definición de la función para conectar y gestionar MongoDB
def conectar_mongodb():
    try:
        # Intentar establecer una conexión al servidor de MongoDB
        cliente = MongoClient("mongodb://localhost:27017/")  # Dirección local y puerto predeterminado de MongoDB
        
        # Verificar si la base de datos "FinderVision" ya existe
        if "FinderVision" in cliente.list_database_names():
            print("La base de datos 'FinderVision' ya existe.")
        else:
            # Crear la base de datos "FinderVision" si no existe
            db = cliente["FinderVision"]

            # Crear e insertar un documento inicial en la colección 'usuarios'
            db.usuarios.insert_one({
                "_id": ObjectId(),  # Genera un identificador único para el documento
                "nombre": "Nombre de Ejemplo",  # Nombre de ejemplo del usuario
                "email": "ejemplo@correo.com",  # Email del usuario
                "password": "hashed_password",  # Contraseña simulada (debería estar encriptada en producción)
                "fecha_registro": datetime.now(),  # Fecha y hora de registro
                "google_id": "google_unique_id",  # Identificador de Google
                "instagram_id": "instagram_unique_id",  # Identificador de Instagram
                "microsoft_id": "microsoft_unique_id",  # Identificador de Microsoft
                "twitter_id": "twitter_unique_id",  # Identificador de Twitter
                "facebook_id": "facebook_unique_id",  # Identificador de Facebook
                "apple_id": "apple_unique_id",  # Identificador de Apple
                "linkedin_id": "linkedin_unique_id",  # Identificador de LinkedIn
                "github_id": "github_unique_id"  # Identificador de GitHub
            })

            # Crear e insertar un documento inicial en la colección 'plantas'
            db.plantas.insert_one({
                "_id": ObjectId(),
                "nombre_comun": "Ejemplo Comun",  # Nombre común de la planta
                "nombre_cientifico": "Ejemplo Cientifico",  # Nombre científico de la planta
                "descripcion": "Descripción de la planta",  # Breve descripción de la planta
                "usos_medicinales": "Usos medicinales de la planta",  # Aplicaciones medicinales
                "partes_utilizadas": "Partes de la planta utilizadas",  # Partes útiles
                "imagen": "ruta_imagen.jpg",  # Ruta de la imagen de la planta
                "propiedades": "Propiedades de la planta",  # Propiedades específicas
                "categoria": "Categoría de la planta"  # Clasificación de la planta
            })

            # Crear e insertar un documento inicial en la colección 'favoritos'
            db.favoritos.insert_one({
                "_id": ObjectId(),
                "usuario_id": ObjectId(),  # Relación con la colección 'usuarios'
                "planta_id": ObjectId(),   # Relación con la colección 'plantas'
                "fecha_agregado": datetime.now()  # Fecha de agregado a favoritos
            })

            # Crear e insertar un documento inicial en la colección 'recetas'
            db.recetas.insert_one({
                "_id": ObjectId(),
                "planta_id": ObjectId(),  # Relación con la colección 'plantas'
                "titulo": "Título de la receta",  # Título de la receta
                "descripcion": "Descripción de la receta",  # Explicación breve
                "ingredientes": "Ingredientes necesarios",  # Ingredientes de la receta
                "instrucciones": "Instrucciones de preparación",  # Pasos de preparación
                "imagen": "ruta_imagen_receta.jpg"  # Ruta de imagen asociada
            })

            # Crear e insertar un documento inicial en la colección 'imagenes_plantas'
            db.imagenes_plantas.insert_one({
                "_id": ObjectId(),
                "planta_id": ObjectId(),  # Relación con la colección 'plantas'
                "imagen": "ruta_imagen_planta.jpg",  # Ruta de la imagen
                "descripcion": "Descripción de la imagen"  # Información de la imagen
            })

            # Crear e insertar un documento inicial en la colección 'historial_reconocimiento'
            db.historial_reconocimiento.insert_one({
                "_id": ObjectId(),
                "usuario_id": ObjectId(),  # Relación con la colección 'usuarios'
                "planta_id": ObjectId(),   # Relación con la colección 'plantas'
                "fecha_reconocimiento": datetime.now(),  # Fecha de reconocimiento
                "imagen_procesada": "ruta_imagen_procesada.jpg"  # Imagen procesada
            })

            # Crear e insertar un documento inicial en la colección 'comentarios'
            db.comentarios.insert_one({
                "_id": ObjectId(),
                "usuario_id": ObjectId(),  # Relación con la colección 'usuarios'
                "planta_id": ObjectId(),   # Relación con la colección 'plantas'
                "comentario": "Comentario sobre la planta",  # Texto del comentario
                "fecha_comentario": datetime.now()  # Fecha del comentario
            })

            # Crear e insertar un documento inicial en la colección 'calificaciones'
            db.calificaciones.insert_one({
                "_id": ObjectId(),
                "usuario_id": ObjectId(),  # Relación con la colección 'usuarios'
                "planta_id": ObjectId(),   # Relación con la colección 'plantas'
                "calificacion": 4,         # Calificación (1 a 5)
                "fecha_calificacion": datetime.now()  # Fecha de la calificación
            })

            # Informar al usuario que la base de datos y las colecciones se crearon exitosamente
            print("Base de datos y colecciones creadas con datos iniciales.")

    # Manejo de errores comunes
    except errors.ConnectionFailure as e:
        print(f"Error de conexión a MongoDB: {e}")  # Error de conexión
    except errors.DuplicateKeyError as e:
        print(f"Error: Ya existe un documento con la misma clave única. Detalles: {e}")  # Documento duplicado
    except Exception as e:
        print(f"Ocurrió un error: {e}")  # Cualquier otro error

# Llamar a la función para ejecutar el código
conectar_mongodb()
