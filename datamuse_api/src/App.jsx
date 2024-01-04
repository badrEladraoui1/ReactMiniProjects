import { useEffect, useState } from "react";

import Form from "./components/Form";
import Synonyms from "./components/Synonyms";

const baseUrl = "https://api.datamuse.com/words?ml=";

const App = () => {
  // const [dataFetched, setDataFetched] = useState([]);
  const [inputPassed, setInputPassed] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isNotEmpty, setIsNotEmpty] = useState();

  const searchedInput = (value) => {
    setInputPassed(value);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchingData = async () => {
      try {
        const response = await fetch(`${baseUrl}${inputPassed}`);
        const data = await response.json();
        const gettingWords = () => {
          if (data) {
            setIsNotEmpty(true);
            const words = data.map((dataItem) => dataItem.word);
            let wordsFiveWords = [];
            for (let i = 0; i < 7; i++) {
              wordsFiveWords.push(
                words[Math.floor(Math.random() * words.length)]
              );
            }
            setSynonyms(wordsFiveWords);
          } else setIsNotEmpty(false);
        };
        gettingWords();
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchingData();
  }, [inputPassed]);

  if (error) return <h1>Loading...</h1>;

  return (
    <div className="app">
      <h1>Search for any word</h1>
      <Form onSearchedInput={searchedInput} />
      {isNotEmpty && !isLoading ? (
        <Synonyms synonyms={synonyms} />
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>No results found</h1>
      )}
    </div>
  );
};

export default App;
