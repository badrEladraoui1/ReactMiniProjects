/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";

import PokemonList from "./pokemonList";
import SearchingForm from "./SearchingForm";
import Loading from "./Loading";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=9"
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
        console.log(error);
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

  return (
    <div className="mainContainer">
      <div className="abovePart">
        <h1 className="fetchingText">Fetching the PokéAPI </h1>
        <div className="buttonsAndForm">
          <SearchingForm />
          <div className="buttons">
            <button onClick={previous}>Previous Pokemons !!!</button>
            <button onClick={next}>Next Pokemons !!!</button>
          </div>
        </div>
      </div>
      {isLoading ? <Loading /> : <PokemonList pokemons={pokemons} />}
    </div>
  );
};

export default App;
