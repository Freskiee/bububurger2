import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, DollarSign, Clock, Users, BarChart } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const benefits = [
  {
    title: 'Receta Original',
    description: 'Acceso a nuestra receta secreta y técnicas de preparación exclusivas',
    icon: <DollarSign className="w-8 h-8 text-primary-500" />,
  },
  {
    title: 'Capacitación Completa',
    description: 'Entrenamiento exhaustivo para ti y tu equipo en todos los aspectos del negocio',
    icon: <Users className="w-8 h-8 text-primary-500" />,
  },
  {
    title: 'Sistema Probado',
    description: 'Un modelo de negocio establecido con procesos optimizados',
    icon: <BarChart className="w-8 h-8 text-primary-500" />,
  },
  {
    title: 'Tiempo de Recuperación',
    description: 'Recupera tu inversión en un periodo estimado de 12-18 meses',
    icon: <Clock className="w-8 h-8 text-primary-500" />,
  },
];

const steps = [
  'Contacto inicial y evaluación',
  'Revisión del plan de negocio',
  'Firma de contrato',
  'Capacitación intensiva',
  'Apertura de tu Bububurger'
];

const FranchisePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Franquicias | Bububurger';
  }, []);

  return (
    <div className="pt-20">
      {/* Franchise Hero */}
      <div className="bg-secondary-800 text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
              ¿Quieres abrir tu propia Bububurger?
            </h1>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Te damos nuestra receta, nuestro corazón y nuestra experiencia. Invertir en Bububurger 
              es invertir en sabor, comunidad y éxito.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                to="/contacto" 
                variant="primary"
                size="lg"
              >
                Solicitar información
              </Button>
              <Button 
                href="#"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-secondary-800"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Investment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Plan de Inversión" 
            subtitle="Una oportunidad de negocio con retorno comprobado"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-primary-500 text-white p-6">
                  <h3 className="text-2xl font-fredoka font-bold">
                    Inversión Inicial
                  </h3>
                  <p className="text-lg opacity-90">
                    Todo lo que necesitas para comenzar
                  </p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-secondary-800 mb-2">
                      $350,000 <span className="text-lg font-normal">MXN</span>
                    </div>
                    <p className="text-secondary-600">Inversión mínima estimada</p>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>Equipamiento completo de cocina</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>Decoración y mobiliario</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>Capacitación inicial</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>Sistema de gestión</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>Marketing de apertura</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-fredoka font-bold text-secondary-800 mb-4">
                Detalles Financieros
              </h3>
              
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-secondary-800">Cuota de Franquicia</h4>
                <p className="text-secondary-600 mb-4">
                  La cuota de franquicia es de <strong>$100,000 MXN</strong> y está incluida en la inversión inicial.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-xl font-bold mb-4 text-secondary-800">Regalías</h4>
                  <p className="text-secondary-600">
                    5% sobre ventas mensuales
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-secondary-800">Retorno de Inversión</h4>
                <p className="text-secondary-600 mb-4">
                  El tiempo estimado de recuperación de tu inversión es de <strong>12 a 18 meses</strong>, 
                  dependiendo de la ubicación y la gestión del negocio.
                </p>
                <p className="text-secondary-600">
                  Nuestras franquicias actuales han reportado un ROI promedio del 30% anual.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Beneficios de Nuestra Franquicia" 
            subtitle="¿Por qué elegir Bububurger para tu negocio?"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-primary-100">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="El Proceso" 
            subtitle="Cómo convertirte en parte de la familia Bububurger"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-primary-300 hidden md:block"></div>
              
              {/* Steps */}
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center mb-12 last:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-32 h-32 bg-primary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 flex-1">
                    <h3 className="text-xl font-bold text-secondary-800">{step}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button to="/contacto" variant="primary" size="lg">
              Comienza ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;