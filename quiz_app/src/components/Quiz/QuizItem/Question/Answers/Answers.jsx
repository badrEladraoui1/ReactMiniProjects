/* eslint-disable react/prop-types */

import { useId } from "react";
import Answer from "./Answer/Answer";

import styles from "./Answers.module.css";

const Answers = ({ answers }) => {
  // excluding the answers that are null in the json
  const keys = Object.keys(answers).filter((key) => answers[key] !== null);

  const id = useId();

  return (
    <div className={styles.answers}>
      {keys.map((key) => (
        <Answer key={id + key} answer={answers[key]} />
      ))}
    </div>
  );
};

export default Answers;
