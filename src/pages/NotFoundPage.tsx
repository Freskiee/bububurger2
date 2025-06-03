import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Página no encontrada | Bububurger';
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-fredoka font-bold text-secondary-800">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-fredoka font-bold text-primary-500 mt-4">
              ¡Ups! Esta hamburguesa no existe
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-64 h-64 mx-auto my-12"
          >
            {/* Burger illustration with elements "falling apart" */}
            <motion.div 
              className="absolute w-full h-24 bg-primary-300 rounded-t-full top-0"
              animate={{ 
                rotate: -5,
                x: -20,
                y: -10
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3
              }}
            />
            
            <motion.div 
              className="absolute w-[90%] h-6 bg-green-500 left-[5%] top-20"
              animate={{ 
                rotate: 7,
                x: 15,
                y: -5
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2.7,
                delay: 0.2
              }}
            />
            
            <motion.div 
              className="absolute w-[90%] h-16 bg-[#8B4513] left-[5%] top-24"
              animate={{ 
                rotate: -3,
                x: 10,
                y: 5
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3.5,
                delay: 0.4
              }}
            />
            
            <motion.div 
              className="absolute w-[85%] h-4 bg-yellow-400 left-[7.5%] top-38"
              animate={{ 
                rotate: 5,
                x: -15,
                y: 10
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3.2,
                delay: 0.6
              }}
            />
            
            <motion.div 
              className="absolute w-full h-16 bg-primary-200 rounded-b-2xl bottom-0"
              animate={{ 
                rotate: 3,
                x: 5,
                y: 15
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2.8,
                delay: 0.8
              }}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-secondary-600 mb-8 max-w-xl mx-auto"
          >
            Parece que la página que buscas se ha caído de nuestro menú. 
            ¿Por qué no regresas a nuestra página principal y pruebas una de nuestras deliciosas opciones?
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button to="/" variant="primary" size="lg">
              <Home className="mr-2 h-5 w-5" />
              Volver al inicio
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;