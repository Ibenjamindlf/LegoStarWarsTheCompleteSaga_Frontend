// src/services/charactersService.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCharacters = async () => {
  try {
    // Hacemos la petición al endpoint de characters que creaste en MockAPI
    const response = await fetch(`${BASE_URL}/characters`);
    
    // Verificamos si la respuesta HTTP es exitosa (status 200-299)
    if (!response.ok) {
      throw new Error(`Error al obtener los personajes: ${response.statusText}`);
    }

    // Convertimos la respuesta a JSON
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error en el servicio de personajes:", error);
    // Relanzamos el error para que la interfaz sepa que algo falló
    throw error; 
  }
};