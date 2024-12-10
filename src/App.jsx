import React, { useState } from 'react';
// Importa React y el hook useState para manejar estados en el componente.
import Sidebar from './Sidebar';
// Importa el componente Sidebar para mostrar categorías de plantas.
import ListaPlantas from './ListaPlantas';
// Importa el componente ListaPlantas para mostrar las plantas filtradas.
import './App.css';
// Importa los estilos CSS para la aplicación.
import logo from './logo-findervision.jpg';
// Importa el logo que se usará en la cabecera.

const App = () => {
  // Define el componente principal de la aplicación.
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  // Estado para manejar la categoría seleccionada.
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);
  // Estado para manejar la planta seleccionada en el modal.
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para manejar el término de búsqueda ingresado por el usuario.
  const [imagenAmpliada, setImagenAmpliada] = useState(false);
  // Estado para determinar si la imagen en el modal está ampliada.
  
  // Lista de plantas
  const plantas = [
      {
        nombre: 'Espinaca de Malabar, Basale, Espinaca trepadora',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://th.bing.com/th/id/R.5d6cd571d4aab5a84859535c4f0cc746?rik=bdGRQV8UL6FLlg&riu=http%3a%2f%2fwww.thedailygarden.us%2fuploads%2f4%2f5%2f4%2f9%2f45493619%2fmalabar-spinach-leaves-joydeep-cc-by-sa-3-0_orig.jpg&ehk=CJCm%2bqdkguXCHWIGUt0Ze%2bbSCnzbhInIJBzwOE08o%2fI%3d&risl=&pid=ImgRaw&r=0',
        descripcion: 'Planta trepadora perenne que se cultiva principalmente por sus hojas comestibles, que son carnosas y se utilizan como sustituto de la espinaca.',
        beneficios: 'Antioxidante, mejora la digestión, fortalece el sistema inmunológico, promueve la salud ocular y ayuda en la cicatrización de heridas.',
        recetas: [
          {
            titulo: "Sopa de Espinaca de Malabar",
            descripcion: "Una sopa nutritiva hecha con hojas frescas de Basella alba.",
            ingredientes: "2 tazas de hojas de Espinaca de Malabar, 1 cebolla, 2 dientes de ajo, 4 tazas de caldo de verduras, Sal y pimienta al gusto",
            instrucciones: "Lava las hojas, saltea la cebolla y el ajo, agrega el caldo y cocina hasta que las hojas estén tiernas. Sirve caliente."
          }
        ]
      },
      {
        nombre: 'Menta, Hierbabuena, Mint',
        categoria: 'Medicinal y culinaria',
        imagen: 'https://3.bp.blogspot.com/-EVKkz4Ol_vo/U1l88cpNzeI/AAAAAAAABHM/Hi5AjuSr-mU/s1600/menta+012.JPG',
        descripcion: 'Planta herbácea perenne con un aroma fresco y distintivo.',
        beneficios: 'Alivia indigestión, náuseas y cólicos, actúa como descongestionante natural.',
        recetas: [
          {
            titulo: "Infusión de Menta",
            descripcion: "Refrescante infusión de hojas de menta.",
            ingredientes: "1 taza de hojas frescas de menta, 2 tazas de agua caliente, Miel o azúcar al gusto",
            instrucciones: "Lava las hojas de menta, agrégalas al agua caliente y deja reposar durante 5 minutos. Endulza al gusto."
          }
        ]
      },
      {
        nombre: 'Quelite Verde, Arrive-Dantu, Hierba del pollo, Amaranto verde',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://cdn.shopify.com/s/files/1/0157/0808/products/II01-005_CC_18_P2_small_grande.jpg?v=1524085927',
        descripcion: 'Planta herbácea anual de rápido crecimiento, comúnmente utilizada como verdura de hoja.',
        beneficios: 'Ayuda en problemas digestivos, propiedades antiinflamatorias, purificación de la sangre y prevención de la anemia.',
        recetas: [
          {
            titulo: "Ensalada de Quelite Verde",
            descripcion: "Una ensalada ligera y nutritiva usando hojas frescas de amaranto.",
            ingredientes: "2 tazas de hojas de Quelite Verde, 1 tomate, 1/2 cebolla, 1 cucharada de jugo de limón, Sal al gusto",
            instrucciones: "Lava las hojas de quelite, corta el tomate y la cebolla en rodajas, mezcla todo en un tazón y adereza con jugo de limón y sal."
          }
        ]
      },
      {
        nombre: 'Moringa, Drumstick, Árbol de la vida, Árbol milagroso',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://i5.walmartimages.com/asr/504f5817-b9d2-41eb-b300-d8ef32e772e3.e4bac2ce6098ca967dbbb344553b606f.jpeg',
        descripcion: 'Árbol originario de las regiones subtropicales y tropicales, conocido por su alta densidad nutricional.',
        beneficios: 'Antiinflamatorio, antioxidante, controla el azúcar en sangre.',
        recetas: [
          {
            titulo: "Sopa de Moringa",
            descripcion: "Sopa saludable y nutritiva hecha con hojas frescas de Moringa.",
            ingredientes: "2 tazas de hojas de Moringa, 1 papa pequeña, 1 cebolla, 2 dientes de ajo, 4 tazas de caldo de pollo, Sal y pimienta al gusto",
            instrucciones: "Lava las hojas de Moringa. Cocina la papa, la cebolla y el ajo con el caldo. Agrega las hojas de Moringa y cocina por 5 minutos. Licúa todo hasta obtener una consistencia cremosa. Sazona con sal y pimienta."
          }
        ]
      },
      {
        nombre: 'Karanda, Caranda, Ciruela de Natal',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://apotekhidup.com/wp-content/uploads/2021/09/karanda-768x512.jpg',
        descripcion: 'Arbusto frutal originario de Asia tropical y subtropical, conocido por sus frutos ácidos y ricos en vitamina C.',
        beneficios: 'Mejora la digestión, protege contra radicales libres, tiene propiedades antifúngicas y antibacterianas, regula el azúcar en sangre y combate la anemia.',
        recetas: [
          {
            titulo: "Mermelada de Karanda",
            descripcion: "Mermelada dulce y ácida hecha con los frutos de Karanda.",
            ingredientes: "2 tazas de frutos de Karanda, 1 taza de azúcar, 1/4 taza de agua, Jugo de 1 limón",
            instrucciones: "Lava los frutos, cocina con agua a fuego lento hasta que estén suaves, agrega azúcar y jugo de limón, cocina hasta espesar."
          }
        ]
      },
      {
        nombre: 'Árbol Peepal, Árbol Bodhi, Árbol Sagrado',
        categoria: 'Medicinal y espiritual',
        imagen: 'https://m.media-amazon.com/images/I/71L9zQ2xhhL._AC_SL1500_.jpg',
        descripcion: 'Árbol caducifolio originario del subcontinente indio, venerado en varias tradiciones religiosas.',
        beneficios: 'Propiedades antiinflamatorias, ayuda a controlar la diabetes, alivia problemas respiratorios, desintoxica el cuerpo.',
        recetas: [
          {
            titulo: "Té de Hojas de Peepal",
            descripcion: "Un té relajante y desintoxicante preparado con hojas frescas del árbol Peepal.",
            ingredientes: "5 hojas frescas de Peepal, 2 tazas de agua, 1 cucharadita de miel (opcional)",
            instrucciones: "Lava las hojas, hiérvelas en agua durante 5-7 minutos, cuela el té y endulza al gusto."
          }
        ]
      },
      {
        nombre: 'Granada, Pomegranate',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://th.bing.com/th/id/R.18de255b89a3582dec5b38131a1b68bd?rik=oBJjTvqG%2bDo1YQ&pid=ImgRaw&r=0',
        descripcion: 'Árbol o arbusto de tamaño mediano, conocido por sus frutos ricos en antioxidantes.',
        beneficios: 'Propiedades antioxidantes, mejora la salud cardiovascular, alivia problemas gastrointestinales, combate infecciones.',
        recetas: [
          {
            titulo: "Jugo de Granada",
            descripcion: "Un jugo fresco y antioxidante preparado con semillas de granada.",
            ingredientes: "2 granadas grandes, 1 taza de agua fría, 1 cucharada de azúcar o miel (opcional)",
            instrucciones: "Extrae las semillas, licúa con agua fría, cuela el jugo, endulza si es necesario y sirve frío."
          }
        ]
      },
      {
        nombre: 'Jazmín, Jasmine',
        categoria: 'Medicinal y ornamental',
        imagen: 'https://th.bing.com/th/id/R.08604578e32fc3d51faf513cc71b2891?rik=f1IYzpLmDXxJww&pid=ImgRaw&r=0',
        descripcion: 'Planta trepadora o arbustiva conocida por sus flores fragantes y ornamentales.',
        beneficios: 'Calmante para el estrés, propiedades antisépticas, mejora la salud de la piel, alivia problemas digestivos.',
        recetas: [
          {
            titulo: "Té de Flores de Jazmín",
            descripcion: "Un té aromático y relajante preparado con flores de jazmín frescas o secas.",
            ingredientes: "2 cucharadas de flores de jazmín frescas o 1 cucharada de flores secas, 2 tazas de agua caliente, 1 cucharadita de miel (opcional).",
            instrucciones: "Coloca las flores en agua caliente, deja reposar durante 5 minutos, cuela el té y endulza al gusto."
          }
        ]
      },
      {
        nombre: 'Guayaba, Guava',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://th.bing.com/th/id/R.0beb5f2658be4d18c51c11955e1c5510?rik=jwbN3IF9HIG7Mw&riu=http%3a%2f%2fhidroponia.mx%2fwp-content%2fuploads%2f2017%2f11%2fcultivo-de-guayaba-en-M%c3%a9xico.jpg&ehk=SqIhNoGH41usZEgQ8RSZM6tmUHUaUdl3mXWaA2TWVqc%3d&risl=&pid=ImgRaw&r=0',
        descripcion: 'Árbol tropical perenne conocido por sus frutos dulces y aromáticos.',
        beneficios: 'Ayuda en problemas digestivos, fortalece el sistema inmunológico, regula el azúcar en sangre, mejora la salud de la piel.',
        recetas: [
          {
            titulo: "Jugo de Guayaba",
            descripcion: "Un jugo refrescante y nutritivo preparado con guayabas frescas.",
            ingredientes: "3 guayabas maduras, 2 tazas de agua fría, 1 cucharada de azúcar o miel (opcional), Hielo al gusto.",
            instrucciones: "Lava las guayabas, córtalas en trozos, licúa con agua, cuela el jugo si prefieres sin pulpa y endulza al gusto."
          }
        ]
      },
      {
        nombre: 'Neem, Margosa',
        categoria: 'Medicinal y agrícola',
        imagen: 'https://th.bing.com/th/id/R.45e07feb52bba86f6defa04c96cffcdb?rik=OyogIE6m28sRNA&pid=ImgRaw&r=0',
        descripcion: 'Árbol perenne originario del subcontinente indio y otras regiones tropicales, conocido por su valor medicinal, agrícola y ecológico.',
        beneficios: 'Propiedades antisépticas, desintoxicantes, controla la diabetes, mejora la salud dental y actúa como repelente natural.',
        recetas: [
          {
            titulo: "Té de Hojas de Neem",
            descripcion: "Un té desintoxicante y saludable preparado con hojas de Neem.",
            ingredientes: "10 hojas frescas de Neem, 2 tazas de agua, Miel (opcional para endulzar).",
            instrucciones: "Lava las hojas, hiérvelas en agua durante 5-7 minutos, cuela el té y endulza con miel si lo deseas."
          }
        ]
      },
      {
        nombre: 'Mango',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://th.bing.com/th/id/OIP.G5E2h2jvfrgncuCUQhM0WQHaFj?rs=1&pid=ImgDetMain',
        descripcion: 'Árbol tropical perenne conocido por sus frutos dulces y nutritivos.',
        beneficios: 'Rico en antioxidantes, mejora la digestión, refuerza el sistema inmunológico, cuida la piel y combate infecciones.',
        recetas: [
          {
            titulo: "Batido de Mango",
            descripcion: "Un batido cremoso y refrescante hecho con mangos maduros.",
            ingredientes: "1 mango grande maduro, 1 taza de leche fría (puede ser vegetal), 1 cucharada de azúcar o miel (opcional), Hielo al gusto.",
            instrucciones: "Pela el mango, corta en trozos, licúa con leche y endulzante, sirve frío."
          }
        ]
      },
      {
        nombre: 'Rasna, Galanga, Jengibre tailandés',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://www.planetayurveda.com/pa-wp-images/alpinia-galanga.jpg',
        descripcion: 'Planta perenne rizomatosa originaria del sudeste asiático.',
        beneficios: 'Alivia la indigestión, tiene propiedades antiinflamatorias, mejora la respiración, refuerza el sistema inmunológico y combate infecciones.',
        recetas: [
          {
            titulo: "Infusión de Rasna",
            descripcion: "Una infusión cálida y aromática hecha con rizomas frescos de Rasna.",
            ingredientes: "1 cucharada de rizomas frescos de Rasna rallados, 2 tazas de agua, 1 cucharadita de miel o azúcar (opcional).",
            instrucciones: "Hierve agua, agrega rizomas rallados, cocina a fuego lento 5-7 minutos, cuela y endulza al gusto."
          }
        ]
      },
      {
        nombre: 'Betel, Hoja de Betel',
        categoria: 'Medicinal y cultural',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Piper_betle_plant.jpg',
        descripcion: 'Planta trepadora perenne originaria del sudeste asiático, conocida por sus hojas aromáticas y su uso tradicional en la medicina.',
        beneficios: 'Estimula la digestión, previene infecciones, trata resfriados, alivia dolores musculares y protege contra el daño celular.',
        recetas: [
          {
            titulo: "Té de Hojas de Betel",
            descripcion: "Un té herbal con propiedades digestivas preparado con hojas frescas de Betel.",
            ingredientes: "5 hojas frescas de Betel, 2 tazas de agua, 1 cucharadita de miel o azúcar (opcional).",
            instrucciones: "Lava las hojas de Betel, hiérvelas en agua durante 5-7 minutos, cuela el té y endulza al gusto."
          }
        ]
      },
      {
        nombre: 'Yaca, Jackfruit',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://www.gtush.com/wp-content/uploads/2018/05/Yaca.jpg',
        descripcion: 'Árbol tropical perenne que produce uno de los frutos más grandes del mundo.',
        beneficios: 'Mejora la digestión, fortalece el sistema inmunológico, regula el azúcar en sangre, cuida la piel y combate infecciones.',
        recetas: [
          {
            titulo: "Curry de Yaca",
            descripcion: "Un delicioso curry vegetariano preparado con la pulpa de la yaca verde.",
            ingredientes: "2 tazas de pulpa de yaca verde (picada), 1 cebolla picada, 2 tomates picados, especias y leche de coco.",
            instrucciones: "Lava y pela la yaca, cocina con especias y leche de coco hasta obtener un curry cremoso."
          }
        ]
      },
      {
        nombre: 'Mostaza India, Indian Mustard',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://th.bing.com/th/id/R.ec65490ee46b8bc917b6dd22be5ef23b?rik=hkI%2f6UTofEun%2fg&riu=http%3a%2f%2fwww.eattheplanet.org%2fwp-content%2fuploads%2f2020%2f04%2fBrassicaceae_-_Sinapis_arvensis_3.jpg&ehk=Gn33zTz7d5UFWvyOX2d52xAxhT6DYl250y7gyoN5k%2bc%3d&risl=&pid=ImgRaw&r=0',
        descripcion: 'Planta anual originaria del sur de Asia, ampliamente cultivada por sus semillas, hojas y tallos.',
        beneficios: 'Estimula la digestión, reduce la inflamación, ayuda a desintoxicar el cuerpo, mejora la salud cardiovascular y combate infecciones.',
        recetas: [
          {
            titulo: "Sarson Ka Saag (Curry de Mostaza India)",
            descripcion: "Un curry tradicional del norte de la India preparado con hojas frescas de mostaza.",
            ingredientes: "2 tazas de hojas de mostaza fresca, especias, y leche de coco.",
            instrucciones: "Cocina las hojas, mezcla con especias y sirve con pan naan o arroz."
          }
        ]
      },
      {
        nombre: 'Crape Jasmine, Jazmín Pernoctante, Moonbeam',
        categoria: 'Medicinal y ornamental',
        imagen: 'https://www.richardlyonsnursery.com/wp-content/uploads/2022/05/Tabernaemontana-divaricata-Flore-Pleno-Crepe-Jasmine-scaled.jpg',
        descripcion: 'Arbusto perenne tropical con flores blancas en forma de molino de viento.',
        beneficios: 'Reduce la inflamación, cuida la piel, alivia problemas respiratorios, actúa como sedante y protege contra infecciones.',
        recetas: [
          {
            titulo: "Compresa Calmante de Crape Jasmine",
            descripcion: "Compresa tópica para reducir inflamaciones y aliviar dolores musculares.",
            ingredientes: "5 hojas frescas de Crape Jasmine, 2 tazas de agua.",
            instrucciones: "Hierve las hojas en agua, deja enfriar y aplica con un paño limpio."
          }
        ]
      },
      {
        nombre: 'Limón, Lemon',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://cdn.pixabay.com/photo/2016/01/04/21/23/lemon-1121636_1280.jpg',
        descripcion: 'Árbol frutal de tamaño pequeño a mediano, conocido por su fruto ácido y altamente aromático.',
        beneficios: 'Refuerza el sistema inmunológico, mejora la digestión, desintoxica el cuerpo, cuida la piel y protege contra infecciones.',
        recetas: [
          {
            titulo: "Limonada Clásica",
            descripcion: "Una bebida refrescante y rica en vitamina C, preparada con jugo de limón fresco.",
            ingredientes: "2 limones grandes, agua fría, azúcar o miel, hielo.",
            instrucciones: "Exprime los limones, mezcla con agua fría, endulza al gusto y sirve con hielo."
          }
        ]
      },
      {
        nombre: 'Manzana Rosa, Rose Apple',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://th.bing.com/th/id/OIP.JwmRBgbI2AdGm46xMYGcAAHaFj?w=1600&h=1200&rs=1&pid=ImgDetMain',
        descripcion: 'Árbol tropical perenne que produce frutos pequeños de forma ovalada con un aroma dulce.',
        beneficios: 'Mejora la digestión, combate infecciones, reduce la fiebre, protege contra el daño celular y alivia inflamaciones.',
        recetas: [
          {
            titulo: "Ensalada Fresca de Manzana Rosa",
            descripcion: "Una ensalada ligera y refrescante hecha con manzanas rosas y un toque cítrico.",
            ingredientes: "2 manzanas rosas, jugo de limón, hojas de menta, sal y pimienta.",
            instrucciones: "Corta las manzanas, mezcla con jugo de limón, menta y sazona al gusto."
          }
        ]
      },
      {
        nombre: 'Higuera Roxburgh, Roxburgh Fig, Higuerón',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://www.gtush.com/wp-content/uploads/2018/05/como-podar-una-higuera-1-768x463.jpg',
        descripcion: 'Árbol o arbusto tropical de tamaño mediano, conocido por sus frutos grandes y redondos.',
        beneficios: 'Mejora la digestión, protege el hígado, regula el azúcar en sangre, combate la inflamación y protege contra el daño oxidativo.',
        recetas: [
          {
            titulo: "Compota de Higos Roxburgh",
            descripcion: "Una compota dulce y saludable preparada con los frutos de la Higuera Roxburgh.",
            ingredientes: "Higos frescos, azúcar, canela y jugo de limón.",
            instrucciones: "Cocina los higos con azúcar y especias hasta que estén tiernos, agrega jugo de limón."
          }
        ]
      },
      {
        nombre: 'Árbol de Curry, Curry',
        categoria: 'Medicinal y culinaria',
        imagen: 'https://cdn.pixabay.com/photo/2022/10/24/13/01/chutney-7543355_1280.jpg',
        descripcion: 'Arbusto o árbol pequeño perenne originario del sur de Asia. Es conocido por sus hojas aromáticas.',
        beneficios: 'Controla la diabetes, mejora la digestión, protege contra el daño oxidativo, reduce la inflamación y fortalece el cabello.',
        recetas: [
          {
            titulo: "Pollo al Curry con Hojas de Curry",
            descripcion: "Un plato aromático y lleno de sabor preparado con hojas frescas del Árbol de Curry.",
            ingredientes: "500 g de pollo, hojas de curry, cebolla, tomate, especias.",
            instrucciones: "Sofríe las hojas de curry con cebolla y tomate, agrega el pollo y cocina con especias."
          }
        ]
      },
      {
        nombre: 'Rosa de China, Hibisco, Cayena',
        categoria: 'Medicinal y ornamental',
        imagen: 'https://okinawa-coffee.up.seesaa.net/image/07050220BCABC2F0C4EDA4CEA5CFA5A4A5D3A5B9A5ABA5B9.JPG',
        descripcion: 'Arbusto tropical con flores grandes y coloridas. Tiene aplicaciones en la medicina tradicional.',
        beneficios: 'Promueve el crecimiento del cabello, protege contra el envejecimiento celular, mejora la salud cardíaca.',
        recetas: [
          {
            titulo: "Té de Hibisco",
            descripcion: "Un té refrescante y saludable preparado con pétalos frescos de la Rosa de China.",
            ingredientes: "Pétalos frescos, agua caliente, miel o azúcar.",
            instrucciones: "Hierve los pétalos en agua, endulza al gusto y sirve caliente o frío."
          }
        ]
      },
      {
        nombre: 'Parijata, Árbol de Coral, Night Jasmine',
        categoria: 'Medicinal y ornamental',
        imagen: 'https://th.bing.com/th/id/OIP.fhKYqST7iL8HiQEu43YzrgAAAA?rs=1&pid=ImgDetMain',
        descripcion: 'Pequeño árbol conocido por sus flores fragantes que florecen por la noche.',
        beneficios: 'Reduce la inflamación, mejora la digestión, baja la fiebre, fortalece el sistema inmunológico.',
        recetas: [
          {
            titulo: "Infusión de Parijata",
            descripcion: "Una infusión medicinal preparada con hojas y flores de Parijata.",
            ingredientes: "Hojas y flores de Parijata, agua, miel (opcional).",
            instrucciones: "Hierve las hojas y flores en agua, endulza al gusto y sirve caliente."
          }
        ]
      },
      {
        nombre: 'Jamaica Cherry, Gasagase, Capulín de Jamaica',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://th.bing.com/th/id/R.4dd6df3472120d717c7327137cff6ccf?rik=rGqe57SvKxOh4Q&pid=ImgRaw&r=0',
        descripcion: 'Árbol de rápido crecimiento originario de América tropical, cultivado por sus frutos dulces y jugosos.',
        beneficios: 'Combate el daño celular, alivia el dolor, mejora la salud cardiovascular.',
        recetas: [
          {
            titulo: "Mermelada de Jamaica Cherry",
            descripcion: "Una mermelada dulce y casera preparada con los frutos de la Jamaica Cherry.",
            ingredientes: "Frutos de Jamaica Cherry, azúcar, jugo de limón, agua.",
            instrucciones: "Cocina los frutos con azúcar y agua hasta espesar, agrega jugo de limón."
          }
        ]
      },
      {
        nombre: 'Tulsi, Albahaca Sagrada, Holy Basil',
        categoria: 'Medicinal y espiritual',
        imagen: 'https://th.bing.com/th/id/OIP.-pQLOMMxAKX4DWk3zUhA4gHaEK?rs=1&pid=ImgDetMain',
        descripcion: 'Planta herbácea aromática perenne, conocida como planta sagrada en la cultura india.',
        beneficios: 'Fortalece el sistema inmunológico, combate el estrés, mejora la salud digestiva.',
        recetas: [
          {
            titulo: "Té de Tulsi",
            descripcion: "Un té herbal relajante y medicinal preparado con hojas frescas de Tulsi.",
            ingredientes: "Hojas frescas de Tulsi, agua, miel o limón (opcional).",
            instrucciones: "Hierve las hojas de Tulsi en agua, endulza al gusto y sirve caliente."
          }
        ]
      },
      {
        nombre: 'Sándalo, Sandalwood',
        categoria: 'Medicinal y espiritual',
        imagen: 'https://th.bing.com/th/id/R.e4ca42e9730de3915561eb9cf5495557?rik=Gmz%2fk2LIFfh1mQ&riu=http%3a%2f%2fmuyenforma.com%2fwp-content%2fuploads%2f2017%2f10%2fsandalo-planta-medicinal-propiedades.jpg&ehk=QNLkTAcvFigK4piVIrkqBDIWuqwMgFkOlmheawSjNgQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        descripcion: 'Árbol tropical perenne conocido por su madera aromática y propiedades relajantes.',
        beneficios: 'Alivia el estrés, mejora la calidad del sueño, protege la piel, combate infecciones.',
        recetas: [
          {
            titulo: "Máscara Facial de Sándalo",
            descripcion: "Una máscara facial rejuvenecedora y calmante preparada con polvo de sándalo.",
            ingredientes: "Polvo de sándalo, agua de rosas, miel (opcional).",
            instrucciones: "Mezcla los ingredientes en una pasta suave, aplica en el rostro y enjuaga tras 20 minutos."
          }
        ]
      },
      {
        nombre: 'Fenogreco, Fenugreek, Alholva',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://farmaciaribera.es/blog/wp-content/uploads/2020/02/beneficios-del-fenogreco-1024x680.jpg',
        descripcion: 'Planta herbácea anual utilizada en la cocina y la medicina tradicional por sus beneficios para la salud.',
        beneficios: 'Regula el azúcar en sangre, mejora la digestión, fortalece el cabello.',
        recetas: [
          {
            titulo: "Infusión de Fenogreco",
            descripcion: "Una infusión herbal rica en antioxidantes y propiedades digestivas.",
            ingredientes: "Semillas de fenogreco, agua, miel (opcional).",
            instrucciones: "Hierve las semillas de fenogreco en agua, cuela y endulza al gusto."
          }
        ]
      },
      {
        nombre: 'Menta Mexicana, Orégano Cubano, Orégano Indio, Hiedra Sueca',
        categoria: 'Medicinal y culinaria',
        imagen: 'https://th.bing.com/th/id/OIP.RlnuYTcy4GOZGWV9vjzaqgHaIP?rs=1&pid=ImgDetMain',
        descripcion: 'Planta herbácea perenne con hojas gruesas y aromáticas, utilizada como hierba culinaria y en la medicina tradicional.',
        beneficios: 'Alivia problemas digestivos, trata afecciones respiratorias, combate infecciones, mejora la salud de la piel y reduce el estrés.',
        recetas: [
            {
                titulo: "Infusión de Menta Mexicana",
                descripcion: "Una infusión refrescante y digestiva hecha con hojas frescas de Menta Mexicana.",
                ingredientes: "10 hojas frescas de Menta Mexicana, 2 tazas de agua caliente, 1 cucharadita de miel o azúcar (opcional).",
                instrucciones: "Lava las hojas cuidadosamente, colócalas en una tetera, añade agua caliente y deja reposar durante 5 minutos. Cuela y endulza al gusto."
            }
        ]
    },
    {
        nombre: 'Adelfa, Laurel de Flor, Oleander',
        categoria: 'Ornamental y medicinal (bajo estricto control)',
        imagen: 'https://th.bing.com/th/id/OIP.uGilJDPajH-ZT6BI_NtaHwHaHa?rs=1&pid=ImgDetMain',
        descripcion: 'Arbusto perenne ornamental con flores vistosas y fragantes. Aunque es tóxico, tiene usos controlados en la medicina tradicional.',
        beneficios: 'Propiedades antimicrobianas y antiinflamatorias, tratamiento de problemas cardíacos (bajo supervisión médica).',
        recetas: [
            {
                titulo: "Compresa Calmante de Adelfa",
                descripcion: "Compresa tópica para aliviar dolores musculares, preparada con hojas de Adelfa bajo estrictas precauciones.",
                ingredientes: "5 hojas frescas de Adelfa, 2 tazas de agua.",
                instrucciones: "Lava las hojas con guantes, hiérvelas en agua durante 10 minutos. Usa el líquido enfriado para empapar un paño y aplica en la zona afectada. No ingieras esta preparación."
            }
        ]
    },
    {
        nombre: 'Jamun, Jambul, Ciruela Negra, Java Plum',
        categoria: 'Medicinal y alimenticia',
        imagen: 'https://th.bing.com/th/id/R.97bb0cadedd4b6da76d4ee845942db46?rik=D%2fkfhhJRR9whVw&pid=ImgRaw&r=0',
        descripcion: 'Árbol tropical perenne conocido por sus frutos comestibles de color púrpura oscuro. Es valorado por sus propiedades medicinales.',
        beneficios: 'Ayuda a controlar la diabetes, mejora la digestión, fortalece el sistema inmunológico, cuida la salud bucal y reduce la inflamación.',
        recetas: [
            {
                titulo: "Jugo de Jamun",
                descripcion: "Un jugo refrescante y saludable preparado con frutas frescas de Jamun.",
                ingredientes: "2 tazas de frutos de Jamun frescos, 1 taza de agua fría, 1 cucharada de azúcar o miel (opcional), Pizca de sal negra (opcional).",
                instrucciones: "Lava los frutos, quita las semillas, licúa con agua fría. Cuela el jugo si lo prefieres sin pulpa, endulza al gusto y sirve frío."
            }
        ]
    },
    {
        nombre: 'Indian Beech, Pongamia, Karanja',
        categoria: 'Medicinal y sostenible (biocombustible)',
        imagen: 'https://th.bing.com/th/id/R.436e51cf4a3b9aa23ac67ee7d46ceef8?rik=J%2bw3nwZaFLPZnQ&pid=ImgRaw&r=0',
        descripcion: 'Árbol perenne nativo del sur de Asia. Es conocido por sus aplicaciones medicinales y el aceite extraído de sus semillas, usado en biocombustibles.',
        beneficios: 'Propiedades antisépticas, antiinflamatorias, analgésicas, mejora la digestión y protege el hígado.',
        recetas: [
            {
                titulo: "Aceite de Pongamia para Masajes",
                descripcion: "Aceite terapéutico preparado con semillas de Pongamia, utilizado para aliviar dolores musculares y articulares.",
                ingredientes: "1 taza de semillas de Pongamia, 1/2 taza de aceite de coco o sésamo.",
                instrucciones: "Tritura las semillas hasta formar una pasta, calienta el aceite con la pasta durante 10 minutos. Cuela y guarda en un recipiente limpio. Usa tibio para masajes."
            }
        ]
    }
    ];
    
  // Define una lista de plantas con sus datos, como nombre, categoría, imagen y detalles adicionales.

  // Filtrado de plantas por categoría y búsqueda
  const plantasFiltradas = plantas.filter((planta) =>
    (categoriaSeleccionada ? planta.categoria === categoriaSeleccionada : true) &&
    (searchTerm ? planta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );
  // Filtra las plantas según la categoría seleccionada y el término de búsqueda ingresado.

  // Funciones
  const seleccionarPlanta = (planta) => {
    setPlantaSeleccionada(planta);
    setImagenAmpliada(false); // Reinicia el estado de ampliación de la imagen.
  };
  // Maneja la selección de una planta para mostrarla en el modal.

  const cerrarModal = () => setPlantaSeleccionada(null);
  // Cierra el modal al establecer la planta seleccionada como null.

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  // Actualiza el estado del término de búsqueda según lo ingresado por el usuario.

  return (
    <div className="app">
      {/* Contenedor principal de la aplicación. */}
      
      <header className="header">
        {/* Encabezado de la aplicación. */}
        <div className="logo">
          <img src={logo} alt="Logo de Findervision" />
          {/* Muestra el logo de la aplicación. */}
        </div>
        <nav className="nav-links">
          <button onClick={(e) => e.preventDefault()}>Inicio</button>
          {/* Botón de navegación que no realiza ninguna acción en este caso. */}
        </nav>
        <div className="search">
          {/* Campo de búsqueda */}
          <input
            type="text"
            placeholder="Buscar plantas..."
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Campo de búsqueda"
          />
          <i className="fas fa-search" role="img" aria-label="Buscar"></i>
          {/* Icono de búsqueda */}
        </div>
        <div className="icons">
          <button onClick={(e) => e.preventDefault()}>Mi Cuenta</button>
          {/* Botón de cuenta de usuario, actualmente inactivo. */}
        </div>
      </header>

      <main className="main">
        {/* Área principal de la aplicación */}
        <Sidebar setCategoriaSeleccionada={setCategoriaSeleccionada} />
        {/* Componente Sidebar para seleccionar categorías */}
        <section className="content">
          <h1>Plantas Medicinales</h1>
          <ListaPlantas plantas={plantasFiltradas} seleccionarPlanta={seleccionarPlanta} />
          {/* Componente ListaPlantas para mostrar la lista de plantas filtradas */}
        </section>
      </main>

      {plantaSeleccionada && (
        <div className="modal">
          {/* Modal que aparece cuando se selecciona una planta */}
          <div className="modal-content">
            <span className="close" onClick={cerrarModal}>&times;</span>
            {/* Botón para cerrar el modal */}
            <h2>{plantaSeleccionada.nombre}</h2>
            <img
              src={plantaSeleccionada.imagen}
              alt={plantaSeleccionada.nombre}
              className={`modal-image ${imagenAmpliada ? 'ampliada' : ''}`}
              onClick={() => setImagenAmpliada(!imagenAmpliada)}
              // Alterna el estado para ampliar o reducir la imagen al hacer clic.
            />
            <p>
              <strong>Descripción:</strong> {plantaSeleccionada.descripcion}
              {/* Muestra la descripción de la planta. */}
            </p>
            <h3 className="section-title">Beneficios</h3>
            <p>{plantaSeleccionada.beneficios}</p>
            {/* Muestra los beneficios de la planta. */}
            <h3 className="section-title">Recetario</h3>
            <p>{plantaSeleccionada.recetario}</p>
            {/* Muestra el recetario para preparar la planta. */}
            <h3 className="section-title">Precauciones</h3>
            <p>{plantaSeleccionada.precauciones}</p>
            {/* Muestra las precauciones asociadas a la planta. */}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
// Exporta el componente para ser usado en otros archivos.