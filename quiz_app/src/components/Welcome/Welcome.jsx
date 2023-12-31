/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import styles from "./Welcome.module.css";
import Button from "../Button/Button";

const Welcome = ({ onGetCategory }) => {
  const TOPICS = {
    Linux: "Linux",
    DevOps: "DevOps",
    Networking: "Networking",
    Cloud: "Cloud",
    Docker: "Docker",
    Kubernetes: "Kubernetes",
  };

  return (
    <div className={`${styles.welcome} reuMargin`}>
      <div className={styles.welcomeTexts}>
        <h1 className="bigText">Welcome to QuiziVerse</h1>
        <h3 className="smallText">What are you interested in ?</h3>
      </div>
      <Link className="link" to="/difficulty">
        <div className={styles.topics}>
          <Button onClick={() => onGetCategory(TOPICS.Linux)}>
            {TOPICS.Linux}
          </Button>
          <Button onClick={() => onGetCategory(TOPICS.DevOps)}>
            {TOPICS.DevOps}
          </Button>
          <Button onClick={() => onGetCategory(TOPICS.Networking)}>
            {TOPICS.Networking}
          </Button>
          <Button onClick={() => onGetCategory(TOPICS.Cloud)}>
            {TOPICS.Cloud}
          </Button>
          <Button onClick={() => onGetCategory(TOPICS.Docker)}>
            {TOPICS.Docker}
          </Button>
          <Button onClick={() => onGetCategory(TOPICS.Kubernetes)}>
            {TOPICS.Kubernetes}
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Welcome;
