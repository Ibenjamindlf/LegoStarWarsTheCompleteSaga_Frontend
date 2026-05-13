// src/App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import { useTranslation } from 'react-i18next';

// Importación de las páginas
import Home from './pages/Home/Home';
import { Characters } from './pages/Characters/Characters';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import Favorites from './pages/Favorites/Favorites';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

// Layout Base (gestiona el i18n y la navegación estructural)
const RootLayout = () => {
  // Extraemos la función de traducción y el objeto i18n dentro del Layout
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma dinámicamente
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* 
        Simulamos un Navbar: 
        Aquí es donde deben ir los botones globales, ya que este Navbar 
        estará presente en todas las rutas hijas.
      */}
      <nav className="p-4 bg-gray-800 flex justify-between items-center">
        {/* Usamos una clave de traducción, con un valor por defecto opcional */}
        <h1 className="text-xl font-bold">{t('title', 'Lego Star Wars')}</h1>
        
        <div>
          <button 
            className="mr-4 px-2 py-1 bg-blue-600 rounded" 
            onClick={() => changeLanguage('es')}
          >
            Español
          </button>
          <button 
            className="px-2 py-1 bg-blue-600 rounded" 
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
        </div>
      </nav>

      {/* Contenido dinámico de las rutas */}
      <main className="p-4 flex-grow">
        <Outlet /> {/* se renderizaran Home, Characters, etc. */}
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

// Configuración del Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'characters', element: <Characters /> },
      { path: 'character/:id', element: <CharacterDetail /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

// Componente App (Punto de entrada limpio)
export default function App() {
  return <RouterProvider router={router} />;
}