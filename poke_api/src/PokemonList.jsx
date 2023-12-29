/* eslint-disable react/prop-types */
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon.name}
            pokemonName={pokemon.name}
            pokemonWeight={pokemon.weight}
            image={pokemon.sprites.other.dream_world.front_default}
            height={pokemon.height}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
