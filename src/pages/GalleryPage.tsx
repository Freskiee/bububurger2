import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import GalleryImage from '../components/ui/GalleryImage';

// Gallery categories and images
const galleryCategories = [
  {
    id: 'comida',
    name: 'Nuestra Comida',
    images: [
      {
        src: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Hamburguesa clásica',
        caption: 'Nuestra hamburguesa clásica, la favorita de todos'
      },
      {
        src: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Hamburguesa con papas',
        caption: 'Combo perfecto: Hamburguesa y papas Bubu'
      },
      {
        src: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Alitas BBQ',
        caption: 'Nuestras famosas alitas BBQ'
      },
      {
        src: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Papas fritas',
        caption: 'Papas con nuestro sazón especial'
      },
      {
        src: 'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Hot dog',
        caption: 'Hot-dogs al estilo Bububurger'
      },
      {
        src: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Malteada',
        caption: 'Malteadas cremosas para el postre'
      },
    ]
  },
  {
    id: 'eventos',
    name: 'Eventos y Shows',
    images: [
      {
        src: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Noche de música',
        caption: 'Noche de música en vivo'
      },
      {
        src: 'https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Stand-up comedy',
        caption: 'Noche de stand-up comedy'
      },
      {
        src: 'https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Fiesta en Bububurger',
        caption: 'Celebrando con amigos'
      },
      {
        src: 'https://images.pexels.com/photos/7214247/pexels-photo-7214247.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'DJ night',
        caption: 'Noches de DJ en Bububurger'
      },
    ]
  },
  {
    id: 'local',
    name: 'Nuestro Local',
    images: [
      {
        src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Interior del restaurante',
        caption: 'Interior acogedor de Bububurger'
      },
      {
        src: 'https://images.pexels.com/photos/2874118/pexels-photo-2874118.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Barra del restaurante',
        caption: 'Nuestra barra lista para servirte'
      },
      {
        src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Cocina en acción',
        caption: 'La magia sucede en nuestra cocina'
      },
      {
        src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Terraza',
        caption: 'Terraza para disfrutar al aire libre'
      },
    ]
  },
  {
    id: 'clientes',
    name: 'Clientes Felices',
    images: [
      {
        src: 'https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Cliente disfrutando',
        caption: 'Momentos de felicidad en Bububurger'
      },
      {
        src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Amigos comiendo',
        caption: 'Compartiendo buenos momentos'
      },
      {
        src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Familia en Bububurger',
        caption: 'Bububurger es para toda la familia'
      },
      {
        src: 'https://images.pexels.com/photos/6155037/pexels-photo-6155037.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Festejando en Bububurger',
        caption: 'Celebrando ocasiones especiales'
      },
    ]
  }
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
    caption?: string;
  }>(null);
  
  useEffect(() => {
    document.title = 'Galería | Bububurger';
  }, []);
  
  return (
    <div className="pt-20">
      {/* Gallery Hero */}
      <div className="bg-primary-500 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
            Galería Bububurger
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Así se vive Bububurger: comida deliciosa, momentos inolvidables y mucha diversión.
            Explora nuestra galería y descubre la experiencia completa.
          </p>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="sticky top-16 bg-white shadow-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 mx-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        {galleryCategories.map((category) => (
          <div 
            key={category.id}
            className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
          >
            <SectionTitle 
              title={category.name} 
              subtitle="Haz clic en las imágenes para verlas en tamaño completo"
            />
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {category.images.map((image, index) => (
                <div 
                  key={index} 
                  className="h-64 md:h-80"
                  onClick={() => setSelectedImage(image)}
                >
                  <GalleryImage 
                    src={image.src} 
                    alt={image.alt} 
                    caption={image.caption}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            {selectedImage.caption && (
              <div className="text-white text-center mt-4 p-4 bg-black/50 rounded">
                <p className="text-lg">{selectedImage.caption}</p>
              </div>
            )}
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-primary-500 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;