/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import styles from "./Difficulty.module.css";
import Button from "../Button/Button";

const SUGGESTIONS = {
  suggestion1: "I think you should chose the easy mode",
  suggestion2: "I think you should chose the medium mode",
  suggestion3: "I think you should chose the hard mode",
};

const DIFFICULTIES = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

// console.log("suggestion", SUGGESTIONS["suggestion1"]);
// console.log("suggestion2 : ", SUGGESTIONS.suggestion1);

const Difficulty = ({ onGetDifficulty }) => {
  const getRandomSuggestion = () => {
    const keys = Object.keys(SUGGESTIONS);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    const randomSuggestion = SUGGESTIONS[randomKey];
    return randomSuggestion;
  };

  const randomSuggestion = getRandomSuggestion();
  // console.log("randomSuggestion : ", randomSuggestion);

  return (
    <div className={`${styles.difficulty} reuMargin`}>
      <div className={styles.difficultyTexts}>
        <h1 className="bigText">Chose a difficulty for your Quiz</h1>
        <h3 className="smallText">{randomSuggestion}</h3>
      </div>
      <Link to="/nbr_of_questions" className="link">
        <div className={styles.difficulties}>
          <Button onClick={() => onGetDifficulty(DIFFICULTIES.easy)}>
            {DIFFICULTIES.easy}
          </Button>
          <Button onClick={() => onGetDifficulty(DIFFICULTIES.medium)}>
            {DIFFICULTIES.medium}
          </Button>
          <Button onClick={() => onGetDifficulty(DIFFICULTIES.hard)}>
            {DIFFICULTIES.hard}
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Difficulty;
