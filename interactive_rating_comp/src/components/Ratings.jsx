import { useState } from "react";

/* eslint-disable react/prop-types */
import RatingNumber from "./RatingNumber";

const RATINGS = [1, 2, 3, 4, 5];

const Ratings = ({ onHandleRating }) => {
  const [activeRating, setActiveRating] = useState(null);

  const handleRatingClick = (rating) => {
    onHandleRating(rating);
    setActiveRating(rating);
  };

  return (
    <div className="ratings">
      {RATINGS.map((rating) => (
        <RatingNumber
          key={rating}
          value={rating}
          isActive={rating === activeRating}
          onHandleRating={handleRatingClick}
        />
      ))}
    </div>
  );
};

export default Ratings;
