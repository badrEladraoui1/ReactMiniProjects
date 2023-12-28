// import { useEffect } from "react";
// import { useState } from "react";

// import Pokemon from "./Pokemon";

// function App() {
//   // const BaseUrl = "https://pokeapi.co/api/v2";

//   const [allpokemons, setAllPokemons] = useState([]);
//   const [nextPageUrl, setNextPageUrl] = useState(
//     "https://pokeapi.co/api/v2/pokemon?limit=5"
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   // const [errorFetchPokemonData, setFetchPokemonData] = useState();
//   const [error, setError] = useState();

//   // commenting what i have understood ****( may be inaccurate)****

//   // a function that takes a url and fetch it then convert it to Json and return the
//   // json data else it console a message and returns null
//   //  (we want to use this for fetching any url)

//   const fetchPokemonData = async (url) => {
//     setIsLoading(true);
//     try {
//       const fetching = await fetch(url);
//       const data = await fetching.json();
//       return data;
//     } catch (error) {
//       console.log("error fetching data", error);
//       setError(true);
//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const fetchAllPokemons = async () => {
//       // using fetchPokemonData to fetch the pageUrl
//       const data = await fetchPokemonData(nextPageUrl);
//       console.log(data);
//       if (data) {
//         // setting the nextPageUrl state to the next page (ate first it would hold the first page)
//         // when we found the first page we want to set the nextpage to the second one
//         //(because in the json file we have a next property that contains the next pokemon)

//         // ****** i should know what does this actually do ******
//         // setNextPageUrl(data.next);

//         // i need to look up Promises i am not really familiar with them ,
//         // here i thinks we just retrieving all the details about all pokemons
//         // it gets all the urls for each pokemon in the results array and return it
//         // so i think the res would contain an array of urls for each pokemon
//         const pokemonDetails = await Promise.all(
//           data.results.map(async (pokemon) => {
//             const res = await fetchPokemonData(pokemon.url);
//             console.log(res);
//             return res;
//           })
//         );
//         //here we keeping the old array and adding the pokemonDetails
//         // (from what i have understood the allpokemons array hold the pokemonDetails)
//         setAllPokemons((prevPokemons) => [...prevPokemons, ...pokemonDetails]);
//       }
//     };
//     fetchAllPokemons();
//   }, []);

//   // const handleNextButtonPage = (data) => {
//   //   setNextPageUrl(data.next);
//   // };

//   // const loadMorePokemons = () => fetchAllPokemons();

//   if (error) return <h1>Something went wrong !!!</h1>;

//   return (
//     <div>
//       <h1>Fetching </h1>
//       <button>Next page</button>
//       <hr />
//       <ul>
//         {isLoading ? (
//           <h3>Loading ...</h3>
//         ) : (
//           allpokemons.map((pokemon, index) => {
//             console.log(pokemon);
//             return <Pokemon key={index} pokeName={pokemon.name} />;
//           })
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;
