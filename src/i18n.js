import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 1. Importamos los archivos JSON 
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// 2. Definimos los recursos
const resources = {
  en: { translation: translationEN },
  es: { translation: translationES }
};

// 3. Inicializamos i18next
i18n
  .use(initReactI18next) // Conecta i18next con React
  .init({
    resources,
    lng: 'es', // Idioma inicial por defecto
    fallbackLng: 'en', // Idioma de respaldo si falta alguna traducción
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;