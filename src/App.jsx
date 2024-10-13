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
      ''
      ],
    precausiones:[
      '',
    ],
    imagen: 'https://floresyunguentos.com/wp-content/uploads/2023/03/arnica_beneficios-1.jpg',
  },
  {
    nombre: 'Apazote',
    descripcion: 'El epazote (Dysphania ambrosioides), también conocido como paico o té de los Jesuitas, es una planta herbácea originaria de América Central y del Sur. Se ha utilizado tradicionalmente en la cocina y como planta medicinal debido a sus propiedades digestivas y antiparasitarias. Su uso es común en la gastronomía mexicana para sazonar ciertos platillos como frijoles y salsas.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      '',
    ],
    precausiones:[
      '',
    ],
    imagen: 'https://www.quinfica.com/_uploads/productos/imgs/full/1071.jpg',
  },
  {
    nombre: 'Lavanda',
    descripcion: 'La lavanda (Lavandula angustifolia), también conocida como espliego, es una planta aromática muy valorada tanto por su fragancia agradable como por sus propiedades medicinales. Originaria de la región mediterránea, la lavanda se cultiva ampliamente para su uso en perfumería, cosmética, y medicina natural, donde se aprovechan principalmente sus flores y aceites esenciales.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      '',  
    ],
    precausiones:[
      '',
    ],
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F6kDMYnc25myjmhHg-bjnksK9G5Y2bp9WA&s',
  },
  {
    nombre: 'La Manzanilla',
    descripcion: 'La manzanilla (Matricaria chamomilla o Chamaemelum nobile), también conocida como camomila, es una planta herbácea con flores parecidas a las margaritas. Es muy valorada tanto en la medicina natural como en la cosmética, y se ha utilizado durante siglos por sus propiedades calmantes y curativas.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      '',  
    ],
    precausiones:[
      '',
    ],
    imagen: 'https://www.ecoagricultor.com/wp-content/uploads/2017/05/plantar-manzanilla.png',
  },
  {
    nombre: 'Sábila',
    descripcion: 'La sábila o aloe vera (Aloe barbadensis miller) es una planta suculenta conocida por sus propiedades medicinales y su uso en productos de cuidado personal. Se ha utilizado durante siglos en diversas culturas para tratar una amplia variedad de afecciones, tanto de manera tópica como oral. La pulpa y el gel que se extraen de sus hojas contienen una rica mezcla de vitaminas, minerales, aminoácidos y antioxidantes que le otorgan sus beneficios terapéuticos.',
    ingredientes:'',
    instrucciones:'',
    beneficios:[
      '',  
    ],
    precausiones:['',  
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