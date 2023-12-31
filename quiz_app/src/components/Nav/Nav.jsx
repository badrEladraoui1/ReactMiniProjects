import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/">About</Link>
      <Link className="link" to="/">Contact</Link>
    </div>
  );
};

export default Nav;
