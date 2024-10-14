// App.jsx
import React from 'react';
import Categorias from './Categorias';

const plantas = [
  {
    nombre: 'Flores',
    descripcion: 'Una hermosa rosa roja.',
    imagen: 'ruta/a/la/imagen.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar diariamente.',
    beneficios: 'Mejora la estética del jardín.',
    precauciones: 'Evitar exceso de riego.',
    categoria: 'Antiinflamatorias'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Digestivas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Antimicrobianas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Relajantes'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Diuréticas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Analgésicas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Antioxidantes'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Adaptogénicas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Hepatoprotectoras'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Cardiotónicas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Inmunoestimulantes'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Cicatrizantes'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Antidiabéticas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Tónicas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Expectorantes'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Analgésticas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Antiespasmódicas'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Neuroprotectoras'
  },
  {
    nombre: 'Lavanda',
    descripcion: 'Lavanda aromática.',
    imagen: 'ruta/a/la/imagen2.jpg',
    ingredientes: ['Agua', 'Sol'],
    instrucciones: 'Regar moderadamente.',
    beneficios: 'Aroma relajante.',
    precauciones: 'No sobreexponer al sol.',
    categoria: 'Anticancerígenas'
  },
];

const App = () => {
  return (
    <div>
      <Categorias plantas={plantas} />
    </div>
  );
};

export default App;
