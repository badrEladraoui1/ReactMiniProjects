/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";

import PokemonList from "./pokemonList";

// const BaseUrl = ;

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchPokemons = async () => {
      try {
        const fetching = await fetch(currentPage);
        const data = await fetching.json();

        const next = data.next;
        setNextPage(next);

        const previous = data.previous;
        setPrevPage(previous);

        const pokemonPromises = data.results.map(async (pokemon) => {
          const data = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          return data.json();
        });
        console.log("🚀 ~ file: App.jsx:37 ~ pokemonPromises ~ pokemonPromises:", pokemonPromises)

        const fetchedPokemons = await Promise.all(pokemonPromises);
        console.log("🚀 ~ file: App.jsx:40 ~ fetchPokemons ~ fetchedPokemons:", fetchedPokemons)
        setPokemons(fetchedPokemons);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, [currentPage]);

  const next = () => {
    setCurrentPage(nextPage);
  };

  const previous = () => {
    setCurrentPage(prevPage);
  };

  error ? <div>Something went wrong !!!</div> : null;

  return (
    <div>
      <h1>Fetching the Pokemon API : </h1>
      <button onClick={previous}>Previous Pokemons !!!</button>
      <span>..........</span>
      <button onClick={next}>Next Pokemons !!!</button>
      {isLoading ? <h2>Loading...</h2> : <PokemonList pokemons={pokemons} />}
    </div>
  );
};

export default App;
