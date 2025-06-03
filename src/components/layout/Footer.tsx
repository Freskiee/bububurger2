import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Logo className="h-12 w-auto" />
              <span className="ml-2 font-fredoka text-2xl font-bold">Bububurger</span>
            </div>
            <p className="text-gray-300 mb-4">
              Donde el sabor, la calidad y la fiesta se juntan. ¡Cocinamos con amor, con fuego y con historia!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-fredoka font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Menú
                </Link>
              </li>
              <li>
                <Link to="/historia" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link to="/franquicias" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Franquicias
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-fredoka font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Miguel Ángel de Quevedo 123, Col. Chimalistac, CDMX
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-500 flex-shrink-0" />
                <a
                  href="tel:+525512345678"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  (55) 1234-5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-500 flex-shrink-0" />
                <a
                  href="mailto:hola@bububurger.com"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  hola@bububurger.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-fredoka font-bold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Lunes - Jueves:</span>
                <span className="text-gray-300">12:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Viernes - Sábado:</span>
                <span className="text-gray-300">12:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Domingo:</span>
                <span className="text-gray-300">13:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bububurger. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;