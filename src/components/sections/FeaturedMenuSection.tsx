import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import MenuCard from '../ui/MenuCard';
import Button from '../ui/Button';
import Olimpica from '../../assets/comida/olimpica-burger.jpg';
import Costilla from '../../assets/comida/costilla.jpg';
import Alitas from '../../assets/comida/alitas.jpg';
import MalteadaFresa from '../../assets/comida/malteada-fresa.jpg';

const featuredItems = [
  {
    title: 'La Olímpica',
    description: 'Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla bañados en aderezo blue-cheese.',
    price: '$170',
    imageUrl: Olimpica,
    category: 'Bestseller'
  },
  {
    title: 'Malteada Fresa',
    description: 'Cremosa malteada de fresa, con helado de fresa y mermelada de fresa, con deliciosos toppings.',
    price: '$130',
    imageUrl: MalteadaFresa,
  },
  {
    title: 'Ari-Wings',
    description: 'Muchos presumen tener las mejores alitas... pero las nuestras sí lo demuestran. Están tan grandes que parecen piernitas de pollo, bien jugosas, bien bañadas y servidas con su lechuguita y un toque de ranch o blue cheese. Te retamos a que te comas solo una... ¡imposible!',
    price: '$220',
    imageUrl: Alitas,
  },
  {
    title: 'Costillas BBQ',
    description: 'Jugosas Grilled Baby Back Ribs de cerdo, bien barnizadas con tu wing sauce favorita, sobre cama de lechuga fresca.Vienen acompañadas de un elotito dulce con mantequilla y nuestros polvitos mágicos que le dan el toque especial.',
    price: '$315',
    imageUrl: Costilla,
    category: 'Perfecta'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FeaturedMenuSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nuestros Favoritos" 
          subtitle="Estos son los platillos más queridos por nuestros clientes. ¡Pruébalos y descubre por qué!"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button to="/menu" variant="primary" size="lg">
            Ver menú completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenuSection;