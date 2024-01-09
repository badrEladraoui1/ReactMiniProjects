/* eslint-disable react/prop-types */
import RatingNumber from "./RatingNumber";

const RATINGS = [1, 2, 3, 4, 5];

const Ratings = ({ onHandleRating }) => {
  return (
    <div className="ratings">
      {RATINGS.map((rating) => (
        <RatingNumber
          key={rating}
          value={rating}
          onHandleRating={onHandleRating}
        />
      ))}
    </div>
  );
};

export default Ratings;
