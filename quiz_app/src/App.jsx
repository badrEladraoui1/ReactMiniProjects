import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Welcome from "./components/Welcome/Welcome";
import Difficulty from "./components/Difficulty/Difficulty";
import NbrOfQuestions from "./components/NbrOfQuestions/NbrOfQuestions";
import Quiz from "./components/Quiz/Quiz";

const App = () => {
  const [categoryChosen, setCategoryChosen] = useState("");
  const [difficultyChosen, setDifficultyChosen] = useState("");
  const [nbrOfQuestionsChosen, setNbrOfQuestionsChosen] = useState("");

  const getCategory = (value) => {
    setCategoryChosen(value);
  };

  const getDifficulty = (value) => {
    setDifficultyChosen(value);
  };

  const getNbrOfQuestions = (value) => {
    setNbrOfQuestionsChosen(value);
  };
  console.log("APP : ", categoryChosen);
  console.log("APP : ", difficultyChosen);
  console.log("APP : ", nbrOfQuestionsChosen);

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
            <Quiz />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
