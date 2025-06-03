import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import MenuCard from '../components/ui/MenuCard';
import ChefCharacter from '../components/ui/ChefCharacter';

// Menu categories and items
const menuCategories = [
  {
    id: 'hamburguesas',
    name: 'Hamburguesas al Carbón',
    items: [
      {
        title: 'Bubu Classic',
        description: 'Carne de res a la parrilla, queso cheddar, lechuga, tomate, cebolla y nuestra salsa especial',
        price: '$120',
        imageUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Doble Carne',
        description: 'Doble carne, doble queso, lechuga, tomate, cebolla y salsa especial',
        price: '$160',
        imageUrl: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'La Explosiva',
        description: 'Carne de res, queso, jalapeños, guacamole y salsa chipotle',
        price: '$150',
        imageUrl: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Hawaiana',
        description: 'Carne de res, queso, piña a la parrilla, tocino y salsa teriyaki',
        price: '$140',
        imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
  {
    id: 'hotdogs',
    name: 'Hot-Dogs & Banderillas',
    items: [
      {
        title: 'Hot-Dog Clásico',
        description: 'Salchicha de res, cebolla, tomate, mayonesa, mostaza y ketchup',
        price: '$70',
        imageUrl: 'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Hot-Dog Chili',
        description: 'Salchicha de res, chili con carne, queso y jalapeños',
        price: '$90',
        imageUrl: 'https://images.pexels.com/photos/4518658/pexels-photo-4518658.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Banderilla Sencilla',
        description: 'Salchicha, tocino y queso cheddar',
        price: '$60',
        imageUrl: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Banderilla Especial',
        description: 'Salchicha, tocino, queso, chiles toreados y salsa BBQ',
        price: '$80',
        imageUrl: 'https://images.pexels.com/photos/3926133/pexels-photo-3926133.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
  {
    id: 'alitas',
    name: 'Alitas y Boneless',
    items: [
      {
        title: 'Alitas BBQ',
        description: '10 piezas de alitas bañadas en nuestra salsa BBQ casera',
        price: '$140',
        imageUrl: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Alitas Buffalo',
        description: '10 piezas de alitas bañadas en salsa buffalo picante',
        price: '$140',
        imageUrl: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Boneless BBQ',
        description: 'Trozos de pechuga de pollo empanizados con salsa BBQ',
        price: '$130',
        imageUrl: 'https://images.pexels.com/photos/5718073/pexels-photo-5718073.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Boneless Buffalo',
        description: 'Trozos de pechuga de pollo empanizados con salsa buffalo picante',
        price: '$130',
        imageUrl: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
  {
    id: 'snacks',
    name: 'Snacks',
    items: [
      {
        title: 'Papas Bubu',
        description: 'Papas fritas con nuestro sazón especial',
        price: '$60',
        imageUrl: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Aros de Cebolla',
        description: 'Crujientes aros de cebolla empanizados',
        price: '$70',
        imageUrl: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Nachos con Queso',
        description: 'Totopos con queso derretido, guacamole, pico de gallo y crema',
        price: '$90',
        imageUrl: 'https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Nachos Supremos',
        description: 'Totopos con carne, queso, guacamole, jalapeños, pico de gallo y crema',
        price: '$120',
        imageUrl: 'https://images.pexels.com/photos/13998616/pexels-photo-13998616.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    items: [
      {
        title: 'Malteada Oreo',
        description: 'Cremosa malteada de vainilla con galletas Oreo',
        price: '$65',
        imageUrl: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Limonada',
        description: 'Refrescante limonada natural con menta',
        price: '$45',
        imageUrl: 'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Cerveza Nacional',
        description: 'Botella de cerveza nacional',
        price: '$50',
        imageUrl: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Refresco',
        description: 'Vaso grande de refresco de tu elección',
        price: '$35',
        imageUrl: 'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
  {
    id: 'postres',
    name: 'Postres',
    items: [
      {
        title: 'Brownie con Helado',
        description: 'Brownie caliente con helado de vainilla y salsa de chocolate',
        price: '$80',
        imageUrl: 'https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Flan Casero',
        description: 'Delicioso flan napolitano con caramelo',
        price: '$60',
        imageUrl: 'https://images.pexels.com/photos/7107513/pexels-photo-7107513.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Pastel de Chocolate',
        description: 'Rebanada de pastel de chocolate con ganache',
        price: '$70',
        imageUrl: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Helado Surtido',
        description: 'Tres bolas de helado a elegir: vainilla, chocolate, fresa o menta',
        price: '$50',
        imageUrl: 'https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
];

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  
  useEffect(() => {
    document.title = 'Menú | Bububurger';
    
    // Scroll to category if URL has hash
    const hash = window.location.hash.replace('#', '');
    if (hash && menuCategories.some(cat => cat.id === hash)) {
      setActiveCategory(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  
  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      {/* Menu Hero */}
      <div className="bg-secondary-800 text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
                Nuestro Menú
              </h1>
              <p className="text-lg max-w-2xl">
                Descubre nuestra variedad de hamburguesas al carbón, snacks, bebidas y mucho más. 
                Todo preparado con ingredientes frescos y nuestras recetas originales.
              </p>
            </div>
            <ChefCharacter action="cooking" className="w-40 h-40 mt-8 md:mt-0" />
          </div>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="sticky top-16 bg-white shadow-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
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
      
      {/* Menu Categories */}
      <div className="container mx-auto px-4 py-12">
        {menuCategories.map((category) => (
          <div 
            key={category.id} 
            id={category.id} 
            className="mb-16 scroll-mt-32"
          >
            <SectionTitle 
              title={category.name} 
              centered={false}
            />
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {category.items.map((item, index) => (
                <MenuCard key={index} {...item} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;