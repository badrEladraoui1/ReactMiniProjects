/* eslint-disable react/prop-types */
const PokemonSearched = ({ pokemonResult, pokeSearch}) => {
  const pokemonAvailable =
    !!pokemonResult &&
    Object.keys(pokemonResult).length > 0 &&
    pokeSearch.length !== 0;

  //   const pokeSearchBool = pokeSearch.length === 0;

  return (
    <div>
      {pokemonAvailable ? (
        <div className="pokemonItem">
          <h2>Name: {pokemonResult.name}</h2>
          <img
            src={pokemonResult.sprites?.other?.dream_world?.front_default}
            alt="Pokemon-image"
          />
          <h2>Weight: {pokemonResult.weight}</h2>
          <h2>Height: {pokemonResult.height}</h2>
        </div>
      ) : (
        <p>no pokemon found.</p>
      )}
    </div>
  );
};

export default PokemonSearched;
