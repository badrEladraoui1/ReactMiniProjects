/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.reuButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
