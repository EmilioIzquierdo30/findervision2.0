# Importamos las clases necesarias desde pymongo y bson.
# MongoClient: Se utiliza para conectarse al servidor de MongoDB.
# errors: Maneja errores relacionados con MongoDB.
# ObjectId: Permite trabajar con identificadores únicos en MongoDB.
from pymongo import MongoClient, errors
from bson.objectid import ObjectId

# Definimos una función para conectarnos a MongoDB.
def conectar_mongodb():
    """
    Conecta a MongoDB y retorna la base de datos.

    Returns:
        db (Database): Objeto de la base de datos si la conexión es exitosa.
        None: Si ocurre un error en la conexión.
    """
    try:
        # Crea una conexión al servidor MongoDB utilizando la URI proporcionada.
        cliente = MongoClient(
            "mongodb+srv://BrianSG230:KmAq8alNdVqEbCJ9@cluster-findervision.7kpdf.mongodb.net/FinderVision?retryWrites=true&w=majority"
        )
        # Selecciona la base de datos "FinderVision" dentro del servidor.
        db = cliente["FinderVision"]
        # Retorna el objeto de la base de datos.
        return db
    except errors.ConnectionFailure as e:
        # Captura y muestra un error si la conexión falla.
        print(f"Error de conexión a MongoDB: {e}")
        # Retorna None si no se puede establecer la conexión.
        return None

# Definimos una función para verificar si un planta_id existe en la base de datos.
def verificar_planta(db, planta_id):
    """
    Verifica si un planta_id existe en la colección 'plantas'.

    Args:
        db (Database): Objeto de la base de datos donde se hará la consulta.
        planta_id (ObjectId): Identificador único de la planta a buscar.

    Returns:
        bool: True si el planta_id existe en la colección, False en caso contrario.
    """
    # Consulta la colección 'plantas' para contar documentos con el _id especificado.
    # Si encuentra al menos uno, retorna True; de lo contrario, False.
    return db.plantas.count_documents({"_id": planta_id}) > 0


# Datos de las recetas
recetas = [
    {
        "planta_id": ObjectId("674a40e4be9f984aa1e15c08"),  # Espinaca de Malabar
        "titulo": "Sopa de Espinaca de Malabar",
        "descripcion": "Una sopa nutritiva hecha con hojas frescas de Basella alba.",
        "ingredientes": "2 tazas de hojas de Espinaca de Malabar, 1 cebolla, 2 dientes de ajo, 4 tazas de caldo de verduras, Sal y pimienta al gusto",
        "instrucciones": "Lava las hojas, saltea la cebolla y el ajo, agrega el caldo y cocina hasta que las hojas estén tiernas. Sirve caliente."
    },
    {
        "planta_id": ObjectId("674a40e6be9f984aa1e15c09"),  # Menta
        "titulo": "Infusión de Menta",
        "descripcion": "Refrescante infusión de hojas de menta.",
        "ingredientes": "1 taza de hojas frescas de menta, 2 tazas de agua caliente, Miel o azúcar al gusto",
        "instrucciones": "Lava las hojas de menta, agrégalas al agua caliente y deja reposar durante 5 minutos. Endulza al gusto."
    },
    {
        "planta_id": ObjectId("674a40e6be9f984aa1e15c0a"),  # Quelite Verde
        "titulo": "Ensalada de Quelite Verde",
        "descripcion": "Una ensalada ligera y nutritiva usando hojas frescas de amaranto.",
        "ingredientes": "2 tazas de hojas de Quelite Verde, 1 tomate, 1/2 cebolla, 1 cucharada de jugo de limón, Sal al gusto",
        "instrucciones": "Lava las hojas de quelite, corta el tomate y la cebolla en rodajas, mezcla todo en un tazón y adereza con jugo de limón y sal."
    },
    {
        "planta_id": ObjectId("674a40e6be9f984aa1e15c0b"),  # Reemplaza con el _id correspondiente a Moringa
        "titulo": "Sopa de Moringa",
        "descripcion": "Sopa saludable y nutritiva hecha con hojas frescas de Moringa.",
        "ingredientes": "2 tazas de hojas de Moringa, 1 papa pequeña, 1 cebolla, 2 dientes de ajo, 4 tazas de caldo de pollo, Sal y pimienta al gusto",
        "instrucciones": "Lava las hojas de Moringa. En una cacerola, cocina la papa y la cebolla picada con el caldo de pollo hasta que estén tiernas. Agrega las hojas de Moringa y cocina por 5 minutos. Licúa todo hasta obtener una consistencia cremosa. Sazona con sal y pimienta al gusto."
    },
    {
        "planta_id": ObjectId("674a40e6be9f984aa1e15c0c"),  # ID correspondiente a Karanda
        "titulo": "Mermelada de Karanda",
        "descripcion": "Mermelada dulce y ácida hecha con los frutos de Karanda, perfecta para acompañar pan o postres.",
        "ingredientes": "2 tazas de frutos de Karanda, 1 taza de azúcar, 1/4 taza de agua, Jugo de 1 limón",
        "instrucciones": "Lava los frutos de Karanda y remueve los tallos. Cocina los frutos con el agua a fuego lento hasta que estén suaves. Agrega el azúcar y mezcla hasta que se disuelva. Cocina hasta que la mezcla espese, revolviendo constantemente. Agrega el jugo de limón, mezcla bien y deja enfriar. Guarda en un frasco limpio y esterilizado."
    },
    {
        "planta_id": ObjectId("674a40e6be9f984aa1e15c0d"),  # ID correspondiente al Árbol Peepal
        "titulo": "Té de Hojas de Peepal",
        "descripcion": "Un té relajante y desintoxicante preparado con hojas frescas del árbol Peepal.",
        "ingredientes": "5 hojas frescas de Peepal, 2 tazas de agua, 1 cucharadita de miel (opcional)",
        "instrucciones": "Lava las hojas de Peepal y hiérvelas en agua durante 5-7 minutos. Cuela el té y endulza con miel si lo deseas. Sirve caliente."
    },
    {
        "planta_id": ObjectId("674a40e7be9f984aa1e15c0e"),  # ID correspondiente a la Granada
        "titulo": "Jugo de Granada",
        "descripcion": "Un jugo fresco y antioxidante preparado con semillas de granada.",
        "ingredientes": "2 granadas grandes, 1 taza de agua fría, 1 cucharada de azúcar o miel (opcional)",
        "instrucciones": "Corta las granadas y extrae las semillas. Coloca las semillas en una licuadora junto con el agua fría y licúa hasta obtener un jugo uniforme. Cuela el jugo para retirar los restos de semillas. Endulza con azúcar o miel si lo prefieres. Sirve frío."
    },
    {
        "planta_id": ObjectId("674a40e7be9f984aa1e15c0f"),  # ID correspondiente al Jazmín
        "titulo": "Té de Flores de Jazmín",
        "descripcion": "Un té aromático y relajante preparado con flores de jazmín frescas o secas.",
        "ingredientes": "2 cucharadas de flores de jazmín frescas o 1 cucharada de flores secas, 2 tazas de agua caliente, 1 cucharadita de miel (opcional).",
        "instrucciones": "Lava las flores frescas (si las usas). Colócalas en una tetera o taza grande. Vierte agua caliente sobre las flores y deja reposar durante 5-7 minutos. Cuela el té y endulza con miel si lo deseas. Sirve caliente."
    },
    {
        "planta_id": ObjectId("674a40e7be9f984aa1e15c10"),  # ID correspondiente a la Guayaba
        "titulo": "Jugo de Guayaba",
        "descripcion": "Un jugo refrescante y nutritivo preparado con guayabas frescas.",
        "ingredientes": "3 guayabas maduras, 2 tazas de agua fría, 1 cucharada de azúcar o miel (opcional), Hielo al gusto.",
        "instrucciones": "Lava las guayabas, córtalas en trozos y retira las semillas (opcional). Coloca los trozos en una licuadora junto con el agua y licúa hasta obtener una mezcla uniforme. Cuela el jugo si lo prefieres sin pulpa. Endulza con azúcar o miel al gusto. Sirve con hielo y disfruta."
    },
    {
        "planta_id": ObjectId("674a40e7be9f984aa1e15c11"),  # ID correspondiente a Neem
        "titulo": "Té de Hojas de Neem",
        "descripcion": "Un té desintoxicante y saludable preparado con hojas de Neem.",
        "ingredientes": "10 hojas frescas de Neem, 2 tazas de agua, Miel (opcional para endulzar).",
        "instrucciones": "Lava las hojas de Neem con cuidado. Hierve 2 tazas de agua en una olla y agrega las hojas de Neem. Cocina a fuego lento durante 5-7 minutos. Cuela el té y endulza con miel si lo deseas. Sirve caliente."
    },
    {
        "planta_id": ObjectId("674a40e7be9f984aa1e15c12"),  # ID correspondiente al Mango
        "titulo": "Batido de Mango",
        "descripcion": "Un batido cremoso y refrescante hecho con mangos maduros.",
        "ingredientes": "1 mango grande maduro, 1 taza de leche fría (puede ser vegetal), 1 cucharada de azúcar o miel (opcional), Hielo al gusto.",
        "instrucciones": "Pela el mango, corta en trozos y retira el hueso. Coloca los trozos de mango en una licuadora junto con la leche, el azúcar o miel (si deseas endulzar) y el hielo. Licúa hasta obtener una mezcla suave y cremosa. Sirve frío y disfruta."
    },
    {
        "planta_id": ObjectId("674a40e7be9f984aa1e15c13"),  # ID correspondiente a Rasna
        "titulo": "Infusión de Rasna",
        "descripcion": "Una infusión cálida y aromática hecha con rizomas frescos de Rasna.",
        "ingredientes": "1 cucharada de rizomas frescos de Rasna rallados, 2 tazas de agua, 1 cucharadita de miel o azúcar (opcional).",
        "instrucciones": "Hierve 2 tazas de agua en una olla. Agrega los rizomas rallados de Rasna y cocina a fuego lento durante 5-7 minutos. Cuela la infusión y endulza con miel o azúcar si lo prefieres. Sirve caliente."
    },
    {
        "planta_id": ObjectId("674a40e7be9f984aa1e15c14"),  # ID correspondiente a Betel
        "titulo": "Té de Hojas de Betel",
        "descripcion": "Un té herbal con propiedades digestivas preparado con hojas frescas de Betel.",
        "ingredientes": "5 hojas frescas de Betel, 2 tazas de agua, 1 cucharadita de miel o azúcar (opcional).",
        "instrucciones": "Lava las hojas de Betel con cuidado. Hierve 2 tazas de agua en una olla y agrega las hojas de Betel. Cocina a fuego lento durante 5-7 minutos. Cuela el té y endulza con miel o azúcar si lo prefieres. Sirve caliente."
    },
    {
        "planta_id": ObjectId("674a40e7be9f984aa1e15c15"),  # ID correspondiente a Menta Mexicana
        "titulo": "Infusión de Menta Mexicana",
        "descripcion": "Una infusión refrescante y digestiva hecha con hojas frescas de Menta Mexicana.",
        "ingredientes": "10 hojas frescas de Menta Mexicana, 2 tazas de agua caliente, 1 cucharadita de miel o azúcar (opcional).",
        "instrucciones": "Lava las hojas de Menta Mexicana cuidadosamente. Colócalas en una taza o tetera. Vierte agua caliente sobre las hojas y deja reposar durante 5 minutos. Cuela la infusión y endulza con miel o azúcar si lo prefieres. Sirve caliente."
    },
    {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c16"),  # ID correspondiente a la Adelfa
        "titulo": "Compresa Calmante de Adelfa",
        "descripcion": "Compresa tópica para aliviar dolores musculares, preparada con hojas de Adelfa bajo estrictas precauciones.",
        "ingredientes": "5 hojas frescas de Adelfa, 2 tazas de agua.",
        "instrucciones": "Lava las hojas de Adelfa cuidadosamente con guantes. Hierve las hojas en 2 tazas de agua durante 10 minutos. Retira las hojas y deja enfriar el líquido. Empapa un paño limpio en el líquido y aplícalo sobre la zona afectada durante 10-15 minutos. No ingieras el líquido y asegúrate de lavarte las manos después de manipular la planta."
    },
    {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c17"),  # ID correspondiente al Jamun
        "titulo": "Jugo de Jamun",
        "descripcion": "Un jugo refrescante y saludable preparado con frutas frescas de Jamun.",
        "ingredientes": "2 tazas de frutos de Jamun frescos, 1 taza de agua fría, 1 cucharada de azúcar o miel (opcional), Pizca de sal negra (opcional).",
        "instrucciones": "Lava los frutos de Jamun y quita las semillas. Coloca los frutos en una licuadora con el agua fría y licúa hasta obtener una mezcla suave. Cuela el jugo si lo prefieres sin pulpa. Agrega azúcar o miel al gusto y una pizca de sal negra para resaltar los sabores. Sirve frío."
    },
    {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c18"),  # ID correspondiente a Indian Beech
        "titulo": "Aceite de Pongamia para Masajes",
        "descripcion": "Aceite terapéutico preparado con semillas de Pongamia, utilizado para aliviar dolores musculares y articulares.",
        "ingredientes": "1 taza de semillas de Pongamia, 1/2 taza de aceite de coco o sésamo.",
        "instrucciones": "Tritura las semillas de Pongamia hasta formar una pasta. Calienta el aceite de coco o sésamo en una sartén a fuego lento y agrega la pasta de semillas. Cocina durante 10 minutos, revolviendo constantemente. Cuela el aceite para retirar los residuos sólidos y guarda en un recipiente limpio. Usa este aceite tibio para masajes en áreas afectadas."
    },
    {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c19"),  # ID correspondiente a la Yaca
        "titulo": "Curry de Yaca",
        "descripcion": "Un delicioso curry vegetariano preparado con la pulpa de la yaca verde.",
        "ingredientes": "2 tazas de pulpa de yaca verde (picada), 1 cebolla picada, 2 tomates picados, 2 dientes de ajo picados, 1 cucharadita de jengibre rallado, 1 taza de leche de coco, 2 cucharadas de aceite, 1 cucharadita de cúrcuma, 1 cucharadita de comino, 1 cucharadita de cilantro en polvo, Sal al gusto, Hojas de cilantro fresco para decorar.",
        "instrucciones": "Lava y pela la yaca, corta la pulpa en trozos pequeños. Calienta el aceite en una sartén y sofríe la cebolla, el ajo y el jengibre hasta que estén dorados. Agrega los tomates y cocina hasta que se deshagan. Añade las especias (cúrcuma, comino, cilantro en polvo) y mezcla bien. Incorpora los trozos de yaca y cocina por 10 minutos. Vierte la leche de coco y cocina a fuego lento durante 15-20 minutos. Ajusta la sal y sirve caliente decorado con hojas de cilantro fresco."
    },
    {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c1a"),  # ID correspondiente a la Mostaza India
        "titulo": "Sarson Ka Saag (Curry de Mostaza India)",
        "descripcion": "Un curry tradicional del norte de la India preparado con hojas frescas de mostaza.",
        "ingredientes": "2 tazas de hojas de mostaza fresca, 1 taza de espinaca (opcional), 1 cebolla picada, 2 tomates picados, 2 dientes de ajo picados, 1 cucharadita de jengibre rallado, 1 cucharadita de cúrcuma, 1 cucharadita de comino, 2 cucharadas de aceite, Sal al gusto, 1 cucharada de harina de maíz (opcional para espesar), Hojas de cilantro fresco para decorar.",
        "instrucciones": "Lava bien las hojas de mostaza y espinaca. Cocina las hojas en agua con sal durante 10 minutos y luego tritúralas hasta formar un puré. En una sartén, calienta el aceite y sofríe la cebolla, el ajo y el jengibre hasta que estén dorados. Agrega los tomates y cocina hasta que se deshagan. Añade las especias (cúrcuma, comino) y mezcla bien. Incorpora el puré de hojas y cocina a fuego lento durante 15-20 minutos. Si deseas espesar el curry, agrega la harina de maíz disuelta en agua. Ajusta la sal y sirve caliente decorado con hojas de cilantro fresco."
    },
    {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c1b"),  # ID correspondiente a Crape Jasmine
        "titulo": "Compresa Calmante de Crape Jasmine",
        "descripcion": "Compresa tópica para reducir inflamaciones y aliviar dolores musculares.",
        "ingredientes": "5 hojas frescas de Crape Jasmine, 2 tazas de agua.",
        "instrucciones": "Lava las hojas frescas de Crape Jasmine. Hierve las hojas en 2 tazas de agua durante 10 minutos. Retira las hojas y deja enfriar ligeramente el líquido. Empapa un paño limpio en el líquido y aplícalo sobre la zona afectada durante 10-15 minutos. No ingieras esta preparación y úsala exclusivamente para fines tópicos."
    },
    {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c1c"),  # ID correspondiente al Limón
        "titulo": "Limonada Clásica",
        "descripcion": "Una bebida refrescante y rica en vitamina C, preparada con jugo de limón fresco.",
        "ingredientes": "2 limones grandes, 4 tazas de agua fría, 2 cucharadas de azúcar o miel (opcional), Hielo al gusto, Rodajas de limón y hojas de menta para decorar (opcional).",
        "instrucciones": "Exprime el jugo de los limones en una jarra. Agrega el agua fría y endulza con azúcar o miel al gusto. Mezcla bien hasta que el azúcar se disuelva. Sirve la limonada con hielo y decora con rodajas de limón y hojas de menta si lo deseas. Disfruta fresca."
    },
    {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c1d"),  # ID correspondiente a la Manzana Rosa
        "titulo": "Ensalada Fresca de Manzana Rosa",
        "descripcion": "Una ensalada ligera y refrescante hecha con manzanas rosas y un toque cítrico.",
        "ingredientes": "2 manzanas rosas, 1 zanahoria rallada, 1/2 taza de hojas de menta fresca, 2 cucharadas de jugo de limón, 1 cucharada de miel (opcional), Sal al gusto, Pimienta al gusto.",
        "instrucciones": "Lava las manzanas rosas y córtalas en rodajas finas o en trozos pequeños. En un tazón grande, mezcla las manzanas con la zanahoria rallada y las hojas de menta. Rocía con el jugo de limón y agrega la miel si lo deseas. Sazona con sal y pimienta al gusto. Mezcla bien y sirve como acompañamiento o entrada."
    },
        {
        "planta_id": ObjectId("674a40e8be9f984aa1e15c1e"),  # ID correspondiente a la Higuera Roxburgh
        "titulo": "Compota de Higos Roxburgh",
        "descripcion": "Una compota dulce y saludable preparada con los frutos de la Higuera Roxburgh.",
        "ingredientes": "2 tazas de higos Roxburgh frescos, 1/2 taza de agua, 2 cucharadas de azúcar o miel, 1 rama de canela, Jugo de medio limón.",
        "instrucciones": "Lava los higos y córtalos en trozos pequeños. Coloca los higos en una cacerola junto con el agua, el azúcar o miel, y la rama de canela. Cocina a fuego lento durante 15-20 minutos, revolviendo ocasionalmente, hasta que los higos estén suaves y la mezcla tenga una consistencia espesa. Agrega el jugo de limón y mezcla bien. Retira del fuego, deja enfriar y sirve como acompañamiento para tostadas, yogur o postres."
    },
    {
        "planta_id": ObjectId("674a40e9be9f984aa1e15c1f"),  # ID correspondiente al Árbol de Curry
        "titulo": "Pollo al Curry con Hojas de Curry",
        "descripcion": "Un plato aromático y lleno de sabor preparado con hojas frescas del Árbol de Curry.",
        "ingredientes": "500 g de pollo en trozos, 2 cebollas picadas, 2 tomates picados, 10 hojas frescas de curry, 1 cucharadita de cúrcuma, 1 cucharadita de comino, 1 cucharadita de garam masala, 1 taza de leche de coco, 2 cucharadas de aceite, Sal al gusto.",
        "instrucciones": "Calienta el aceite en una sartén y sofríe las hojas de curry durante 1 minuto. Añade las cebollas picadas y cocina hasta que estén doradas. Agrega los tomates y cocina hasta que se deshagan. Incorpora las especias (cúrcuma, comino, garam masala) y mezcla bien. Agrega el pollo y cocina durante 10-15 minutos, mezclando ocasionalmente. Vierte la leche de coco, ajusta la sal y cocina a fuego lento durante otros 10 minutos. Sirve caliente con arroz o pan naan."
    },
    {
        "planta_id": ObjectId("674a40eabe9f984aa1e15c20"),  # ID correspondiente a Rosa de China
        "titulo": "Té de Hibisco",
        "descripcion": "Un té refrescante y saludable preparado con pétalos frescos de la Rosa de China.",
        "ingredientes": "10 pétalos frescos de Rosa de China, 2 tazas de agua, 1 cucharadita de miel o azúcar (opcional), Jugo de medio limón (opcional).",
        "instrucciones": "Lava cuidadosamente los pétalos de Rosa de China. Hierve 2 tazas de agua en una olla, agrega los pétalos y cocina a fuego lento durante 5-7 minutos. Cuela el té y endulza con miel o azúcar al gusto. Si lo prefieres, agrega jugo de limón para un toque cítrico. Sirve caliente o frío."
    },
    {
        "planta_id": ObjectId("674a40eabe9f984aa1e15c21"),  # ID correspondiente a Parijata
        "titulo": "Infusión de Parijata",
        "descripcion": "Una infusión medicinal preparada con hojas y flores de Parijata, conocida por sus propiedades antiinflamatorias y relajantes.",
        "ingredientes": "5 hojas frescas de Parijata, 3 flores frescas de Parijata, 2 tazas de agua, 1 cucharadita de miel o azúcar (opcional).",
        "instrucciones": "Lava cuidadosamente las hojas y flores de Parijata. Hierve 2 tazas de agua y agrega las hojas y flores. Cocina a fuego lento durante 5-7 minutos. Cuela la infusión y endulza con miel o azúcar si lo deseas. Sirve caliente para disfrutar de sus propiedades relajantes y antiinflamatorias."
    },
    {
        "planta_id": ObjectId("674a40eabe9f984aa1e15c22"),  # ID correspondiente a Jamaica Cherry
        "titulo": "Mermelada de Jamaica Cherry",
        "descripcion": "Una mermelada dulce y casera preparada con los frutos de la Jamaica Cherry.",
        "ingredientes": "2 tazas de frutos de Jamaica Cherry maduros, 1 taza de azúcar, Jugo de medio limón, 1/4 taza de agua.",
        "instrucciones": "Lava bien los frutos de Jamaica Cherry y quita cualquier tallo. Coloca los frutos en una cacerola a fuego medio junto con el azúcar y el agua. Cocina durante 10-15 minutos, revolviendo ocasionalmente, hasta que los frutos se deshagan y la mezcla espese. Agrega el jugo de limón y cocina por otros 5 minutos. Deja enfriar la mermelada y guárdala en un frasco esterilizado. Úsala como acompañamiento para pan, galletas o postres."
    },
    {
        "planta_id": ObjectId("674a40ebbe9f984aa1e15c23"),  # ID correspondiente a Tulsi
        "titulo": "Té de Tulsi",
        "descripcion": "Un té herbal relajante y medicinal preparado con hojas frescas de Tulsi.",
        "ingredientes": "10 hojas frescas de Tulsi, 2 tazas de agua, 1 cucharadita de miel (opcional), Jugo de medio limón (opcional).",
        "instrucciones": "Lava bien las hojas de Tulsi. Hierve 2 tazas de agua y agrega las hojas. Cocina a fuego lento durante 5-7 minutos. Cuela el té y endulza con miel si lo deseas. Agrega jugo de limón para un sabor refrescante. Sirve caliente y disfruta de sus propiedades relajantes e inmunoestimulantes."
    },
        {
        "planta_id": ObjectId("674a40ebbe9f984aa1e15c24"),  # ID correspondiente a Sándalo
        "titulo": "Máscara Facial de Sándalo",
        "descripcion": "Una máscara facial rejuvenecedora y calmante preparada con polvo de sándalo.",
        "ingredientes": "2 cucharadas de polvo de sándalo, 1 cucharada de agua de rosas, 1 cucharadita de miel (opcional).",
        "instrucciones": "En un tazón pequeño, mezcla el polvo de sándalo con el agua de rosas hasta formar una pasta suave. Agrega miel si lo deseas para propiedades hidratantes adicionales. Aplica la mezcla sobre el rostro limpio y deja actuar durante 15-20 minutos. Enjuaga con agua tibia y seca suavemente. Repite una vez por semana para obtener una piel suave y radiante."
    },
    {
        "planta_id": ObjectId("674a40ebbe9f984aa1e15c25"),  # ID correspondiente al Fenogreco
        "titulo": "Infusión de Fenogreco",
        "descripcion": "Una infusión herbal rica en antioxidantes y propiedades digestivas.",
        "ingredientes": "1 cucharadita de semillas de fenogreco, 2 tazas de agua, 1 cucharadita de miel (opcional).",
        "instrucciones": "Remoja las semillas de fenogreco en agua durante 5 minutos. Luego hierve las semillas junto con el agua durante 10 minutos. Cuela la infusión y, si lo deseas, endulza con miel. Sirve caliente para disfrutar de sus beneficios digestivos y antioxidantes."
    }
]

# Función para insertar múltiples recetas en la base de datos
def insertar_recetas(db, lista_recetas):
    """
    Inserta múltiples recetas en la colección 'recetas'.

    Args:
        db (Database): Objeto de la base de datos donde se hará la inserción.
        lista_recetas (list): Lista de recetas a insertar. Cada receta debe ser un diccionario con al menos el campo 'planta_id' y 'titulo'.

    Returns:
        None
    """
    try:
        # Inicializa un contador para las recetas insertadas correctamente.
        recetas_insertadas = 0
        # Itera sobre cada receta en la lista proporcionada.
        for receta in lista_recetas:
            # Verifica si el 'planta_id' especificado existe en la colección 'plantas'.
            if verificar_planta(db, receta["planta_id"]):
                # Inserta la receta en la colección 'recetas' y obtiene su _id generado.
                receta_id = db.recetas.insert_one(receta).inserted_id
                # Muestra un mensaje indicando que la receta se insertó correctamente.
                print(f"Receta '{receta['titulo']}' insertada exitosamente con _id: {receta_id}")
                # Incrementa el contador de recetas insertadas.
                recetas_insertadas += 1
            else:
                # Muestra un mensaje de error si el 'planta_id' no existe.
                print(f"Error: planta_id '{receta['planta_id']}' no existe. Receta '{receta['titulo']}' no insertada.")
        
        # Imprime la cantidad total de recetas insertadas correctamente.
        print(f"Se insertaron correctamente {recetas_insertadas} recetas.")
    except errors.PyMongoError as e:
        # Captura cualquier error relacionado con MongoDB y lo muestra.
        print(f"Ocurrió un error al insertar las recetas: {e}")

# Punto de entrada principal del programa.
if __name__ == "__main__":
    # Conecta a la base de datos MongoDB.
    db = conectar_mongodb()
    # Si la conexión es exitosa, llama a la función 'insertar_recetas'.
    if db is not None:
        # Asegúrate de que 'recetas' esté definido previamente como una lista de recetas a insertar.
        insertar_recetas(db, recetas)