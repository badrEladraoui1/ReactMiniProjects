/* eslint-disable react/prop-types */
import styles from "./RatingNmbr.module.css";

const RatingNmbr = ({ number }) => {
  return <div className={styles.number}>{number}</div>;
};

export default RatingNmbr;
