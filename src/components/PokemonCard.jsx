import React, { useEffect, useState } from 'react';
import axios from 'axios';
function PokemonCard( {pokemon}) {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
      const fetchPokemonDetails = async () => {
        try {
          const details = await axios.get(pokemon.url);
          setPokemonDetails(details.data);
          console.log('Pokemon Details:', details.data);
        } catch (error) {
          console.error('Error fetching Pokemon details:', error);
        }
      };
      fetchPokemonDetails();
    },[pokemon.url])

    if (!pokemonDetails) {
      return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title capitalize">{pokemon.name}</h2>
            <p>Loading...</p>
          </div>
        </div>
      );
    }

    return (
      <>
       <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <figure className="px-4 pt-4">
            <img 
              src={pokemonDetails.sprites.front_shiny} 
              alt={pokemon.name} 
              className="rounded-xl h-32 mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center p-4">
            <h2 className="card-title capitalize">{pokemon.name}</h2>
            <div className="flex gap-1">
              {pokemonDetails.types.map((type, index) => (
                <span key={index} className="badge badge-outline capitalize">
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
  
      </>
    )
  }
  
  export default PokemonCard