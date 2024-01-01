/* eslint-disable react/prop-types */

import Button from "../../../../../Button/Button";
import styles from "./Answer.module.css";

const Answer = ({ answer }) => {
  return (
    <div className={styles.answer}>
      <Button>{answer}</Button>
    </div>
  );
};

export default Answer;
