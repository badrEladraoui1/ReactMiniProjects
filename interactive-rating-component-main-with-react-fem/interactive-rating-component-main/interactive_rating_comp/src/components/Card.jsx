/* eslint-disable react/prop-types */
import Ratings from "./Ratings";
import Submit from "./Submit";

const Card = ({ onHandleRating, onHandleSubmit }) => {
  return (
    <div className="card">
      <img style={{ width: "30px" }} src="../assets/images/icon-star.svg" />
      <div className="text">
        <h3>How did we do ?</h3>
        <p>
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
