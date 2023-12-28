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

  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    setIsLoading(true);
    const fetchPokemons = async () => {
      try {
        const fetching = await fetch(currentPage, { signal });
        const response = await fetching.json();
        const results = response.results;

        const next = response.next;
        setNextPage(next);

        const previous = response.previous;
        setPrevPage(previous);

        setPokemons(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, [currentPage]);

  // console.log(pokemons);

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
      <span>.....;).....</span>
      <button onClick={next}>Next Pokemons !!!</button>
      {isLoading ? <h2>Loading...</h2> : <PokemonList pokemons={pokemons} />}
    </div>
  );
};

export default App;
