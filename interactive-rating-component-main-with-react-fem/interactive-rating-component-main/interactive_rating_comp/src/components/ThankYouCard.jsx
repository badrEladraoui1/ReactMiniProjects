/* eslint-disable react/prop-types */
const ThankYouCard = ({ buttonVal }) => {
  return (
    <div className="card">
      <div>
        <img src="../assets/images/illustration-thank-you.svg"></img>
        <h4>You selected {buttonVal} out of 5</h4>
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
