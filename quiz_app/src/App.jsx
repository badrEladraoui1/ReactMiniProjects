import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Welcome from "./components/Welcome/Welcome";
import Difficulty from "./components/Difficulty/Difficulty";
import NbrOfQuestions from "./components/NbrOfQuestions/NbrOfQuestions";
import Quiz from "./components/Quiz/Quiz";

const ApiKey = "HResLnCXoj5wuNqEDeBr9E61uRtvo6Fa0KlW3INy";
const BaseUrl = `https://quizapi.io/api/v1/questions?apiKey=${ApiKey}`;

const App = () => {
  const [categoryChosen, setCategoryChosen] = useState("");
  const [difficultyChosen, setDifficultyChosen] = useState("");
  const [nbrOfQuestionsChosen, setNbrOfQuestionsChosen] = useState("");

  const [dataFetched, setDataFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getCategory = (value) => {
    setCategoryChosen(value);
  };

  const getDifficulty = (value) => {
    setDifficultyChosen(value);
  };

  const getNbrOfQuestions = (value) => {
    setNbrOfQuestionsChosen(value);
  };

  // console.log("APP : ", categoryChosen);
  // console.log("APP : ", difficultyChosen);
  // console.log("APP : ", nbrOfQuestionsChosen);

  useEffect(() => {
    setIsLoading(true);

    const fetchingQuizzes = async () => {
      try {
        const response = await fetch(
          `${BaseUrl}
            &limit=${nbrOfQuestionsChosen}
            &category=${categoryChosen}
            &difficulty=${difficultyChosen}
          `
        );
        const data = await response.json();
        setDataFetched(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingQuizzes();
  }, [categoryChosen, difficultyChosen, nbrOfQuestionsChosen]);

  console.log(dataFetched);
  console.log("categoryChosen : ", categoryChosen);
  console.log("difficultyChosen : ", difficultyChosen);
  console.log("nbrOfQuestionsChosen : ", nbrOfQuestionsChosen);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Welcome onGetCategory={getCategory} />
          </Route>
          <Route exact path="/difficulty">
            <Difficulty onGetDifficulty={getDifficulty} />
          </Route>
          <Route exact path="/nbr_of_questions">
            <NbrOfQuestions onGetNbrOfQuestions={getNbrOfQuestions} />
          </Route>
          <Route exact path="/quiz">
            <Quiz dataFetched={dataFetched} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
