// Importar las dependencias necesarias de React
import React from 'react'; // Importa React para usar sus funcionalidades
import Categorias from './Categorias'; // Importa el componente Categorias

// Definición de un array de plantas, cada una con sus propiedades
const plantas = [
  {
    nombre: 'Flores', // Nombre de la planta
    descripcion: 'Una hermosa rosa roja.', // Descripción de la planta
    imagen: 'ruta/a/la/imagen.jpg', // Ruta a la imagen de la planta
    ingredientes: ['Agua', 'Sol'], // Ingredientes necesarios para el cuidado
    instrucciones: 'Regar diariamente.', // Instrucciones de riego
    beneficios: 'Mejora la estética del jardín.', // Beneficios de la planta
    precauciones: 'Evitar exceso de riego.', // Precauciones a tener en cuenta
    categoria: 'Antiinflamatorias' // Categoría a la que pertenece
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

// Componente funcional App que renderiza el catálogo de plantas
const App = () => {
  return (
    <div className="app-container">
      <Categorias plantas={plantas} /> {/* Pasa el array de plantas al componente Categorias */}
    </div>
  );
};

// Exportar el componente App para usarlo en otros archivos
export default App;
