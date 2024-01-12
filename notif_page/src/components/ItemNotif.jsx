/* eslint-disable react/prop-types */

// import img from "../assets/images/image-chess.webp"

const ItemNotif = ({ notif }) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>{notif.name}</h1>
      <h2 style={{ color: "red" }}>{notif.action}</h2>
      <h3 style={{ color: "red" }}>{notif.time}</h3>
      <h4 style={{ color: "red" }}>{notif.msg}</h4>
      <img src={notif.img}></img>
      <hr />
    </div>
  );
};

export default ItemNotif;
