import { Link } from "react-router-dom";

import styles from "./Quiz.module.css"

const Quiz = () => {
  return (
    <div className={styles.quiz}>
      <Link className="link" to="/">
        <h1>Quiz(go back to IDK YET)</h1>
      </Link>
    </div>
  );
};

export default Quiz;
