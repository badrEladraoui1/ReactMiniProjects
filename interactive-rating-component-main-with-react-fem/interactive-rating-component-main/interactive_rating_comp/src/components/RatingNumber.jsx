import { useState } from "react";

/* eslint-disable react/prop-types */
const RatingNumber = ({ value, onHandleRating }) => {
  const [isActive, setIsActive] = useState(false);
  

  const both = () => {
    onHandleRating(value);
    setIsActive(!isActive);
  };

  return (
    <div className="ratingValueDiv">
      <button
        onClick={both}
        className={
          isActive
            ? "ratingValue addingOrangeToBg"
            : "ratingValue removingOrange"
        }
      >
        {value}
      </button>
    </div>
  );
};

export default RatingNumber;
