// src/App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

// Importación de las páginas
import Home from './pages/Home/Home';
import { Characters } from './pages/Characters/Characters';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import Favorites from './pages/Favorites/Favorites';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

// Importación de tus nuevos componentes de Layout
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

// Layout Base
const RootLayout = () => {
  return (
    // Agregamos flex y flex-col para que el footer siempre quede abajo si hay poco contenido
    <div className="min-h-screen flex flex-col bg-primary text-white">
      
      {/* Nuestro nuevo Navbar Galáctico */}
      <Navbar />

      {/* Contenido dinámico de las rutas (con padding superior para el navbar fijo) */}
      <main className="flex-grow pt-24 pb-8 px-4 w-full max-w-7xl mx-auto">
        <Outlet /> 
      </main>
      
      {/* Nuestro nuevo Footer Galáctico */}
      <Footer />
      
    </div>
  );
};

// ... el resto de la configuración de tus rutas se mantiene igual

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