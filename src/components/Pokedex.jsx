import axios from 'axios';
import React, { useEffect } from 'react';
// Fetch Pokemon Data
function Pokedex() {
    // Fetch Pokemon Data and display in the console.log
    const fetchPokemon = async () => {
        try {
            const data = await axios.get ("https://pokeapi.co/api/v2/pokemon?limit=151");
            console.log('Data Fetched!:', data.data);
            return data.data;
        }   catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };
    
    // call the function to display the data in the console.log
    useEffect(() => {
        fetchPokemon();
    }, []);


    return (
      <>
        <h1>Pokedex</h1>
      </>
    )
}
  
  export default Pokedex