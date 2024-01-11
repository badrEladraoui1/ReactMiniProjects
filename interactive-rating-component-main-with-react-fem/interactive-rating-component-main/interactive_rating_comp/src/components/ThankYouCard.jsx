/* eslint-disable react/prop-types */
import svg from "../assets/images/illustration-thank-you.svg";

const ThankYouCard = ({ buttonVal }) => {
  return (
    <div className="card">
      <div className="final">
        <img src={svg}></img>
        <h4 className="finalScore">You selected {buttonVal} out of 5</h4>
      </div>
      <div>
        <h3>Thank You!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYouCard;
