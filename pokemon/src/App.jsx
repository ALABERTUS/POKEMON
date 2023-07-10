import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        setPokemonData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemonData();
  }, []);

  return (
    <div>
      <h1>Pokemon Details</h1>
      {pokemonData.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          {/* Show other characteristics here */}
        </div>
      ))}
    </div>
  );
};

export default PokemonDetails;
