/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import QuizItem from "./QuizItem/QuizItem";

import styles from "./Quiz.module.css";

const Quiz = ({ dataFetched }) => {
  return (
    <div className={`${styles.quiz} reuMargin`}>
      <div className={styles.QuizHeaderTexts}>
        <h1 className="bigText">Let&apos;s Goo</h1>
        <h2 className="smallText">You better know all of them</h2>
      </div>
      <QuizItem dataFetched={dataFetched} />
    </div>
  );
};

export default Quiz;
