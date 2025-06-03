import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 text-lg font-medium hover:text-primary-500 py-2 px-3 ${
      isActive ? 'text-primary-500 font-bold' : 'text-white'
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary-800 shadow-lg py-2' : 'bg-secondary-800/80 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo className="h-12 w-auto" />
          <span className="ml-2 font-fredoka text-2xl font-bold text-white hidden sm:block">
            Bububurger
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses} end>
            Inicio
          </NavLink>
          <NavLink to="/menu" className={navLinkClasses}>
            Menú
          </NavLink>
          <NavLink to="/historia" className={navLinkClasses}>
            Historia
          </NavLink>
          <NavLink to="/franquicias" className={navLinkClasses}>
            Franquicias
          </NavLink>
          <NavLink to="/galeria" className={navLinkClasses}>
            Galería
          </NavLink>
          <NavLink to="/contacto" className={navLinkClasses}>
            Contacto
          </NavLink>
          <button className="ml-4 flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300">
            <ShoppingBag className="mr-2 h-5 w-5" />
            <span>Pedir</span>
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white hover:text-primary-500 transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-secondary-900 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-4 p-4">
          <NavLink to="/" className={navLinkClasses} onClick={closeMenu} end>
            Inicio
          </NavLink>
          <NavLink to="/menu" className={navLinkClasses} onClick={closeMenu}>
            Menú
          </NavLink>
          <NavLink to="/historia" className={navLinkClasses} onClick={closeMenu}>
            Historia
          </NavLink>
          <NavLink to="/franquicias" className={navLinkClasses} onClick={closeMenu}>
            Franquicias
          </NavLink>
          <NavLink to="/galeria" className={navLinkClasses} onClick={closeMenu}>
            Galería
          </NavLink>
          <NavLink to="/contacto" className={navLinkClasses} onClick={closeMenu}>
            Contacto
          </NavLink>
          <button className="mt-6 flex items-center bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            <ShoppingBag className="mr-2 h-5 w-5" />
            <span>Haz tu pedido</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;