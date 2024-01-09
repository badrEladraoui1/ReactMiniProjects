/* eslint-disable react/prop-types */
const RatingNumber = ({ value, onHandleRating }) => {
  return (
    <div className="ratingValueDiv">
      <button onClick={() => onHandleRating(value)} className="ratingValue">
        {value}
      </button>
    </div>
  );
};

export default RatingNumber;
