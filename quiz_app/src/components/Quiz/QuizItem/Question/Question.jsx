/* eslint-disable react/prop-types */

import styles from "./Question.module.css";

const Question = ({ question }) => {
  return (
    <div className={styles.question}>
      <h2>{question}</h2>
    </div>
  );
};

export default Question;
