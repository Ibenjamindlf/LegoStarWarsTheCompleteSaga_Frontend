import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Actualizamos las rutas añadiendo 'home.' al principio para que coincida con tu JSON
  const navLinks = [
    { name: t('home.nav.home', 'Inicio'), path: '/' },
    { name: t('home.nav.characters', 'Personajes'), path: '/characters' },
    { name: t('home.nav.favorites', 'Favoritos'), path: '/favorites' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-primary/80 backdrop-blur-md border-b border-secondary/50 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Nombre del Proyecto */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <span className="text-2xl font-bold text-white tracking-wide transition-all duration-500 ease-out transform group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_var(--color-accent)]">
              {/* 2. Actualizamos la key del título a 'home.title' */}
              {t('home.title', 'Lego Characters')}
            </span>
          </Link>

          {/* Enlaces de Navegación (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                    isActive ? 'text-accent drop-shadow-[0_0_10px_var(--color-accent)]' : 'text-gray-300 hover:text-accent hover:drop-shadow-[0_0_10px_var(--color-accent)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Indicador estilo sable de luz */}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 shadow-[0_0_8px_var(--color-accent)] ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Toggle de Idioma */}
          <div className="flex items-center">
            <LanguageToggle />
          </div>

        </div>
      </div>
    </motion.header>
  );
};