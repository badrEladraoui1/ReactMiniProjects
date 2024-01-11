/* eslint-disable react/prop-types */
import Ratings from "./Ratings";
import Submit from "./Submit";
import svg from "../assets/images/icon-star.svg";

const Card = ({ onHandleRating, onHandleSubmit }) => {
  return (
    <div className="card">
      <img className="icon" src={svg} />
      <div className="text">
        <h3>How did we do ?</h3>
        <p className="para">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="ratingSubmit">
        <Ratings onHandleRating={onHandleRating} />
        <Submit onHandleSubmit={onHandleSubmit} />
      </div>
    </div>
  );
};

export default Card;
