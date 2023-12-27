import { useEffect } from "react";
import { useState } from "react";

function App() {
  const BaseUrl = "https://pokeapi.co/api/v2";

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    setIsLoading(true);
    const fetching = async () => {
      try {
        const fetched = await fetch(`${BaseUrl}/pokemon/?limit=20/`);
        const response = await fetched.json();
        setPokemons(response.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetching();
  }, []);

  if (error) return <h2>Something went wrong !!!</h2>;

  return (
    <div>
      <h1>Fetching Pokemon API</h1>
      <ul>
        {isLoading ? (
          <h3>Loading ...</h3>
        ) : (
          pokemons.map((pokemon) => (
            <div key={pokemon}>
              <button >{pokemon.name}</button>
              <li>{pokemon.url}</li>
              <br />
              <hr />
              <br />
            </div>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
