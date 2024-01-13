import ItemNotif from "./ItemNotif";

import image_1 from "../assets/images/avatar-mark-webber.webp";
import image_2 from "../assets/images/avatar-angela-gray.webp";
import image_3 from "../assets/images/avatar-jacob-thompson.webp";
import image_4 from "../assets/images/avatar-rizky-hasanuddin.webp";
import image_5 from "../assets/images/avatar-kimberly-smith.webp";
import image_sec from "../assets/images/image-chess.webp";
import image_6 from "../assets/images/avatar-nathan-peterson.webp";
import image_7 from "../assets/images/avatar-anna-kim.webp";

const NOTIFS = [
  {
    id: 1,
    img_prim: image_1,
    name: "Mark Webber",
    action: "reacted to your recent post ",
    onPost: " My first tournament today!",
    onGroup: "",
    time: "1m ago",
    msg: null,
    img_sec: null,
    read: false,
  },
  {
    id: 2,
    img_prim: image_2,
    name: "Angela Gray",
    action: "followed you",
    onPost: null,
    onGroup: "",
    time: "5m ago",
    msg: null,
    img_sec: null,
    read: false,
  },
  {
    id: 3,
    img_prim: image_3,
    name: "Jacob Thompson",
    action: "has joined your group",
    onPost: null,
    onGroup: "Chess Club",
    time: "1 day ago",
    msg: null,
    img_sec: null,
    read: false,
  },
  {
    id: 4,
    img_prim: image_4,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    onPost: null,
    onGroup: "",
    time: "5 days ago",
    msg: "  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now andI'm already having lots of fun and improving my game.",
    img_sec: null,
    read: true,
  },
  {
    id: 5,
    img_prim: image_5,
    name: "Kimberly Smith",
    action: "commented on your picture",
    onPost: null,
    onGroup: "",
    time: "1 week ago",
    msg: null,
    img_sec: image_sec,
    read: true,
  },
  {
    id: 6,
    img_prim: image_6,
    name: "Nathan Peterson",
    action: "reacted to your recent post ",
    onPost: "5 end-game strategies to increase your win rate",
    onGroup: "",
    time: "2 weeks ago",
    msg: null,
    img_sec: null,
    read: true,
  },
  {
    id: 7,
    img_prim: image_7,
    name: "Anna Kim",
    action: "left the group Chess Club",
    onPost: null,
    onGroup: "Chess Club",
    time: "2 weeks ago",
    msg: null,
    img_sec: null,
    read: true,
  },
];

console.log(NOTIFS[0].id);

const Notifications = () => {
  return (
    <div className="notifications">
      {NOTIFS.map((notif) => (
        <ItemNotif key={notif.id} notif={notif} />
      ))}
    </div>
  );
};

export default Notifications;
