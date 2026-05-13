// src/hooks/useCharacters.js
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/charactersService';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función asíncrona dentro del useEffect
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // Siempre se ejecuta, falle o no
      }
    };

    fetchCharacters();
  }, []); // El array vacío asegura que esto solo se ejecute al montar el componente

  return { characters, isLoading, error };
};