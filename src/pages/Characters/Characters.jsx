// src/pages/characters/characters.jsx
import React from 'react';
import { useCharacters } from '../../hooks/useCharacters';

export const Characters = () => {
  // Consumimos nuestro custom hook
  const { characters, isLoading, error } = useCharacters();

  // 1. Manejo del estado de Carga
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-bold">Cargando personajes desde una galaxia muy, muy lejana...</p>
      </div>
    );
  }

  // 2. Manejo de Errores
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>Ups... Ha ocurrido una perturbación en la Fuerza: {error}</p>
      </div>
    );
  }

  // 3. Renderizado exitoso de los datos
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Personajes de Lego Star Wars</h1>
      
      {/* Grilla responsiva usando TailwindCSS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-4">
        {characters.map((character) => (
          <div 
            key={character.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <img 
              src={character.image} 
              alt={`Imagen de ${character.name}`} 
              className="w-full h-48 object-cover bg-gray-100"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {character.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};