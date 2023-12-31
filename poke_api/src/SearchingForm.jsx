/* eslint-disable react/prop-types */
import { useState } from "react";

import PokemonSearched from "./PokemonSearched";

const SearchingForm = () => {
  const BaseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const [pokeSearch, setPokeSearch] = useState("");
  const [pokemonResult, sePokemonResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   onCheckPokemonIsSearched(pokeSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fetching = async () => {
      try {
        const fetching = await fetch(`${BaseUrl}${pokeSearch.toLowerCase()}`);
        const data = await fetching.json();
        sePokemonResult(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetching(pokeSearch);
    sePokemonResult([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputAndButton">
        <input
          value={pokeSearch}
          onChange={(e) => setPokeSearch(e.target.value)}
          type="text"
          placeholder="search for a pokemon ...."
        ></input>
        <button>search</button>
      </div>
      <PokemonSearched
        isLoading={isLoading}
        pokeSearch={pokeSearch}
        pokemonResult={pokemonResult}
      />
    </form>
  );
};

export default SearchingForm;
