import { useState } from "react";

/* eslint-disable react/prop-types */
const SearchForm = ({ onGetCity }) => {
  const [newCity, setNewCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onGetCity(newCity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
        type="text"
        placeholder="city..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
