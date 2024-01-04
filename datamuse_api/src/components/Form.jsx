/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onSearchedInput }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchedInput(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="search..."
        type="text"
      />
      <button type="submit">search</button>
    </form>
  );
};

export default Form;
