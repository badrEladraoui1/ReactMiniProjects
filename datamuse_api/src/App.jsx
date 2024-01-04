import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [inputPassed, setInputPassed] = useState("");

  const searchedInput = (value) => {
    setInputPassed(value);
  };

  return (
    <div>
      <Form onSearchedInput={searchedInput} />
    </div>
  );
};

export default App;
