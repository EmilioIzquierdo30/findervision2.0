# Importar las librerías necesarias para interactuar con MongoDB y trabajar con datos.
# MongoClient: Permite conectarse al servidor de MongoDB.
# errors: Maneja errores comunes relacionados con MongoDB.
# ObjectId: Proporciona soporte para trabajar con identificadores únicos en MongoDB.
# datetime: Ayuda a manejar fechas y horas.
from pymongo import MongoClient, errors
from bson.objectid import ObjectId
from datetime import datetime

# Función para establecer la conexión con la base de datos MongoDB.
def conectar_mongodb():
    """
    Conecta a MongoDB y retorna la base de datos.

    Returns:
        db (Database): Objeto de la base de datos si la conexión es exitosa.
        None: Si ocurre un error en la conexión.
    """
    try:
        # Conecta al servidor local de MongoDB en el puerto por defecto (27017).
        cliente = MongoClient("mongodb://localhost:27017/")
        # Selecciona la base de datos llamada 'FinderVision'.
        # Si no existe, MongoDB la creará automáticamente al usarla.
        db = cliente["FinderVision"]
        return db
    except errors.ConnectionFailure as e:
        # Muestra un mensaje de error si la conexión falla.
        print(f"Error de conexión a MongoDB: {e}")
        return None

# Función para insertar un nuevo documento de planta en la colección 'plantas'.
def insertar_planta(db):
    """
    Inserta una planta en la colección 'plantas'.

    Args:
        db (Database): Objeto de la base de datos donde se realizará la inserción.

    Returns:
        None
    """
    try:
        # Solicita los datos de la planta al usuario mediante inputs.
        nombre_comun = input("Ingrese el nombre común de la planta: ")
        nombre_cientifico = input("Ingrese el nombre científico de la planta: ")
        descripcion = input("Ingrese una breve descripción de la planta: ")
        usos_medicinales = input("Ingrese los usos medicinales de la planta: ")
        partes_utilizadas = input("Ingrese las partes utilizadas de la planta: ")
        imagen = input("Ingrese la ruta o URL de la imagen de la planta: ")
        propiedades = input("Ingrese las propiedades de la planta: ")
        categoria = input("Ingrese la categoría de la planta: ")

        # Crea un documento de tipo diccionario con la información de la planta.
        planta = {
            "nombre_comun": nombre_comun,  # Nombre común de la planta.
            "nombre_cientifico": nombre_cientifico,  # Nombre científico de la planta.
            "descripcion": descripcion,  # Descripción breve.
            "usos_medicinales": usos_medicinales,  # Usos medicinales.
            "partes_utilizadas": partes_utilizadas,  # Partes de la planta utilizadas.
            "imagen": imagen,  # Ruta o URL de una imagen de la planta.
            "propiedades": propiedades,  # Propiedades asociadas a la planta.
            "categoria": categoria,  # Categoría a la que pertenece la planta.
            "fecha_registro": datetime.now()  # Fecha y hora de registro.
        }

        # Inserta el documento en la colección 'plantas' y obtiene el _id generado automáticamente.
        planta_id = db.plantas.insert_one(planta).inserted_id

        # Muestra un mensaje indicando que la planta fue insertada correctamente.
        print(f"Planta insertada exitosamente con _id: {planta_id}")

    except Exception as e:
        # Captura cualquier error y muestra un mensaje con los detalles.
        print(f"Ocurrió un error al insertar la planta: {e}")

# Punto de entrada principal del programa.
if __name__ == "__main__":
    # Conecta a la base de datos llamando a la función conectar_mongodb().
    db = conectar_mongodb()

    # Verifica que la conexión sea exitosa antes de proceder.
    if db is not None:  # Aseguramos que db no sea None.
        # Llama a la función insertar_planta para añadir un nuevo documento a la colección.
        insertar_planta(db)