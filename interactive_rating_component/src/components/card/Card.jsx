import styles from "./Card.module.css";

import RatingNmbr from "./ratingNmbr/RatingNmbr";
import Submit from "../sumbit/Submit";

const NUMBERS = [1, 2, 3, 4, 5];

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="../../assets/design/images/icon-star.svg" alt="star" />
      <h2>How did we do ?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles.numbers}>
        {NUMBERS.map((number) => (
          <RatingNmbr key={number} number={number} />
        ))}
        <Submit/>
      </div>
    </div>
  );
};

export default Card;
