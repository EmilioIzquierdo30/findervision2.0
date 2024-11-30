# Importamos las clases necesarias para trabajar con MongoDB.
# MongoClient: Permite conectarse al servidor de MongoDB.
# errors: Maneja errores relacionados con MongoDB.
# ObjectId: Clase para trabajar con los identificadores únicos (_id) de MongoDB.
from pymongo import MongoClient, errors
from bson.objectid import ObjectId

# Función para establecer la conexión con la base de datos MongoDB.
def conectar_mongodb():
    """
    Conecta a MongoDB y retorna la base de datos.

    Returns:
        db (Database): Objeto de la base de datos si la conexión es exitosa.
        None: Si ocurre un error en la conexión.
    """
    try:
        # Conecta al clúster de MongoDB usando la URI proporcionada.
        cliente = MongoClient(
            "mongodb+srv://BrianSG230:KmAq8alNdVqEbCJ9@cluster-findervision.7kpdf.mongodb.net/FinderVision?retryWrites=true&w=majority")
        # Selecciona la base de datos llamada "FinderVision".
        db = cliente["FinderVision"]
        # Devuelve el objeto de la base de datos.
        return db
    except errors.ConnectionFailure as e:
        # Si ocurre un error de conexión, muestra un mensaje con los detalles.
        print(f"Error de conexión a MongoDB: {e}")
        return None

# Función para actualizar la imagen de múltiples plantas en la base de datos.
def actualizar_imagenes(db, updates):
    """
    Actualiza el campo 'imagen' de múltiples plantas.

    Args:
        db (Database): Objeto de la base de datos donde se realizará la actualización.
        updates (list): Lista de diccionarios con los datos para la actualización.
                        Cada diccionario debe contener:
                            - '_id': El identificador único de la planta (como cadena).
                            - 'nueva_url': La nueva URL de la imagen.

    Returns:
        None
    """
    try:
        # Itera sobre cada actualización proporcionada en la lista.
        for update in updates:
            # Intenta actualizar el documento con el _id especificado.
            resultado = db.plantas.update_one(
                {"_id": ObjectId(update["_id"])},  # Filtra por el identificador único (_id).
                {"$set": {"imagen": update["nueva_url"]}}  # Define el nuevo valor del campo 'imagen'.
            )
            # Verifica si se encontró y actualizó un documento.
            if resultado.matched_count > 0:
                # Si la planta fue encontrada y actualizada, muestra un mensaje de éxito.
                print(f"Imagen de la planta con _id: {update['_id']} actualizada a {update['nueva_url']}.")
            else:
                # Si no se encontró ninguna planta con el _id especificado, muestra un mensaje de advertencia.
                print(f"No se encontró ninguna planta con _id: {update['_id']}.")
    except Exception as e:
        # Captura y muestra cualquier error que ocurra durante la actualización.
        print(f"Error al actualizar las imágenes: {e}")

# Lista de actualizaciones
actualizaciones = [
    {"_id": "674a40e4be9f984aa1e15c08", "nueva_url": "https://th.bing.com/th/id/R.5d6cd571d4aab5a84859535c4f0cc746?rik=bdGRQV8UL6FLlg&riu=http%3a%2f%2fwww.thedailygarden.us%2fuploads%2f4%2f5%2f4%2f9%2f45493619%2fmalabar-spinach-leaves-joydeep-cc-by-sa-3-0_orig.jpg&ehk=CJCm%2bqdkguXCHWIGUt0Ze%2bbSCnzbhInIJBzwOE08o%2fI%3d&risl=&pid=ImgRaw&r=0"},
    {"_id": "674a40e6be9f984aa1e15c09", "nueva_url": "https://3.bp.blogspot.com/-EVKkz4Ol_vo/U1l88cpNzeI/AAAAAAAABHM/Hi5AjuSr-mU/s1600/menta+012.JPG"},
    {"_id": "674a40e6be9f984aa1e15c0a", "nueva_url": "https://cdn.shopify.com/s/files/1/0157/0808/products/II01-005_CC_18_P2_small_grande.jpg?v=1524085927"},
    {"_id": "674a40e6be9f984aa1e15c0b", "nueva_url": "https://i5.walmartimages.com/asr/504f5817-b9d2-41eb-b300-d8ef32e772e3.e4bac2ce6098ca967dbbb344553b606f.jpeg"},
    {"_id": "674a40e6be9f984aa1e15c0c", "nueva_url": "https://apotekhidup.com/wp-content/uploads/2021/09/karanda-768x512.jpg"},
    {"_id": "674a40e6be9f984aa1e15c0d", "nueva_url": "https://m.media-amazon.com/images/I/71L9zQ2xhhL._AC_SL1500_.jpg"},
    {"_id": "674a40e7be9f984aa1e15c0e", "nueva_url": "https://th.bing.com/th/id/R.18de255b89a3582dec5b38131a1b68bd?rik=oBJjTvqG%2bDo1YQ&pid=ImgRaw&r=0"},
    {"_id": "674a40e7be9f984aa1e15c0f", "nueva_url": "https://th.bing.com/th/id/R.08604578e32fc3d51faf513cc71b2891?rik=f1IYzpLmDXxJww&pid=ImgRaw&r=0"},
    {"_id": "674a40e7be9f984aa1e15c10", "nueva_url": "https://th.bing.com/th/id/R.0beb5f2658be4d18c51c11955e1c5510?rik=jwbN3IF9HIG7Mw&riu=http%3a%2f%2fhidroponia.mx%2fwp-content%2fuploads%2f2017%2f11%2fcultivo-de-guayaba-en-M%c3%a9xico.jpg&ehk=SqIhNoGH41usZEgQ8RSZM6tmUHUaUdl3mXWaA2TWVqc%3d&risl=&pid=ImgRaw&r=0"},
    {"_id": "674a40e7be9f984aa1e15c11", "nueva_url": "https://th.bing.com/th/id/R.45e07feb52bba86f6defa04c96cffcdb?rik=OyogIE6m28sRNA&pid=ImgRaw&r=0"},
    {"_id": "674a40e7be9f984aa1e15c12", "nueva_url": "https://th.bing.com/th/id/OIP.G5E2h2jvfrgncuCUQhM0WQHaFj?rs=1&pid=ImgDetMain"},
    {"_id": "674a40e7be9f984aa1e15c13", "nueva_url": "https://www.planetayurveda.com/pa-wp-images/alpinia-galanga.jpg"},
    {"_id": "674a40e7be9f984aa1e15c14", "nueva_url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Piper_betle_plant.jpg"},
    {"_id": "674a40e8be9f984aa1e15c19", "nueva_url": "https://www.gtush.com/wp-content/uploads/2018/05/Yaca.jpg"},
    {"_id": "674a40e8be9f984aa1e15c1a", "nueva_url": "https://th.bing.com/th/id/R.ec65490ee46b8bc917b6dd22be5ef23b?rik=hkI%2f6UTofEun%2fg&riu=http%3a%2f%2fwww.eattheplanet.org%2fwp-content%2fuploads%2f2020%2f04%2fBrassicaceae_-_Sinapis_arvensis_3.jpg&ehk=Gn33zTz7d5UFWvyOX2d52xAxhT6DYl250y7gyoN5k%2bc%3d&risl=&pid=ImgRaw&r=0"},
    {"_id": "674a40e8be9f984aa1e15c1b", "nueva_url": "https://www.richardlyonsnursery.com/wp-content/uploads/2022/05/Tabernaemontana-divaricata-Flore-Pleno-Crepe-Jasmine-scaled.jpg"},
    {"_id": "674a40e8be9f984aa1e15c1c", "nueva_url": "https://cdn.pixabay.com/photo/2016/01/04/21/23/lemon-1121636_1280.jpg"},
    {"_id": "674a40e8be9f984aa1e15c1d", "nueva_url": "https://th.bing.com/th/id/OIP.JwmRBgbI2AdGm46xMYGcAAHaFj?w=1600&h=1200&rs=1&pid=ImgDetMain"},
    {"_id": "674a40e8be9f984aa1e15c1e", "nueva_url": "https://www.gtush.com/wp-content/uploads/2018/05/como-podar-una-higuera-1-768x463.jpg"},
    {"_id": "674a40e9be9f984aa1e15c1f", "nueva_url": "https://cdn.pixabay.com/photo/2022/10/24/13/01/chutney-7543355_1280.jpg"},
    {"_id": "674a40eabe9f984aa1e15c20", "nueva_url": "https://okinawa-coffee.up.seesaa.net/image/07050220BCABC2F0C4EDA4CEA5CFA5A4A5D3A5B9A5ABA5B9.JPG"},
    {"_id": "674a40eabe9f984aa1e15c21", "nueva_url": "https://th.bing.com/th/id/OIP.fhKYqST7iL8HiQEu43YzrgAAAA?rs=1&pid=ImgDetMain"},
    {"_id": "674a40eabe9f984aa1e15c22", "nueva_url": "https://th.bing.com/th/id/R.4dd6df3472120d717c7327137cff6ccf?rik=rGqe57SvKxOh4Q&pid=ImgRaw&r=0"},
    {"_id": "674a40ebbe9f984aa1e15c25", "nueva_url": "https://farmaciaribera.es/blog/wp-content/uploads/2020/02/beneficios-del-fenogreco-1024x680.jpg"},
    {"_id": "674a40e7be9f984aa1e15c15", "nueva_url": "https://th.bing.com/th/id/OIP.RlnuYTcy4GOZGWV9vjzaqgHaIP?rs=1&pid=ImgDetMain"},
    {"_id": "674a40e8be9f984aa1e15c16", "nueva_url": "https://th.bing.com/th/id/OIP.uGilJDPajH-ZT6BI_NtaHwHaHa?rs=1&pid=ImgDetMain"},
    {"_id": "674a40e8be9f984aa1e15c17", "nueva_url": "https://th.bing.com/th/id/R.97bb0cadedd4b6da76d4ee845942db46?rik=D%2fkfhhJRR9whVw&pid=ImgRaw&r=0"},
    {"_id": "674a40e8be9f984aa1e15c18", "nueva_url": "https://th.bing.com/th/id/R.436e51cf4a3b9aa23ac67ee7d46ceef8?rik=J%2bw3nwZaFLPZnQ&pid=ImgRaw&r=0"},
    {"_id": "674a40ebbe9f984aa1e15c23", "nueva_url": "https://th.bing.com/th/id/OIP.-pQLOMMxAKX4DWk3zUhA4gHaEK?rs=1&pid=ImgDetMain"},
    {"_id": "674a40ebbe9f984aa1e15c24", "nueva_url": "https://th.bing.com/th/id/R.e4ca42e9730de3915561eb9cf5495557?rik=Gmz%2fk2LIFfh1mQ&riu=http%3a%2f%2fmuyenforma.com%2fwp-content%2fuploads%2f2017%2f10%2fsandalo-planta-medicinal-propiedades.jpg&ehk=QNLkTAcvFigK4piVIrkqBDIWuqwMgFkOlmheawSjNgQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"}
]

# Punto de entrada principal del programa.
if __name__ == "__main__":
    """
    Esta condición verifica si el archivo se ejecuta como programa principal.
    Si es así, realiza las operaciones definidas a continuación.
    """
    # Llama a la función conectar_mongodb() para establecer conexión con la base de datos.
    db = conectar_mongodb()

    # Verifica si la conexión a la base de datos fue exitosa.
    if db is not None:
        """
        Si el objeto db no es None, significa que la conexión fue exitosa.
        En este caso, procedemos a realizar actualizaciones.
        """
        # Llama a la función actualizar_imagenes() para actualizar los documentos en la colección.
        # La variable 'actualizaciones' debe ser una lista de diccionarios previamente definida,
        # donde cada diccionario contiene '_id' y 'nueva_url'.
        actualizar_imagenes(db, actualizaciones)