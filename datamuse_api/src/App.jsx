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
  const [isNotEmpty, setIsNotEmpty] = useState(false);

  const searchedInput = (value) => {
    setInputPassed(value);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);
    const fetchingData = async () => {
      try {
        const response = await fetch(`${baseUrl}${inputPassed}`, { signal });
        const data = await response.json();

        const gettingWords = () => {
          if (data) {
            // setIsNotEmpty(true);
            const words = data.map((dataItem) => dataItem.word);
            if (words.length > 0) setIsNotEmpty(true);
            let SevenWords = [];
            for (let i = 0; i < 7; i++) {
              SevenWords.push(words[Math.floor(Math.random() * words.length)]);
            }
            setSynonyms(SevenWords);
          } else setIsNotEmpty(false);
        };
        gettingWords();
      } catch (e) {
        if (e.name === "AbortError") console.log("Aborted : ", e);
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchingData();

    return () => {
      // controller.abort();
    };
  }, [inputPassed]);

  if (error) return <h1>Something Went Wrong !!!</h1>;

  return (
    <div className="app">
      <h1>Search for any word</h1>
      <Form onSearchedInput={searchedInput} />
      {!isLoading ? (
        isNotEmpty ? (
          <Synonyms synonyms={synonyms} />
        ) : (
          <h1>No synonyms found :(</h1>
        )
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default App;
