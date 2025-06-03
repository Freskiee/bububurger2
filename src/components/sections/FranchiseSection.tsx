import React from 'react';
import { motion } from 'framer-motion';
import { Download, Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const benefits = [
  'Receta original Bububurger',
  'Capacitación completa',
  'Sistema de gestión probado',
  'Marketing y publicidad',
  'Soporte continuo',
  'Territorio exclusivo'
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const FranchiseSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-800 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Únete a la Familia Bububurger" 
          subtitle="¿Quieres abrir tu propia Bububurger? Te damos nuestra receta, nuestro corazón y nuestra experiencia."
          className="text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-fredoka font-bold text-primary-500 mb-6">
              Invertir en Bububurger es invertir en sabor, comunidad y éxito
            </h3>
            
            <div className="bg-secondary-700 rounded-xl p-6 shadow-lg mb-8">
              <h4 className="text-xl font-bold mb-4">Plan de negocio básico:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 text-primary-500 font-bold">•</span>
                  <span>Inversión inicial: Desde $350,000 MXN</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-500 font-bold">•</span>
                  <span>Tiempo de recuperación: 12–18 meses</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-500 font-bold">•</span>
                  <span>Capacitación total y acompañamiento</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-500 font-bold">•</span>
                  <span>Regalías: 5% sobre ventas</span>
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4">
              <Button 
                to="/contacto" 
                variant="primary"
              >
                Solicitar información
              </Button>
              <Button 
                href="#"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary-800"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar brochure
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-secondary-700 rounded-xl overflow-hidden shadow-lg">
              <div className="h-48">
                <img 
                  src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Bububurger restaurant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-primary-500">
                  Beneficios de nuestra franquicia
                </h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="mr-2 h-5 w-5 text-primary-500" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;