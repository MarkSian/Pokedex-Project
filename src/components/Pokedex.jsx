import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard.jsx';
import PokemonFilter from './PokemonFilter.jsx';
// Fetch Pokemon Data
function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
    // Fetch Pokemon Data and display in the console.log
    useEffect(() => {
      const fetchPokemon = async () => {
        try {
            const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
            console.log('Data Fetched!:', data.data.results);
            setPokemonList(data.data.results);
        }   catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };
    fetchPokemon();
  }, []);

  // Filter Pokemon based on search term
  // useEffect(() => {
  //   const filtered = pokemonList.filter(pokemon => 
  //     pokemon.name.includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredPokemon(filtered);
  // }, [searchTerm, pokemonList]);
  
  useEffect(() => {
    try {
      const filtered = pokemonList.filter(pokemon => 
        pokemon.name.includes(searchTerm.toLowerCase())
      );
      console.log('Filtered Pokemon:', filtered);
      setFilteredPokemon(filtered);
    } catch (error) {
      console.error('Error filtering Pokemon:', error);
    }
  }, [searchTerm, pokemonList]);


    return (
      <>
        <div className="container mx-auto p-5">
          <h1 className="text-3xl font-bold text-center mb-5">Generation 1: Pokédex</h1>

          <PokemonFilter onSearchChange={setSearchTerm} />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredPokemon.map(pokemon => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </div>

      </>
    )
}
  
  export default Pokedex