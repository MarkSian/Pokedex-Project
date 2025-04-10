import axios from 'axios';
import React, { useEffect, useState } from 'react';
// Fetch Pokemon Data
function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
    // Fetch Pokemon Data and display in the console.log
    useEffect(() => {
      const fetchPokemon = async () => {
        try {
            const data = await axios.get ("https://pokeapi.co/api/v2/pokemon?limit=151");
            console.log('Data Fetched!:', data.data.results);
            return data.data.results;
        }   catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };
    fetchPokemon();
  }, []);
      


    return (
      <>
        <div className="container mx-auto p-5">
          <h1 className="text-3xl font-bold text-center mb-5">Generation 1: Pokédex</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pokemonList.map(pokemon => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </div>

      </>
    )
}
  
  export default Pokedex