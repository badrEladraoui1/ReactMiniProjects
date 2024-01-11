/* eslint-disable react/prop-types */
const RatingNumber = ({ value, onHandleRating, isActive }) => {
  const handleClick = () => {
    onHandleRating(value);
  };

  return (
    <div className="ratingValueDiv">
      <button
        onClick={handleClick}
        className={`ratingValue ${
          isActive ? "addingOrangeToBg" : "removingOrange"
        }`}
      >
        {value}
      </button>
    </div>
  );
};

export default RatingNumber;
