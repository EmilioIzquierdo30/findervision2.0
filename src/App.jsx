// App.jsx
import React from 'react';
import Catalogo from './Catalogo';

const plantas = [
  {
    nombre: 'Árnica',
    descripcion: 'El árnica (Arnica montana) es una planta perenne conocida por sus flores amarillas y por sus propiedades medicinales. Tradicionalmente, se ha utilizado en medicina natural para tratar una variedad de afecciones, principalmente relacionadas con dolores musculares y heridas.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      'Alivio de dolores musculares y articulares: El árnica es popular en el tratamiento de dolores musculares, esguinces, torceduras y moretones. Es comúnmente usada por deportistas para reducir el dolor y la inflamación después de una actividad física intensa.',
      'Propiedades antiinflamatorias: Se utiliza para reducir la inflamación en áreas lesionadas o con hematomas, promoviendo la circulación sanguínea en la zona afectada y acelerando la curación.',
      'Alivio de golpes y contusiones: Aplicar árnica en forma de crema o gel puede ayudar a minimizar el dolor y la hinchazón después de un golpe, reduciendo la aparición de moretones.',
      'Tratamiento de la artritis: Las propiedades antiinflamatorias del árnica pueden ser beneficiosas para quienes sufren de artritis, ya que alivia el dolor articular y la rigidez.',
      'Cuidado postquirúrgico: En algunos casos, el árnica se utiliza para acelerar la recuperación de cirugías menores, reduciendo la inflamación y el dolor postoperatorio.'
      ],
    precausiones:[
      'Uso tópico únicamente: El árnica no debe ser ingerida, ya que puede ser tóxica si se consume en grandes cantidades. Sólo los preparados homeopáticos de árnica pueden tomarse por vía oral en dosis extremadamente diluidas.',
      'Reacciones alérgicas: Algunas personas pueden experimentar reacciones alérgicas o irritación en la piel tras su uso. Es recomendable probar una pequeña cantidad primero, especialmente si tienes piel sensible.',
      'No aplicar en heridas abiertas: El árnica no debe aplicarse sobre la piel dañada o heridas abiertas, ya que puede causar irritación o afectar negativamente el proceso de curación.',
      'Evitar durante el embarazo y la lactancia: No se recomienda su uso para mujeres embarazadas o en periodo de lactancia, ya que sus efectos no han sido completamente estudiados en estos casos.',
      'Interacciones con medicamentos: Si estás tomando medicamentos anticoagulantes, debes consultar a un médico antes de usar árnica, ya que podría aumentar el riesgo de hemorragias.',
    ],
    imagen: 'https://floresyunguentos.com/wp-content/uploads/2023/03/arnica_beneficios-1.jpg',
  },
  {
    nombre: 'Apazote',
    descripcion: 'El epazote (Dysphania ambrosioides), también conocido como paico o té de los Jesuitas, es una planta herbácea originaria de América Central y del Sur. Se ha utilizado tradicionalmente en la cocina y como planta medicinal debido a sus propiedades digestivas y antiparasitarias. Su uso es común en la gastronomía mexicana para sazonar ciertos platillos como frijoles y salsas.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      'Propiedades antiparasitarias: El epazote ha sido utilizado tradicionalmente como tratamiento natural para eliminar parásitos intestinales, como lombrices y amebas. El compuesto activo más importante en este contexto es el ascaridol.',
      'Alivio de problemas digestivos: Se emplea para reducir los gases intestinales, hinchazón y cólicos, especialmente cuando se consume con alimentos que tienden a ser flatulentos, como los frijoles.',
      'Tratamiento de infecciones: En la medicina tradicional, el epazote también se ha utilizado para tratar infecciones respiratorias leves, como tos y bronquitis, gracias a sus propiedades expectorantes.',
      'Propiedades antiinflamatorias: Se cree que el epazote puede ayudar a reducir inflamaciones internas y externas, lo que lo hace útil en casos de dolor muscular o artritis, aunque su eficacia en este aspecto no está bien documentada en estudios científicos.',
      'Uso culinario: En la gastronomía mexicana, el epazote es un ingrediente clave para mejorar el sabor de los platillos y evitar los malestares digestivos que algunos alimentos, como los frijoles, pueden causar.',
    ],
    precausiones:[
      'Toxicidad en altas dosis: Aunque el epazote tiene muchos beneficios, debe usarse con moderación, ya que el consumo de grandes cantidades de sus aceites esenciales, especialmente el ascaridol, puede ser tóxico. El consumo excesivo puede provocar efectos secundarios graves como náuseas, vómitos, dolores de cabeza, daño hepático y, en casos extremos, convulsiones.',
      'No recomendado para mujeres embarazadas: El epazote tiene efectos abortivos en dosis altas, por lo que no se recomienda su uso durante el embarazo o la lactancia.',
      'Evitar en niños pequeños: Debido a su potencial toxicidad, el epazote no debe administrarse a niños pequeños sin la orientación de un médico.',
      'Uso controlado en medicina: Si bien el epazote puede ser útil para eliminar parásitos, su uso medicinal debe hacerse bajo la supervisión de un profesional de la salud, ya que un mal manejo de la dosis puede tener efectos adversos.',
      'Reacciones alérgicas: Algunas personas pueden ser sensibles al epazote y pueden experimentar reacciones alérgicas, como erupciones en la piel o dificultades respiratorias.',
    ],
    imagen: 'https://www.quinfica.com/_uploads/productos/imgs/full/1071.jpg',
  },
  {
    nombre: 'Lavanda',
    descripcion: 'La lavanda (Lavandula angustifolia), también conocida como espliego, es una planta aromática muy valorada tanto por su fragancia agradable como por sus propiedades medicinales. Originaria de la región mediterránea, la lavanda se cultiva ampliamente para su uso en perfumería, cosmética, y medicina natural, donde se aprovechan principalmente sus flores y aceites esenciales.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      'Propiedades relajantes y ansiolíticas: Uno de los usos más conocidos de la lavanda es para reducir el estrés, la ansiedad y mejorar el estado de ánimo. El aroma de la lavanda tiene un efecto calmante sobre el sistema nervioso, y es común en aceites y esprays para inducir la relajación y mejorar el sueño.',
      'Mejora del sueño: El aceite esencial de lavanda es utilizado para tratar problemas de insomnio o trastornos del sueño. Inhalar su fragancia o aplicarla en las almohadas puede facilitar un sueño más profundo y reparador.',
      'Propiedades antiinflamatorias y analgésicas: La lavanda se ha utilizado para aliviar dolores musculares y articulares, así como para tratar inflamaciones leves, picaduras de insectos, quemaduras solares o pequeñas heridas. Se puede aplicar en forma de crema o aceite sobre las zonas afectadas.',
      'Cuidado de la piel: En la cosmética natural, el aceite de lavanda se emplea para tratar problemas de la piel, como el acné, irritaciones, eccemas o pequeñas quemaduras, debido a sus propiedades antisépticas y antiinflamatorias. También promueve la regeneración de la piel.',
      'Mejora de la digestión: Tradicionalmente, la lavanda se ha utilizado como té para aliviar problemas digestivos como gases, indigestión o dolores de estómago.',
      'Propiedades antimicrobianas: Los componentes del aceite esencial de lavanda pueden ayudar a combatir infecciones bacterianas y fúngicas, lo que lo convierte en un buen remedio casero para tratar pequeñas infecciones cutáneas.',
      'Aromaterapia: La lavanda es una de las plantas más populares en aromaterapia debido a sus efectos calmantes. Se utiliza en difusores y aceites esenciales para aliviar el estrés, mejorar el bienestar emocional y equilibrar el sistema nervioso.',  
    ],
    precausiones:[
      'Sensibilidad cutánea: Aunque la lavanda es generalmente segura para la mayoría de las personas, algunas pueden experimentar reacciones alérgicas o irritación de la piel. Es recomendable hacer una prueba de parche antes de aplicarla en grandes áreas de la piel.',
'Uso durante el embarazo: El aceite esencial de lavanda puede ser usado con moderación durante el embarazo, pero siempre es importante consultar con un médico antes de su uso para evitar posibles efectos adversos.',
'Evitar el consumo excesivo: La lavanda es segura en pequeñas cantidades, como en tés o para uso tópico. Sin embargo, ingerir grandes cantidades de aceite esencial puede ser tóxico, causando náuseas, vómitos o dolor abdominal.',
'Interacciones con medicamentos: La lavanda puede potenciar los efectos de los sedantes o medicamentos para dormir, por lo que las personas que tomen estos medicamentos deben usarla con precaución.',
'Uso en niños: Se recomienda consultar con un médico antes de usar aceite esencial de lavanda en bebés o niños pequeños, ya que algunos aceites esenciales pueden ser irritantes o afectar su sistema respiratorio.',
    ],
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F6kDMYnc25myjmhHg-bjnksK9G5Y2bp9WA&s',
  },
  {
    nombre: 'La Manzanilla',
    descripcion: 'La manzanilla (Matricaria chamomilla o Chamaemelum nobile), también conocida como camomila, es una planta herbácea con flores parecidas a las margaritas. Es muy valorada tanto en la medicina natural como en la cosmética, y se ha utilizado durante siglos por sus propiedades calmantes y curativas.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      'Propiedades calmantes y ansiolíticas: El té de manzanilla es famoso por sus efectos relajantes, ayudando a reducir la ansiedad y el estrés. Es un remedio casero común para mejorar el estado de ánimo y promover la tranquilidad.',
      'Mejora del sueño: La manzanilla es un remedio natural para el insomnio. Beber té de manzanilla antes de dormir puede inducir la relajación y ayudar a conciliar el sueño, gracias a su capacidad para calmar el sistema nervioso.',
      'Alivio de problemas digestivos: Es conocida por su efecto antiinflamatorio y calmante en el sistema digestivo. La manzanilla puede ayudar a aliviar la indigestión, el síndrome de intestino irritable, los gases, la diarrea y los cólicos.',
      'Propiedades antiinflamatorias y antioxidantes: Los compuestos de la manzanilla, como los flavonoides, ayudan a reducir la inflamación tanto interna como externa. Se usa para tratar afecciones de la piel como el eccema, irritaciones leves, quemaduras solares y heridas.',
      'Tratamiento de cólicos en bebés: La manzanilla es un remedio natural utilizado para calmar los cólicos en bebés, aunque se recomienda siempre consultar con un médico antes de su uso en lactantes.',
      'Propiedades antibacterianas: Los aceites esenciales de la manzanilla tienen propiedades antimicrobianas, lo que puede ayudar en la cicatrización de heridas y en la prevención de infecciones cutáneas.',
      'Alivio de dolores menstruales: La manzanilla se ha utilizado para aliviar los calambres menstruales, ya que actúa relajando los músculos del útero y reduciendo la inflamación.',
      'Cuidado de los ojos: Las compresas de té de manzanilla son un remedio tradicional para aliviar la irritación ocular, las infecciones leves como la conjuntivitis, y reducir la hinchazón de los ojos.',
      'Alivio de resfriados y afecciones respiratorias: Beber té de manzanilla o inhalar su vapor puede aliviar los síntomas de resfriados, gripes y congestión respiratoria debido a sus propiedades antiinflamatorias y relajantes.',  
    ],
    precausiones:[
      'Alergias: Las personas alérgicas a plantas de la familia de las Asteraceae (como ambrosía, crisantemos o caléndula) pueden experimentar reacciones alérgicas al usar manzanilla. Se recomienda hacer una prueba de parche antes de aplicar manzanilla tópicamente.',
      'Uso en el embarazo: Aunque el té de manzanilla es generalmente seguro en pequeñas cantidades, su uso debe ser moderado durante el embarazo. En grandes cantidades, podría tener efectos uterinos. Es importante consultar a un médico antes de consumirla.',
      'Interacción con medicamentos: La manzanilla puede interactuar con anticoagulantes, sedantes y otros medicamentos. Si estás tomando algún medicamento, consulta a un médico antes de usarla regularmente.',
      'Uso en bebés y niños pequeños: Aunque la manzanilla se utiliza para calmar a los bebés, especialmente en casos de cólicos, debe usarse con cuidado y bajo la recomendación de un pediatra, ya que algunos bebés pueden ser sensibles a sus compuestos.',
      'Exceso de consumo: Beber grandes cantidades de té de manzanilla puede causar náuseas o vómitos. Es mejor usarla con moderación.',
    ],
    imagen: 'https://www.ecoagricultor.com/wp-content/uploads/2017/05/plantar-manzanilla.png',
  },
  {
    nombre: 'Sábila',
    descripcion: 'La sábila o aloe vera (Aloe barbadensis miller) es una planta suculenta conocida por sus propiedades medicinales y su uso en productos de cuidado personal. Se ha utilizado durante siglos en diversas culturas para tratar una amplia variedad de afecciones, tanto de manera tópica como oral. La pulpa y el gel que se extraen de sus hojas contienen una rica mezcla de vitaminas, minerales, aminoácidos y antioxidantes que le otorgan sus beneficios terapéuticos.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      'Cuidado de la piel: El gel de aloe vera es ampliamente utilizado para tratar quemaduras, irritaciones, cortaduras y quemaduras solares. Tiene propiedades hidratantes, calmantes y regeneradoras, lo que lo hace ideal para aliviar la piel dañada y promover su cicatrización.',
      'Propiedades antiinflamatorias: El aloe vera tiene compuestos que ayudan a reducir la inflamación tanto interna como externa. Se utiliza para tratar afecciones cutáneas inflamatorias como el eccema, la psoriasis y el acné.',
      'Cicatrización de heridas: Gracias a su capacidad para aumentar la producción de colágeno, el aloe vera acelera la cicatrización de heridas y quemaduras leves, además de mejorar la elasticidad de la piel.',
      'Alivio de problemas digestivos: El consumo de gel de aloe vera en forma de jugo puede ayudar a calmar problemas digestivos como acidez, síndrome del intestino irritable y estreñimiento. Se cree que sus propiedades antiinflamatorias y desintoxicantes promueven una mejor digestión.',
      'Fortalecimiento del sistema inmunológico: El aloe vera contiene antioxidantes que ayudan a combatir los radicales libres en el cuerpo, apoyando la salud celular y fortaleciendo el sistema inmunológico.',
      'Propiedades laxantes: El látex de la sábila, que se encuentra justo debajo de la piel de la hoja, tiene un potente efecto laxante. Se usa en pequeñas cantidades para tratar el estreñimiento ocasional, aunque su uso debe ser moderado.',
      'Hidratación del cabello y el cuero cabelludo: El gel de aloe vera es un excelente humectante para el cabello seco y el cuero cabelludo irritado. También ayuda a reducir la caspa y promueve un cabello más fuerte y brillante.',
      'Reducción de los niveles de azúcar en sangre: Algunos estudios sugieren que el aloe vera puede ayudar a reducir los niveles de azúcar en sangre en personas con diabetes tipo 2 cuando se consume de manera oral, aunque se recomienda hacerlo bajo supervisión médica.',
      'Cuidado bucal: El aloe vera tiene propiedades antimicrobianas que lo hacen útil en la higiene bucal. Se emplea para tratar la gingivitis, las aftas bucales y otras infecciones, gracias a su capacidad para reducir la inflamación y combatir bacterias.',  
    ],
    precausiones:[
      'Consumo del látex de aloe: El látex de aloe vera, que tiene efectos laxantes, no debe ser consumido en grandes cantidades ni durante períodos prolongados, ya que puede causar diarrea, calambres abdominales, deshidratación y desequilibrios electrolíticos. El uso excesivo puede llevar a problemas más graves, como daño renal.',
      'Reacciones alérgicas: Algunas personas pueden ser alérgicas a los compuestos del aloe vera. Antes de aplicar el gel tópicamente, es recomendable hacer una prueba en una pequeña área de la piel para evitar reacciones adversas como erupciones o picazón.',
      'Interacción con medicamentos: El consumo de aloe vera puede interactuar con ciertos medicamentos, como diuréticos, laxantes y medicamentos para controlar el azúcar en la sangre. Si estás tomando algún medicamento, es recomendable consultar a un médico antes de consumir aloe vera.',
      'No recomendado durante el embarazo o la lactancia: El uso interno del látex de aloe vera no es seguro para mujeres embarazadas o lactantes, ya que puede inducir contracciones uterinas y provocar complicaciones. Se recomienda evitar su consumo en estas etapas.',
      'Uso moderado en niños: El aloe vera, especialmente el látex, no debe administrarse a niños pequeños sin supervisión médica debido a su potente efecto laxante y el riesgo de deshidratación.',
      'Problemas renales: El uso prolongado de productos que contienen látex de aloe vera puede causar daños renales o ser tóxico para personas con afecciones renales preexistentes.',  
    ],
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWDLPiYjP32olq2b_jTDgyYAV61rpxp9xpA&s',
  },
  ];

const App = () => {
  return (
    <div>
      <Catalogo plantas={plantas} />
    </div>
  );
};

export default App;