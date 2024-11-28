from pymongo import MongoClient, errors
from bson.objectid import ObjectId
from datetime import datetime

# Conexión a la base de datos
def conectar_mongodb():
    """Conecta a MongoDB y retorna la base de datos."""
    try:
        cliente = MongoClient("mongodb://localhost:27017/")
        db = cliente["FinderVision"]  # Conectar o crear la base de datos
        return db
    except errors.ConnectionFailure as e:
        print(f"Error de conexión a MongoDB: {e}")
        return None

# Datos de las plantas
plantas = [
    {
        "nombre_comun": "Espinaca de Malabar, Basale, Espinaca trepadora",
        "nombre_cientifico": "Basella alba",
        "descripcion": "Planta trepadora perenne que se cultiva principalmente por sus hojas comestibles, que son carnosas y se utilizan como sustituto de la espinaca. Es popular en regiones tropicales y subtropicales debido a su alta tolerancia al calor.",
        "usos_medicinales": "Antioxidante, mejora la digestión, fortalece el sistema inmunológico, promueve la salud ocular y ayuda en la cicatrización de heridas con las hojas machacadas se usan tópicamente para tratar heridas y quemaduras leves.",
        "partes_utilizadas": "Hojas, tallos jóvenes y frutos.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Basella Alba (Basale)\\BA-S-002.jpg",
        "propiedades": "Antiinflamatoria, digestiva, antioxidante, cicatrizante, laxante suave.",
        "categoria": "Medicinal y alimenticia"
    },
    {
        "nombre_comun": "Menta, Hierbabuena, Mint",
        "nombre_cientifico": "Mentha spp",
        "descripcion": "Planta herbácea perenne con un aroma fresco y distintivo. Se utiliza ampliamente en la cocina, la medicina tradicional y la industria cosmética debido a sus propiedades aromáticas y medicinales.",
        "usos_medicinales": "Alivia indigestión, náuseas y cólicos, actúa como descongestionante natural, dolores de cabeza y reduce el estrés.",
        "partes_utilizadas": "Hojas, tallos jóvenes y aceite esencial.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Mentha (Mint)\\M-S-038.jpg",
        "propiedades": "Antiinflamatoria, antiespasmódica, carminativa, descongestionante.",
        "categoria": "Medicinal y culinaria "
    },
    {
        "nombre_comun": "Quelite verde, Arrive-Dantu, Hierba del pollo, Amaranto verde.",
        "nombre_cientifico": "Amaranthus viridis.",
        "descripcion": "Planta herbácea anual de rápido crecimiento, comúnmente utilizada como verdura de hoja en diversas culturas. Es altamente nutritiva y rica en vitaminas y minerales.",
        "usos_medicinales": "Ayuda en problemas digestivos, propiedades antiinflamatorias, purificación de la sangre y prevención de la anemia.",
        "partes_utilizadas": "Hojas, tallos tiernos y semillas.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Amaranthus Viridis (Arive-Dantu)\\AV-S-014.jpg",
        "propiedades": "Antiinflamatoria, diurética, antioxidante, nutritiva.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Moringa, Drumstick, Árbol de la vida, Árbol milagroso.",
        "nombre_cientifico": "Moringa oleifera ",
        "descripcion": "Árbol originario de las regiones subtropicales y tropicales, conocido por su alta densidad nutricional y múltiples beneficios medicinales. Se le llama el árbol milagroso debido a sus numerosas propiedades.",
        "usos_medicinales": "Antiinflamatorio, antioxidante, controla el azúcar en sangre, mejora la digestión, fortalece el sistema inmunológico y desintoxica.",
        "partes_utilizadas": "Hojas, semillas, flores, vainas jóvenes (drumsticks) y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Moringa Oleifera (Drumstick)\\MO-S-009.jpg",
        "propiedades": "Antiinflamatoria, antioxidante, antidiabética, diurética, hepatoprotectora, inmunoestimulante.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Karanda, Caranda, Ciruela de Natal.",
        "nombre_cientifico": "Carissa carandas.",
        "descripcion": "Arbusto frutal originario de Asia tropical y subtropical, conocido por sus frutos ácidos y ricos en vitamina C. Es ampliamente utilizado en la medicina tradicional, así como en la preparación de mermeladas, encurtidos y jarabes.",
        "usos_medicinales": "Mejora la digestión, protege contra radicales libres, tiene propiedades antifúngicas y antibacterianas, regula el azúcar en sangre y combate la anemia.",
        "partes_utilizadas": "Frutos, hojas y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Carissa Carandas (Karanda)\\CC-S-035.jpg",
        "propiedades": "Antioxidante, antidiabética, antiinflamatoria, digestiva.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Árbol Peepal, Árbol Bodhi, Árbol Sagrado.",
        "nombre_cientifico": "Ficus religiosa.",
        "descripcion": "Árbol caducifolio originario del subcontinente indio, venerado en varias tradiciones religiosas como el hinduismo y el budismo. Es conocido por su longevidad y su importancia espiritual y medicinal.",
        "usos_medicinales": "Propiedades antiinflamatorias, ayuda a controlar la diabetes, alivia problemas respiratorios, desintoxica el cuerpo y trata trastornos digestivos.",
        "partes_utilizadas": "Hojas, corteza, frutos y raíces. ",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Ficus Religiosa (Peepal Tree)\\FR-S-010.jpg",
        "propiedades": "Antiinflamatoria, antidiabética, desintoxicante, digestiva.",
        "categoria": "Medicinal y espiritual."
    },
    {
        "nombre_comun": "Granada, Pomegranate.",
        "nombre_cientifico": "Punica granatum.",
        "descripcion": "Árbol o arbusto de tamaño mediano, conocido por sus frutos ricos en antioxidantes y su importancia tanto culinaria como medicinal. Es originario de Asia Occidental y la región mediterránea.",
        "usos_medicinales": "Propiedades antioxidantes, mejora la salud cardiovascular, alivia problemas gastrointestinales, combate infecciones y refuerza el sistema inmunológico.",
        "partes_utilizadas": "Frutos, semillas, cáscara y corteza.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Punica Granatum (Pomegranate)\\PG-S-016.jpg",
        "propiedades": "Antioxidante, antiinflamatoria, digestiva, inmunoestimulante.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Jazmín, Jasmine.",
        "nombre_cientifico": "Jasminum spp.",
        "descripcion": "Planta trepadora o arbustiva conocida por sus flores fragantes y ornamentales. Originaria de regiones tropicales y subtropicales, es ampliamente valorada por su uso en perfumería, medicina tradicional y prácticas espirituales.",
        "usos_medicinales": "Calmante para el estrés, propiedades antisépticas, mejora la salud de la piel, alivia problemas digestivos y dolores musculares.",
        "partes_utilizadas": "Flores, hojas, raíces y aceite esencial.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Jasminum (Jasmine)\\J-S-011.jpg",
        "propiedades": "Antiséptica, calmante, antiinflamatoria, digestiva.",
        "categoria": "Medicinal y ornamental."
    },
    {
        "nombre_comun": "Guayaba, Guava.",
        "nombre_cientifico": "Psidium guajava.",
        "descripcion": "Árbol tropical perenne de tamaño pequeño a mediano, conocido por sus frutos dulces y aromáticos. Es originario de América Central y del Sur, ampliamente cultivado por sus beneficios nutricionales y medicinales.",
        "usos_medicinales": "Ayuda en problemas digestivos, fortalece el sistema inmunológico, regula el azúcar en sangre, mejora la salud de la piel y combate infecciones.",
        "partes_utilizadas": "Frutos, hojas, corteza y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Psidium Guajava (Guava)\\PG-S-015.jpg",
        "propiedades": "Antiséptica, antioxidante, digestiva, inmunoestimulante.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Neem, Margosa.",
        "nombre_cientifico": "Azadirachta indica.",
        "descripcion": "Árbol perenne originario del subcontinente indio y otras regiones tropicales, conocido por su valor medicinal, agrícola y ecológico. Es ampliamente utilizado en la medicina tradicional y en productos para la agricultura sostenible.",
        "usos_medicinales": "Propiedades antisépticas, desintoxicantes, controla la diabetes, mejora la salud dental y actúa como repelente natural.",
        "partes_utilizadas": "Hojas, corteza, semillas, frutos, flores y aceite.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Azadirachta Indica (Neem)\\AI-S-023.jpg",
        "propiedades": "Antibacteriana, antifúngica, antiparasitaria, antiinflamatoria, desintoxicante.",
        "categoria": "Medicinal y agrícola."
    },
    {
        "nombre_comun": "Mango",
        "nombre_cientifico": "Mangifera indica.",
        "descripcion": "Árbol tropical perenne, conocido por sus frutos dulces y nutritivos. Originario del sur de Asia, se cultiva ampliamente en regiones tropicales y subtropicales por su fruta y propiedades medicinales.",
        "usos_medicinales": "Rico en antioxidantes, mejora la digestión, refuerza el sistema inmunológico, cuida la piel y combate infecciones.",
        "partes_utilizadas": "Frutos, hojas, semillas, flores y corteza.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Mangifera Indica (Mango)\\MI-S-005.jpg",
        "propiedades": "Antioxidante, inmunoestimulante, digestiva, antimicrobiana.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Rasna, Galanga, Jengibre tailandés.",
        "nombre_cientifico": "Alpinia galanga.",
        "descripcion": "Planta perenne rizomatosa originaria del sudeste asiático. Sus rizomas son ampliamente utilizados en la cocina asiática, así como en la medicina tradicional por sus múltiples propiedades beneficiosas para la salud.",
        "usos_medicinales": "Alivia la indigestión, tiene propiedades antiinflamatorias, mejora la respiración, refuerza el sistema inmunológico y combate infecciones.",
        "partes_utilizadas": "Rizomas, hojas y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Alpinia Galanga (Rasna)\\AG-S-050.jpg",
        "propiedades": "Antiinflamatoria, digestiva, antimicrobiana, expectorante.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Betel, Hoja de Betel.",
        "nombre_cientifico": "Piper betle.",
        "descripcion": "Planta trepadora perenne originaria del sudeste asiático, conocida por sus hojas aromáticas y su uso tradicional en la medicina y en prácticas culturales. Las hojas de betel son un componente esencial en el paan, una preparación tradicional en Asia.",
        "usos_medicinales": "Estimula la digestión, previene infecciones, trata resfriados, alivia dolores musculares y protege contra el daño celular.",
        "partes_utilizadas": "Hojas y tallos.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Piper Betle (Betel)\\PB-S-009.jpg",
        "propiedades": "Digestiva, antiséptica, antiinflamatoria, antioxidante.",
        "categoria": "Medicinal y cultural."
    },
    {
        "nombre_comun": "Menta Mexicana, Orégano Cubano, Orégano Indio, Hiedra Sueca.",
        "nombre_cientifico": "Plectranthus amboinicus",
        "descripcion": "Planta herbácea perenne con hojas gruesas y aromáticas, utilizada tanto como hierba culinaria como en la medicina tradicional. Es originaria de África y se cultiva ampliamente en climas tropicales y subtropicales.",
        "usos_medicinales": "Alivia problemas digestivos, trata afecciones respiratorias, combate infecciones, mejora la salud de la piel y reduce el estrés.",
        "partes_utilizadas": "Hojas y aceite esencial.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Plectranthus Amboinicus (Mexican Mint)\\PA-S-034.jpg",
        "propiedades": "Antiinflamatoria, antimicrobiana, digestiva, expectorante.",
        "categoria": "Medicinal y culinaria."
    },
    {
        "nombre_comun": "Adelfa, Laurel de Flor, Oleander.",
        "nombre_cientifico": "Nerium oleander.",
        "descripcion": "Arbusto perenne ornamental con flores vistosas y fragantes. Es originario de regiones mediterráneas y subtropicales. Aunque es tóxico, tiene usos controlados en la medicina tradicional.",
        "usos_medicinales": "Tratamiento de problemas cardíacos, propiedades antimicrobianas y antiinflamatorias (bajo supervisión médica).",
        "partes_utilizadas": "Hojas, flores y raíces (se requiere extrema precaución debido a su toxicidad).",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Nerium Oleander (Oleander)\\NO-S-008.jpg",
        "propiedades": "Antiinflamatoria, antimicrobiana, cardiotónica (bajo supervisión médica).",
        "categoria": "Ornamental y medicinal (bajo estricto control)."
    },
    {
        "nombre_comun": "Jamun, Jambul, Ciruela Negra, Java Plum.",
        "nombre_cientifico": "Syzygium cumini.",
        "descripcion": "Árbol tropical perenne originario del sur de Asia, conocido por sus frutos comestibles de color púrpura oscuro. Es valorado por sus propiedades medicinales y sus beneficios nutricionales.",
        "usos_medicinales": "Ayuda a controlar la diabetes, mejora la digestión, fortalece el sistema inmunológico, cuida la salud bucal y reduce la inflamación.",
        "partes_utilizadas": "Frutos, semillas, hojas y corteza.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Syzygium Cumini (Jamun)\\SC-S-025.jpg",
        "propiedades": "Antioxidante, antidiabética, digestiva, antiinflamatoria.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Indian Beech, Pongamia, Karanja.",
        "nombre_cientifico": "Pongamia pinnata.",
        "descripcion": "Árbol perenne de tamaño mediano a grande, nativo del sur de Asia y el sudeste asiático. Es conocido por sus usos en la medicina tradicional, así como por su aceite extraído de las semillas, utilizado en biocombustibles y tratamientos medicinales.",
        "usos_medicinales": "Propiedades antisépticas, antiinflamatorias, analgésicas, mejora la digestión y protege el hígado.",
        "partes_utilizadas": "Hojas, semillas, corteza y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Pongamia Pinnata (Indian Beech)\\PP-S-011.jpg",
        "propiedades": "Antiséptica, antiinflamatoria, analgésica, digestiva, hepatoprotectora.",
        "categoria": "Medicinal y sostenible (biocombustible)."
    },
    {
        "nombre_comun": "Yaca, Jackfruit.",
        "nombre_cientifico": "Artocarpus heterophyllus.",
        "descripcion": "Árbol tropical perenne que produce uno de los frutos más grandes del mundo. Originario del sur de Asia, es conocido por sus usos alimenticios y medicinales. El fruto es altamente nutritivo y utilizado como sustituto de carne en dietas vegetarianas.",
        "usos_medicinales": "Mejora la digestión, fortalece el sistema inmunológico, regula el azúcar en sangre, cuida la piel y combate infecciones.",
        "partes_utilizadas": "Frutos, semillas, hojas, corteza y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Artocarpus Heterophyllus (Jackfruit)\\AH-S-007.jpg",
        "propiedades": "Digestiva, antioxidante, antidiabética, antimicrobiana.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Mostaza India, Indian Mustard.",
        "nombre_cientifico": "Brassica juncea.",
        "descripcion": "Planta anual originaria del sur de Asia, ampliamente cultivada por sus semillas, hojas y tallos. Sus semillas se utilizan para producir aceite de mostaza, mientras que las hojas jóvenes son consumidas como verdura. También es conocida por sus propiedades medicinales.",
        "usos_medicinales": "Estimula la digestión, reduce la inflamación, ayuda a desintoxicar el cuerpo, mejora la salud cardiovascular y combate infecciones.",
        "partes_utilizadas": "Semillas, hojas y aceite.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Brassica Juncea (Indian Mustard)\\BJ-S-016.jpg",
        "propiedades": "Antiinflamatoria, digestiva, antimicrobiana, desintoxicante.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Crape Jasmine, Jazmín Pernoctante, Moonbeam.",
        "nombre_cientifico": "Tabernaemontana divaricata.",
        "descripcion": "Arbusto perenne tropical con flores blancas en forma de molino de viento. Es originaria del sur y sudeste de Asia, y se cultiva principalmente como planta ornamental. Tiene aplicaciones en la medicina tradicional gracias a sus propiedades curativas.",
        "usos_medicinales": "Reduce la inflamación, cuida la piel, alivia problemas respiratorios, actúa como sedante y protege contra infecciones.",
        "partes_utilizadas": "Flores, hojas, raíces y látex.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Tabernaemontana Divaricata (Crape Jasmine)\\TD-S-048.jpg",
        "propiedades": "Antiinflamatoria, antimicrobiana, sedante, cicatrizante.",
        "categoria": "Medicinal y ornamental."
    },
    {
        "nombre_comun": "Limón, Lemon.",
        "nombre_cientifico": "Citrus limon.",
        "descripcion": "Árbol frutal de tamaño pequeño a mediano, conocido por su fruto ácido y altamente aromático. Originario del sudeste asiático, el limón es ampliamente cultivado en todo el mundo por sus múltiples usos culinarios y medicinales.",
        "usos_medicinales": "Refuerza el sistema inmunológico, mejora la digestión, desintoxica el cuerpo, cuida la piel y protege contra infecciones.",
        "partes_utilizadas": "Frutos, cáscara, jugo y hojas.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Citrus Limon (Lemon)\\CL-S-007.jpg",
        "propiedades": "Antioxidante, digestiva, detoxificante, antibacteriana, inmunoestimulante.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Manzana Rosa, Rose Apple.",
        "nombre_cientifico": "Syzygium jambos.",
        "descripcion": "Árbol tropical perenne que produce frutos pequeños de forma ovalada con un aroma dulce y característico que recuerda a las rosas. Originario del sudeste asiático, el árbol también se cultiva por su valor ornamental y sus propiedades medicinales.",
        "usos_medicinales": "Mejora la digestión, combate infecciones, reduce la fiebre, protege contra el daño celular y alivia inflamaciones.",
        "partes_utilizadas": "Frutos, hojas, semillas, corteza y flores.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Syzygium Jambos (Rose Apple)\\SJ-S-004.jpg",
        "propiedades": "Digestiva, antioxidante, antiinflamatoria, antimicrobiana, febrífuga.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Higuera Roxburgh, Roxburgh fig, Higuerón.",
        "nombre_cientifico": "Ficus auriculata.",
        "descripcion": "Árbol o arbusto tropical de tamaño mediano, conocido por sus frutos grandes y redondos. Es originario del sur de Asia y el sudeste asiático. Además de sus usos culinarios, la planta tiene aplicaciones en la medicina tradicional.",
        "usos_medicinales": "Mejora la digestión, protege el hígado, regula el azúcar en sangre, combate la inflamación y protege contra el daño oxidativo.",
        "partes_utilizadas": "Frutos, hojas, corteza y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Ficus Auriculata (Roxburgh fig)\\FA-S-014.jpg",
        "propiedades": "Digestiva, antioxidante, antiinflamatoria, hepatoprotectora, antidiabética.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": " Árbol de Curry, Curry.",
        "nombre_cientifico": "Murraya koenigii.",
        "descripcion": "Arbusto o árbol pequeño perenne originario del sur de Asia. Es conocido por sus hojas aromáticas, ampliamente utilizadas en la cocina india y asiática, así como en la medicina tradicional por sus múltiples propiedades curativas.",
        "usos_medicinales": "Controla la diabetes, mejora la digestión, protege contra el daño oxidativo, reduce la inflamación y fortalece el cabello.",
        "partes_utilizadas": "Hojas, frutos, corteza y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Murraya Koenigii (Curry)\\MK-S-006.jpg",
        "propiedades": "Antioxidante, digestiva, antidiabética, antiinflamatoria, fortificante.",
        "categoria": "Medicinal y culinaria."
    },
    {
        "nombre_comun": "Rosa de China, Hibisco, Cayena.",
        "nombre_cientifico": "Hibiscus rosa-sinensis.",
        "descripcion": "Arbusto o pequeño árbol tropical con flores grandes, coloridas y decorativas. Es originario de Asia oriental y ampliamente cultivado como planta ornamental. Tiene aplicaciones en la medicina tradicional gracias a sus propiedades beneficiosas para la salud.",
        "usos_medicinales": "Promueve el crecimiento del cabello, protege contra el envejecimiento celular, mejora la salud cardíaca, alivia problemas digestivos y reduce la inflamación.",
        "partes_utilizadas": "Flores, hojas y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Hibiscus Rosa-sinensis\\HR-S-011.jpg",
        "propiedades": "Antioxidante, antiinflamatoria, digestiva, fortalecedora, cardiotónica.",
        "categoria": "Medicinal y ornamental."
    },
    {
        "nombre_comun": "Parijata, Árbol de Coral, Night Jasmine.",
        "nombre_cientifico": "Nyctanthes arbor-tristis.",
        "descripcion": "Arbusto o pequeño árbol conocido por sus flores fragantes que florecen por la noche. Es originario del sur de Asia y ampliamente utilizado tanto como planta ornamental como por sus propiedades medicinales.",
        "usos_medicinales": "Reduce la inflamación, mejora la digestión, baja la fiebre, fortalece el sistema inmunológico y cuida la piel.",
        "partes_utilizadas": "Flores, hojas, corteza y semillas.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Nyctanthes Arbor-tristis (Parijata)\\NA-S-007.jpg",
        "propiedades": "Antiinflamatoria, digestiva, antipirética, inmunomoduladora, cicatrizante.",
        "categoria": "Medicinal y ornamental."
    },
    {
        "nombre_comun": "Jamaica Cherry, Gasagase, Capulín de Jamaica.",
        "nombre_cientifico": "Muntingia calabura.",
        "descripcion": "Árbol de rápido crecimiento originario de América tropical, cultivado en muchas regiones cálidas por sus frutos dulces y jugosos. Además de ser un árbol frutal popular, se utiliza en la medicina tradicional para tratar diversos problemas de salud.",
        "usos_medicinales": "Combate el daño celular, alivia el dolor, trata problemas respiratorios, protege contra infecciones y mejora la salud cardiovascular.",
        "partes_utilizadas": "Frutos, hojas, corteza y flores.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Muntingia Calabura (Jamaica Cherry-Gasagase)\\MC-S-015.jpg",
        "propiedades": "Antioxidante, analgésica, antimicrobiana, expectorante, cardioprotectora.",
        "categoria": "Medicinal y alimenticia."
    },
    {
        "nombre_comun": "Tulsi, Albahaca Sagrada, Holy Basil.",
        "nombre_cientifico": "Ocimum tenuiflorum.",
        "descripcion": "Planta herbácea aromática perenne, originaria del sur de Asia. Es una planta sagrada en la cultura india y se cultiva ampliamente por sus propiedades medicinales y usos espirituales. Se utiliza tanto fresca como en forma seca en la medicina tradicional ayurvédica.",
        "usos_medicinales": "Fortalece el sistema inmunológico, combate el estrés, alivia problemas respiratorios, mejora la salud digestiva y protege contra infecciones cutáneas.",
        "partes_utilizadas": "Hojas, semillas, flores y raíces.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Ocimum Tenuiflorum (Tulsi)\\OT-S-040.jpg",
        "propiedades": "Antioxidante, inmunomoduladora, expectorante, digestiva, antimicrobiana.",
        "categoria": "Medicinal y espiritual."
    },
    {
        "nombre_comun": "Sándalo, Sandalwood.",
        "nombre_cientifico": "Santalum album.",
        "descripcion": "Árbol tropical perenne conocido por su madera aromática y el aceite esencial extraído de ella. Originario del sur de Asia, es muy apreciado por su uso en la medicina tradicional, la perfumería y ceremonias espirituales.",
        "usos_medicinales": "Alivia el estrés, mejora la calidad del sueño, protege la piel, combate infecciones y alivia problemas respiratorios.",
        "partes_utilizadas": "Madera y aceite esencial.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Santalum Album (Sandalwood)\\SA-S-020.jpg",
        "propiedades": "Calmante, antimicrobiana, antiinflamatoria, cicatrizante, relajante.",
        "categoria": "Medicinal y espiritual."
    },
    {
        "nombre_comun": "Fenogreco, Fenugreek, Alholva.",
        "nombre_cientifico": "Trigonella foenum-graecum.",
        "descripcion": "Planta herbácea anual originaria del Mediterráneo y Asia. Es ampliamente utilizada en la cocina por sus semillas y hojas aromáticas, así como en la medicina tradicional por sus numerosos beneficios para la salud.",
        "usos_medicinales": "Regula el azúcar en sangre, mejora la digestión, estimula la producción de leche materna, reduce inflamaciones y fortalece el cabello.",
        "partes_utilizadas": "Semillas, hojas y brotes.",
        "imagen": "c:\\Users\\Administrator\\Downloads\\train-20241127T014738Z-001\\train\\Trigonella Foenum-graecum (Fenugreek)\\TF-S-006.jpg",
        "propiedades": "Antidiabética, digestiva, antiinflamatoria, galactagoga, fortalecedora.",
        "categoria": "Medicinal y alimenticia."
    },
]

# Función para insertar múltiples plantas
def insertar_plantas(db, lista_plantas):
    """Inserta múltiples plantas en la colección 'plantas'."""
    try:
        for planta in lista_plantas:
            # Agregar la fecha de registro a cada planta
            planta["fecha_registro"] = datetime.now()
            
            # Insertar la planta en la colección
            planta_id = db.plantas.insert_one(planta).inserted_id
            print(f"Planta '{planta['nombre_comun']}' insertada exitosamente con _id: {planta_id}")

    except Exception as e:
        print(f"Ocurrió un error al insertar las plantas: {e}")

# Llamar a las funciones
if __name__ == "__main__":
    db = conectar_mongodb()
    if db is not None:
        insertar_plantas(db, plantas)
