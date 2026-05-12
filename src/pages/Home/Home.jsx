import { Link } from "react-router";
// 1. Importamos el hook de traducción
import { useTranslation } from "react-i18next";

export default function Home() {
  // 2. Extraemos la función 't'
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-primary p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Título de Referencia */}
        <div className="border-b-2 border-contrast pb-2">
          <h1 className="text-4xl font-black text-contrast tracking-tighter">
            {/* 3. Reemplazamos el texto fijo */}
            {t('home.title')}
          </h1>
        </div>

        {/* Grilla de Colores */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-primary border border-white/10 p-6 rounded-lg">
            <span className="text-white font-bold">{t('home.colors.primary')}</span>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-white/5">
            <span className="text-white font-bold">{t('home.colors.secondary')}</span>
          </div>
          <div className="bg-accent p-6 rounded-lg">
            <span className="text-primary font-bold">{t('home.colors.accent')}</span>
          </div>
          <div className="bg-contrast p-6 rounded-lg">
            <span className="text-primary font-bold">{t('home.colors.contrast')}</span>
          </div>
        </div>

        {/* Prueba de Componente (Card) */}
        <div className="bg-secondary border-l-4 border-accent p-8 rounded-r-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-contrast mb-2">
            {t('home.card.title')}
          </h2>
          <p className="text-white/70 mb-6">
            {t('home.card.description')}
          </p>

          {/* Enlaces de Navegación */}
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/characters`}
              className="bg-accent text-primary font-black px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(46,181,255,0.6)] transition-all uppercase text-sm"
            >
              {t('home.links.characters')}
            </Link>
            <Link
              to={`/character/id`}
              className="bg-accent text-primary font-black px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(46,181,255,0.6)] transition-all uppercase text-sm"
            >
              {t('home.links.charactersId')}
            </Link>
            <Link
              to={`/favorites`}
              className="bg-accent text-primary font-black px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(46,181,255,0.6)] transition-all uppercase text-sm"
            >
              {t('home.links.favorites')}
            </Link>
            <Link
              to={`/contact`}
              className="bg-accent text-primary font-black px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(46,181,255,0.6)] transition-all uppercase text-sm"
            >
              {t('home.links.contact')}
            </Link>
            <Link
              to={`/about`}
              className="bg-accent text-primary font-black px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(46,181,255,0.6)] transition-all uppercase text-sm"
            >
              {t('home.links.about')}
            </Link>
            <Link
              to={`/notFound`}
              className="bg-accent text-primary font-black px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(46,181,255,0.6)] transition-all uppercase text-sm"
            >
              {t('home.links.notFound')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}