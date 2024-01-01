/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import styles from "./NbrOfQuestions.module.css";

import Button from "../Button/Button";

const QUESTIONS = {
  questions5: 5,
  questions10: 10,
};

const SUGGESTIONS = {
  suggestion1: "I think you should go with 5",
  suggestion2: "I think you should go with 10",
};

const NbrOfQuestions = ({ onGetNbrOfQuestions }) => {
  const pickRandomSuggestion = () => {
    const keys = Object.keys(SUGGESTIONS);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    const randomSuggestion = SUGGESTIONS[randomKey];
    return randomSuggestion;
  };

  const randomPick = pickRandomSuggestion();

  return (
    <div className={`${styles.nbrOfQuestions} reuMargin`}>
      <div className={styles.nbrOfQuestionTexts}>
        <h1 className="bigText">How many Questions ?</h1>
        <h2 className="smallText">{randomPick}</h2>
      </div>
      <Link to="/quiz" className="link">
        <div className={styles.questionButtons}>
          <Button onClick={() => onGetNbrOfQuestions(QUESTIONS.questions5)}>
            {QUESTIONS.questions5}
          </Button>
          <Button onClick={() => onGetNbrOfQuestions(QUESTIONS.questions10)}>
            {QUESTIONS.questions10}
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default NbrOfQuestions;
