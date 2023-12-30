/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";

import PokemonList from "./pokemonList";
import SearchingForm from "./SearchingForm";

// const BaseUrl = "https://pokeapi.co/api/v2/pokemon/";

const App = () => {
  // const [pokeSearch, setPokeSearch] = useState("");
  // const [pokemonResult, sePokemonResult] = useState([]);

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
        const fetchedPokemons = await Promise.all(pokemonPromises);
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const fetching = async () => {
  //     const fetching = await fetch(`${BaseUrl}${pokeSearch}`);
  //     const data = await fetching.json();
  //     sePokemonResult(data);
  //   };
  //   fetching(pokeSearch);
  // };

  // if (error) return <div>Something went wrong !!!</div>;

  return (
    <div className="mainContainer">
      <h1>Fetching the Pokemon API : </h1>
      <div>
        {" "}
        <button onClick={previous}>Previous Pokemons !!!</button>
        <span>..........</span>
        <button onClick={next}>Next Pokemons !!!</button>
      </div>
      <SearchingForm />
      {/* {error ? <div>Something went wrong !!!</div> : null} */}
      {isLoading ? <h2>Loading...</h2> : <PokemonList pokemons={pokemons} />}) :
    </div>
  );
};

export default App;
