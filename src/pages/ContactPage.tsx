import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ChefCharacter from '../components/ui/ChefCharacter';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
  }>({
    submitted: false,
  });
  
  useEffect(() => {
    document.title = 'Contacto | Bububurger';
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Gracias por contactarnos! Te responderemos lo antes posible.'
    });
    // Reset form after success
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="pt-20">
      {/* Contact Hero */}
      <div className="bg-secondary-800 text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
                Contáctanos
              </h1>
              <p className="text-lg max-w-2xl">
                ¿Tienes alguna pregunta, sugerencia o quieres hacer una reservación? 
                Estamos aquí para ayudarte. ¡Ponte en contacto con nosotros!
              </p>
            </div>
            <ChefCharacter action="greeting" className="w-40 h-40 mt-8 md:mt-0" />
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Envíanos un mensaje" 
                centered={false}
              />
              
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                {formStatus.submitted && formStatus.success && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                    {formStatus.message}
                  </div>
                )}
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-secondary-700 font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-secondary-700 font-medium mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-secondary-700 font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-secondary-700 font-medium mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="reservacion">Reservación</option>
                    <option value="franquicia">Información de franquicia</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-secondary-700 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionTitle 
                title="Información de contacto" 
                centered={false}
              />
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-grill-pattern bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-secondary-800/70 flex items-center justify-center">
                    <h3 className="text-3xl font-fredoka font-bold text-white">
                      ¡Ven a visitarnos!
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="font-bold text-secondary-800">Dirección</h4>
                        <p className="text-secondary-600">
                          Miguel Ángel de Quevedo 123<br />
                          Col. Chimalistac, Álvaro Obregón<br />
                          Ciudad de México, 01070
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="font-bold text-secondary-800">Teléfono</h4>
                        <p className="text-secondary-600">
                          <a href="tel:+525512345678" className="hover:text-primary-500 transition-colors">
                            (55) 1234-5678
                          </a>
                        </p>
                        <p className="text-secondary-600 mt-1">
                          <a href="https://wa.me/5215512345678" className="hover:text-primary-500 transition-colors">
                            WhatsApp: (55) 1234-5678
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="font-bold text-secondary-800">Correo electrónico</h4>
                        <p className="text-secondary-600">
                          <a href="mailto:hola@bububurger.com" className="hover:text-primary-500 transition-colors">
                            hola@bububurger.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="font-bold text-secondary-800">Horario</h4>
                        <p className="text-secondary-600">
                          Lunes - Jueves: 12:00 - 22:00<br />
                          Viernes - Sábado: 12:00 - 00:00<br />
                          Domingo: 13:00 - 22:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Encuéntranos" 
            subtitle="Estamos ubicados en una zona céntrica y de fácil acceso"
          />
          
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <img 
              src="https://images.pexels.com/photos/2883509/pexels-photo-2883509.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Mapa de ubicación de Bububurger" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;