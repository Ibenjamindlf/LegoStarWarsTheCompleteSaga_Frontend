import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  const isEnglish = i18n.language === 'en';

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-3 p-2 rounded-full bg-secondary border border-secondary hover:border-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label="Cambiar idioma"
    >
      {/* Texto de idioma estático para evitar el problema de emojis en Windows */}
      <span className="text-xs font-bold text-gray-300 w-6 text-center select-none">
        {isEnglish ? 'EN' : 'ES'}
      </span>

      {/* Contenedor del track: 48px de ancho total, con padding horizontal para contener el círculo */}
      <div className="flex items-center w-12 h-6 bg-primary rounded-full px-1">
        <motion.div
          className="w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_var(--color-accent)]"
          layout
          initial={false}
          animate={{
            // 18 px de movimiento exacto
            x: isEnglish ? 18 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>
    </button>
  );
};