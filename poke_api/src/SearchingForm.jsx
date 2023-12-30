import { useState } from "react";

import PokemonSearched from "./PokemonSearched";

const SearchingForm = () => {
  const BaseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const [pokeSearch, setPokeSearch] = useState("");
  const [pokemonResult, sePokemonResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetching = async () => {
      const fetching = await fetch(`${BaseUrl}${pokeSearch}`);
      const data = await fetching.json();
      sePokemonResult(data);
    };
    fetching(pokeSearch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={pokeSearch}
        onChange={(e) => setPokeSearch(e.target.value)}
        type="text"
        placeholder="search for a pokemon"
      ></input>
      <span>....................</span>
      <button>search</button>
      <PokemonSearched
        pokemonResult={pokemonResult}
      />
    </form>
  );
};

export default SearchingForm;
