import { useState } from "react";
import "./App.css";

import Notifications from "./components/Notifications";

const App = () => {
  const [notifications, setnotifications] = useState(3);

  const getNotifNumber = (number) => setnotifications(number);

  return (
    <div className="bigContainer">
      <div className="notificationText">
        <div className="flexNotifs">
          <h1>Notifications</h1>
          <h3 className="howManyNotifs">{notifications}</h3>
        </div>
        <h4 className="MarkAllAsRead blueAndPointer">Mark all as read</h4>
      </div>
      <Notifications />
    </div>
  );
};

export default App;
