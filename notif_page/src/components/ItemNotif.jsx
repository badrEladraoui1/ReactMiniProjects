/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const ItemNotif = ({ notif, onMarkAsRead, notifications }) => {
  const [isRead, setIsRead] = useState(notif.read);

  const markAsReadAndChangeColor = () => {
    onMarkAsRead();
    setIsRead(true);
  };

  return (
    <div
      onClick={!isRead && markAsReadAndChangeColor}
      className={`notificationItem  ${isRead ? "witheBg" : "blueBg"}${
        notifications === 0 ? "whiteBg" : ""
      }`}
    >
      <div className="importantInfos">
        <div className="annoyingDivs">
          <img className="image" src={notif.img_prim}></img>
          <div className="mainInfos">
            <div className="specificInfos">
              <h3 className="name blueAndPointer">{notif.name}</h3>
              <p className="action">{notif.action}</p>
              {notif.onPost ? (
                <div className="notRead">
                  <span className="reason PostText blueAndPointer">
                    {notif.onPost}
                  </span>
                  {!isRead && (
                    <div
                      className={`redDot ${
                        notifications === 0 ? "noRedDot" : ""
                      }`}
                    ></div>
                  )}
                </div>
              ) : (
                <div className="notRead">
                  <span className="reason groupText blueAndPointer">
                    {notif.onGroup}
                  </span>
                  {!isRead && (
                    <div
                      className={`redDot ${
                        notifications === 0 ? "noRedDot" : ""
                      }`}
                    ></div>
                  )}
                </div>
              )}
            </div>
            <p>{notif.time}</p>
            {notif.msg && (
              <p className="privateMessage pOnHover">{notif.msg}</p>
            )}
          </div>
        </div>
        <div className="annoyingImage">
          {notif.img_sec && (
            <img className="image imageHelper" src={notif.img_sec}></img>
          )}
        </div>
      </div>
      <div className="time_msgInfos"></div>
    </div>
  );
};

export default ItemNotif;
