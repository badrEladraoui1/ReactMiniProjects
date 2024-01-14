/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

import Notifications from "./components/Notifications";

const App = () => {
  const [notifications, setNotifications] = useState(3);

  const markAsRead = () =>
    setNotifications((notifications) =>
      notifications > 0 ? notifications - 1 : notifications
    );

  const markAllAsRead = () => setNotifications(0);

  // const getNotifs = (number) => {
  //   setNotifications(number);
  // };

  return (
    <div className="bigContainer">
      <div className="notificationText">
        <div className="flexNotifs">
          <h1>Notifications</h1>
          <h3 className="howManyNotifs">{notifications}</h3>
        </div>
        <h4 onClick={markAllAsRead} className="MarkAllAsRead blueAndPointer">
          Mark all as read
        </h4>
      </div>
      <Notifications
        onMarkAsRead={markAsRead}
        notifications={notifications}
        // onGetNotifs={getNotifs}
      />
    </div>
  );
};

export default App;
