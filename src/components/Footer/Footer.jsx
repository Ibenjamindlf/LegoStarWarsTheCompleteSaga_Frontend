import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  // 1. Actualizamos las rutas añadiendo 'home.' para que coincida con tu JSON anidado
  const footerLinks = [
    { name: t('home.nav.home', 'Inicio'), path: '/' },
    { name: t('home.nav.characters', 'Personajes'), path: '/characters' },
    { name: t('home.nav.favorites', 'Favoritos'), path: '/favorites' },
  ];

  return (
    <footer className="relative text-gray-300 py-12 overflow-hidden mt-auto border-t border-secondary">
      
      {/* 2. Fondo de Video Galáctico */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 mix-blend-screen"
      >
        {/* Vite busca los archivos estáticos en la carpeta public/ */}
        <source src="/galaxy-bg.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      {/* Overlay oscuro (Capa protectora para que el texto siga siendo legible sobre el video) */}
      <div className="absolute inset-0 bg-primary/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Navegación del Footer */}
        <div className="flex space-x-6 mb-8">
          {footerLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              // 3. Animación armónica igual a la del Navbar (azul + scale suave)
              className="text-sm transition-all duration-500 ease-out hover:text-accent hover:scale-105 hover:drop-shadow-[0_0_10px_var(--color-accent)]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-8 mb-8">
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 ease-out hover:text-accent hover:scale-110 hover:drop-shadow-[0_0_10px_var(--color-accent)]">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/Ibenjamindlf" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 ease-out hover:text-accent hover:scale-110 hover:drop-shadow-[0_0_10px_var(--color-accent)]">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="mailto:tu-mail@ejemplo.com" className="transition-all duration-500 ease-out hover:text-accent hover:scale-110 hover:drop-shadow-[0_0_10px_var(--color-accent)]">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>

{/* Copy y Créditos */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">
            &copy; {currentYear} {t('home.title', 'Lego Characters')}. {t('home.footer.developedBy', 'Desarrollado por')} Benjamín de la Fuente.
          </p>
          <p className="text-xs text-accent italic opacity-80 drop-shadow-[0_0_2px_var(--color-accent)]">
            {t('home.footer.forceQuote', '"Desarrollado con ayuda de la Fuerza"')}
          </p>
        </div>

      </div>
    </footer>
  );
};