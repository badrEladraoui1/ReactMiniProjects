/* eslint-disable react/prop-types */
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
