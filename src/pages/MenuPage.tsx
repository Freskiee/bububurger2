import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import MenuCard from '../components/ui/MenuCard';
import ChefCharacter from '../components/ui/ChefCharacter';
import Sensata from '../assets/comida/sensata.jpg';
import Doble from '../assets/comida/doble-queso-pina.jpg';
import Olimpica from '../assets/comida/olimpica-burger.jpg';
import Hawaiana from '../assets/comida/hawaiana.jpg';
import Bacon from '../assets/comida/bacon-doble.jpg';
import Crujipollo from '../assets/comida/crujipollo.jpg';
import Pepperoni from '../assets/comida/pepperoni-burger.png';
import Costra from '../assets/comida/costra-burgerr.png';
import HotDog from '../assets/comida/hot-dog-sencillo.jpg';
import Banderillas from '../assets/comida/banderillas.png';
import NotFoto from '../assets/images/not-image.png';
import AriWings from '../assets/comida/alitas.jpg';
import Boneless from '../assets/comida/boneless.jpg';
import DedosQueso from '../assets/comida/dedos-queso.jpg';
import Jalapenos from '../assets/comida/jalapeno-relleno.jpg';
import Nuggets from '../assets/comida/nuggets.jpg';
import ArosCebolla from '../assets/comida/aros-cebolla.jpg';
import Nachos from '../assets/comida/nachos.jpg';
import EloteAsado from  '../assets/comida/elote-asado.jpg';
import PapasCurly from '../assets/comida/papas-curly.jpg';
import PapasGajo from '../assets/comida/papas-gajo.jpg';
import PapasFrancesa from '../assets/comida/papas-francesa.jpg';
import Caripapas from '../assets/comida/caripapas.jpg';
import Costillas from '../assets/comida/costilla.jpg';
import PaqBubu from '../assets/comida/paquete-burger.jpg';
import PaqNug from '../assets/comida/paquete-nuggets.jpg';
import PaqHot from '../assets/comida/paquete-hot-dog.jpg';
import Refrescos from '../assets/comida/refrescos-todos.png';
import SangriaPreparada from '../assets/comida/sangria-preparada.jpg';
import Energizantes from '../assets/comida/energizantes.png';


// Menu categories and items
const menuCategories = [
  {
    id: 'hamburguesas',
    name: 'Bububurgers',
    items: [
      {
        title: 'La Sensata',
        description: '100 gr. De carne de res sazonada con la receta secreta de la casa. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.',
        imageUrl: Sensata,
      },
      {
        title: 'Doble Moral',
        description: 'Dos carnes de 100 gr. de res sazonadas con la receta secreta de la casa. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.',
        imageUrl: Doble,
      },
      {
        title: 'La Olímpica',
        description: 'Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla bañados en aderezo blue-cheese.',
        imageUrl: Olimpica,
      },
      {
        title: 'Tropical - Hawaiana',
        description: 'La inconfundible hamburguesa hawaiana con su deliciosa piña tropical, asada lentamente a la parrilla, jamón Virginia, queso manchego y su tocino bien frito a la plancha. ¡Esta Bububurger te hará bailar el Waikiki!',
        imageUrl: Hawaiana,
      },
      {
        title: 'Bacon Western',
        description: 'Esta hamburguesa te hará sentir en el viejo Oeste por su selecto tocino bien doradito, su queso manchego y un delicado toque de salsa BBQ. ¡Así que ponte las botas, el sombrero de cowboy y prepárate para bailar el Payaso de Rodeo… ajúa!',
        imageUrl: Bacon,
      },
      {
        title: 'Crujipollo',
        description: 'Para los fanáticos del pollo les tenemos esta maravillosa Bububurger de pollo extra crunchy, puedes pedirla al natural (Como dios la trajo al mundo) o bañadita en cualquiera de nuestras salsas de la casa, además viene con un toque de aderezo blue-cheese.',
        imageUrl: Crujipollo,
      },
      {
        title: 'Pepperoni Burger',
        description: 'La Bububurger molto Italiana! Fue especialmente diseñada para los amantes de las pipshas, te aseguramos que te hará recordar en cada bocado el rico sabor de una rebanada de pizza, lleva extra queso manchego, pepperoni y salsa italiana. buon appetito!',
        imageUrl: Pepperoni,
      },
      {
        title: 'La Costra Burger',
        description: 'Nuestra Bububurger consentida, es una delicia por su crujiente costra de queso con tocino frito y un toque de aderezo secreto, receta de la casa. Puedes pedirla sencilla o doble, y si te animas por la doble, te espera una doble costra de queso con tocino. ¡Crunchy, crunchy!',
        imageUrl: Costra,
      },
    ],
  },
  {
    id: 'hotdogs',
    name: 'Hot-Dogs Jumbo & Banderillas',
    items: [
      {
        title: 'Sencillito y Sin Rodeos',
        description: '35 cm. De salchicha de pavo, deliciosamente frita, acompañado de 70 gr. de papas a la francesa sazonadas con polvos mágicos, jitomate, cebolla, chiles picados, mostaza, mayonesa y catsup.  ¡Un deleite!',
        imageUrl: HotDog,
      },
      {
        title: 'Hot-Dog con Tocino',
        description: '35 cm. De salchicha de pavo, deliciosamente frita, acompañado de 70 gr. de papas a la francesa sazonadas con polvos mágicos, jitomate, cebolla, chiles picados, mostaza, mayonesa y catsup.  ¡Un deleite!',
        imageUrl: HotDog,
      },
      {
        title: 'Hot-Dog Hawaiano',
        description: '35 cm. De salchicha de pavo, deliciosamente frita, acompañado de 70 gr. de papas a la francesa sazonadas con polvos mágicos, jitomate, cebolla, chiles picados, mostaza, mayonesa y catsup.  ¡Un deleite!',
        imageUrl: HotDog,
      },
      {
        title: 'Hot-Dog Italiano',
        description: '35 cm. De salchicha de pavo, deliciosamente frita, acompañado de 70 gr. de papas a la francesa sazonadas con polvos mágicos, jitomate, cebolla, chiles picados, mostaza, mayonesa y catsup.  ¡Un deleite!',
        imageUrl: HotDog,
      },
      {
        title: 'Hot-Dog Salchicha de Res',
        description: 'Incididunt veniam pariatur pariatur cillum irure qui incididunt enim. Amet minim fugiat et enim. Laborum fugiat sunt id duis ea quis fugiat deserunt',
        imageUrl: NotFoto,
      },
      {
        title: 'Banderillas',
        description: 'Banderillas rellenas de queso manchego, acompañadas de una porción de papas a la francesa sazonadas con nuestros polvos mágicos.',
        imageUrl: Banderillas,
      },
    ],
  },
  {
    id: 'costillas',
    name: 'Costillas BBQ',
    items: [
      {
        title: 'Bububurger Style',
        description: '¡Llegaron las costillas que ni Thalía se imaginó! Jugosas Grilled Baby Back Ribs de cerdo, bien barnizadas con tu wing sauce favorita, sobre cama de lechuga fresca. Vienen acompañadas de un elotito dulce con mantequilla y nuestros polvitos mágicos que le dan el toque especial. ¿No ere de elote? Cámbialo por papitas sin costo. 😉',
        imageUrl: Costillas,
      },
    ],
  },
  {
    id: 'alitas',
    name: 'Ari-Wings & Boneless',
    items: [
      {
        title: 'Ari-Wings',
        description: 'Muchos presumen tener las mejores alitas... pero las nuestras sí lo demuestran. Están tan grandes que parecen piernitas de pollo, bien jugosas, bien bañadas y servidas con su lechuguita y un toque de ranch o bluecheese. 🔥 Te retamos a que te comas solo una... ¡imposible!',
        imageUrl: AriWings,
      },
      {
        title: 'Chicken Boneless',
        description: '¡Sin huesos, sin excusas! Nuestros Boneless son puro placer: pollo jugoso, crujiente por fuera, bañado en la salsa que más te prende. ¿Blue cheese o ranch? Tú mandas.💥 Advertencia: este manjar ha sido culpable de muchas lamidas de dedos… y de platos vacíos en segundos.',
        imageUrl: Boneless,
      },
    ],
  },
  {
    id: 'snacks',
    name: 'Entradas & Snacks',
    items: [
      {
        title: 'Bubu-Dedos de Queso',
        description: '6 Deditos de queso fritos por fuera con un toque delicado de especias y por dentro queso mozzarella derretido, acompañados con salsa tipo italiana. ¡Cuidado no te muerdas tus propios dedos, que te van a quedar cortos para pedir más! ',
        imageUrl: DedosQueso,
      },
      {
        title: 'Bubu-Chiles Rellenos',
        description: '6 Chiles jalapeños atrevidos rellenos de queso Philadelphia y empanizados por fuera, acompañados de Ketchup Heinz y queso amarillo tipo cheddar, ¡serán el remedio para tu antojo desenfrenado! ',
        imageUrl: Jalapenos,
      },
      {
        title: 'Bubu-Nuggets',
        description: 'Nuestros Nuggets de pechuga de pollo Pilgrim’s Pride (10 pzs), ¡Crujientes y dorados siempre! Acompañados de Kétchup Heinz y queso amarillo tipo Cheddar. ',
        imageUrl: Nuggets,
      },
      {
        title: 'Bubu-Aros de Cebolla',
        description: 'Perfectos aros de cebolla fritos y crujientes (10 pzs), acompañados con aderezo de blue cheese o ranch. ¡Te aseguramos que si los aros Olímpicos tuvieran sabor, a estos sabrían! ',
        imageUrl: ArosCebolla,
      },
      {
        title: 'Bubu-Nachos Chilibean',
        description: 'Crujientes nachos acompañados con una deliciosa mezcla de chili bean, a base de carne molida de res, frijoles, salsa italiana, servidos con rodajas de jalapeño y abundante queso amarillo tipo Cheddar. ¡Perfectos para compartir!',
        imageUrl: Nachos,
      },
      {
        title: 'Costillas de Elote Amarillo',
        description: 'Lorem Ipsum dolor sit amet, Incididunt veniam pariatur pariatur cillum irure qui incididunt enim. Amet minim fugiat et enim. Laborum fugiat sunt id duis ea quis fugiat deserunt',
        imageUrl: NotFoto,
      },
      {
        title: 'Elote Asado',
        description: 'Lorem Ipsum dolor sit amet, Incididunt veniam pariatur pariatur cillum irure qui incididunt enim. Amet minim fugiat et enim. Laborum fugiat sunt id duis ea quis fugiat deserunt',
        imageUrl: EloteAsado,
      },
    ],
  },
  {
    id: 'papas',
    name: 'Papas',
    items: [
      {
        title: 'Papas Curly',
        description: 'Deliciosas papas espiral delicadamente sazonadas y muy crujientes, acompañadas con Kétchup Heinz y queso amarillo tipo Cheddar.',
        imageUrl: PapasCurly,
      },
      {
        title: 'Papas Gajo',
        description: 'Grandiosas papas gajo en cortes de gran tamaño, doradas por fuera y suaves por dentro, acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar.',
        imageUrl: PapasGajo,
      },
      {
        title: 'Papas Francesas',
        description: 'Generosa porción de papas corte recto, calientitas y bien fritas; acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar. ¡Obviamente sazonadas con nuestros polvos mágicos!',
        imageUrl: PapasFrancesa,
      },
      {
        title: 'Cari-Papas',
        description: 'Simpáticas papas en forma de carita feliz esponjaditas, fritas y calientitas, acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar.',
        imageUrl: Caripapas,
      },
      {
        title: 'Papas Waffle',
        description: 'Pide estas bellezas de papas en forma de Waffle, crujientes y deliciosas, acompañadas con Kétchup Heinz y queso amarillo tipo Cheddar.',
        imageUrl: NotFoto,
      },
    ],
  },
  {
    id: 'menu-infantil',
    name: 'Menu Infantil',
    items: [
      {
        title: 'Paquete Bububurger',
        description: 'Deliciosa Bububurger sencilla con queso manchego + 5 divertidas papas carita feliz y una chaparrita.',
        imageUrl: PaqBubu,
      },
      {
        title: 'Paquete Nuggets',
        description: '5 Nuggets + 5 divertidas papas carita feliz y una chaparrita.',
        imageUrl: PaqNug,
      },
      {
        title: 'Paquete Hot-Dog',
        description: 'Hot Dog sencillo + 5 papas carita feliz y una chaparrita.',
        imageUrl: PaqHot,
      },
      {
        title: 'Paquete Deditos de Queso',
        description: '5 Dedos de queso mozzarella + 5 papas carita feliz y una chaparrita.',
        imageUrl: NotFoto,
      },
    ]
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    items: [
      {
        title: 'Nuestros Chescos',
        description: 'Coca-Cola, Coca sin azúcar, Coca Light, Fanta, Delaware Punch, Sidral Mundet, Mundet rojo, Sprite, Fresca, Sangría Señorial, Agua Mineral.',
        imageUrl: Refrescos,
      },
      {
        title: 'Bebidas Preparadas',
        description: 'Tehuacán preparado sal y limón, Sangría Señorial preparada chile, salsa y limón, Naranjada natural o mineral, Limonada natural o mineral',
        imageUrl: SangriaPreparada,
      },
      {
        title: 'Energy Drinks',
        description: 'Volt Guaraná, Volt Mora',
        imageUrl: Energizantes,
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
            <ChefCharacter action="cooking" className="w-45 h-40 mt-8 md:mt-0" />
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