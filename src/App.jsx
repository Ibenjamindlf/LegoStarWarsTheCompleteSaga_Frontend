// src/App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import Favorites from './pages/Favorites/Favorites';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

// 2. (Opcional pero RECOMENDADO) Layout Base
// Esto te permite tener un Navbar y Footer fijos, y que solo cambie el contenido del medio.
const RootLayout = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* <Navbar /> */}
      <main className="p-4">
        <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
      </main>
      {/* <Footer />  */}
    </div>
  );
};

// 3. Configuración del Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // El contenedor principal
    errorElement: <NotFound />, // Captura errores de ruta a nivel global
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: 'characters', 
        element: <Characters /> 
      },
      { 
        path: 'character/:id', 
        element: <CharacterDetail /> // El :id captura el parámetro dinámico
      },
      { 
        path: 'favorites', 
        element: <Favorites /> 
      },
      { 
        path: 'contact', 
        element: <Contact /> 
      },
      { 
        path: 'about', 
        element: <About /> 
      },
      { 
        path: '*', 
        element: <NotFound /> // Captura cualquier URL inválida (404)
      },
    ],
  },
]);

// 4. Exportamos el proveedor
export default function App() {
  return <RouterProvider router={router} />;
}