/* eslint-disable react/prop-types */

const Pokemon = ({ pokemonName, pokemonWeight, image, height }) => {
  return (
    <div>
      <hr />
      <h2>Name : {pokemonName}</h2>
      <img src={image}/>
      <h2>Weight : {pokemonWeight}</h2>
      <h2>Height : {height}</h2>
      <hr />
    </div>
  );
};

export default Pokemon;
