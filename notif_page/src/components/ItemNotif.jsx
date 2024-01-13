/* eslint-disable react/prop-types */

// import img from "../assets/images/image-chess.webp"

const ItemNotif = ({ notif }) => {
  return (
    <div className={`notificationItem ${!notif.read ? "blueBg" : ""}`}>
      <div className="importantInfos">
        <img className="image" src={notif.img_prim}></img>
        <div className="mainInfos">
          <div className="specificInfos">
            <h3 className="blueAndPointer">{notif.name}</h3>
            <p className="action">{notif.action}</p>
            {notif.onPost ? (
              <div className="notRead">
                <span className="reason PostText blueAndPointer">
                  {notif.onPost}
                </span>
                {!notif.read && <div className="redDot"></div>}
              </div>
            ) : (
              <div className="notRead">
                <span className="reason groupText blueAndPointer">
                  {notif.onGroup}
                </span>
                {!notif.read && <div className="redDot"></div>}
              </div>
            )}
          </div>
          <p>{notif.time}</p>
          {notif.msg && <p className="privateMessage pOnHover">{notif.msg}</p>}
        </div>
        {notif.img_sec && (
          <img className="image imageHelper" src={notif.img_sec}></img>
        )}
      </div>
      <div className="time_msgInfos"></div>
    </div>
  );
};

export default ItemNotif;
