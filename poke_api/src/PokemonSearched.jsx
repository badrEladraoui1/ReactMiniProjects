/* eslint-disable react/prop-types */
const PokemonSearched = ({ pokemonResult }) => {
  return (
    <div>
      <h2>{pokemonResult.name}</h2>
      <h2>{pokemonResult.weight}</h2>
      <img src={pokemonResult.sprites.other.dream_world.front_default} />
    </div>
  );
};

export default PokemonSearched;
