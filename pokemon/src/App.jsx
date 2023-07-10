import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        setPokemonData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemonData();
  }, []);
  const extractPokemonId = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };
  

  return (
    <div>
      <h1>Pokemon Details</h1>
      {pokemonData.map((pokemon) => (
        <div key={pokemon.name}>
          <h2>{pokemon.name}</h2>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${extractPokemonId(pokemon.url)}.png`} alt={pokemon.name} />
          <p>URL: {pokemon.url}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonDetails;

