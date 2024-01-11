import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

import ThankYouCard from "./components/ThankYouCard";

const App = () => {
  const [buttonVal, setButtonVal] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (value) => {
    setButtonVal(value);
  };
  const handleSubmit = (trueOrFalse) => {
    setIsSubmitted(trueOrFalse);
  };

  return (
    <div>
      {!isSubmitted && (
        <Card onHandleRating={handleRating} onHandleSubmit={handleSubmit} />
      )}
      {isSubmitted && <ThankYouCard buttonVal={buttonVal} />}
    </div>
  );
};

export default App;
