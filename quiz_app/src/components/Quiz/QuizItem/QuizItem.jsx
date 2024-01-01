/* eslint-disable react/prop-types */
import Question from "./Question/Question";
import Answers from "./Question/Answers/Answers";
// import QuizElem from "../QuizElem/QuizElem";

import styles from "./QuizItem.module.css";

const ListOfQuestions = ({ dataFetched }) => {
  return (
    <div className={styles.quizItem}>
      {dataFetched.map((data) => (
        <div className={styles.questAnswers} key={data.id}>
          <Question question={data.question} />
          <Answers answers={data.answers}/>
        </div>
      ))}
    </div>
  );
};

export default ListOfQuestions;
