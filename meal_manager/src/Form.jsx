/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onHandleAddMeal }) => {
  const [newMeal, setNewMeal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMeal === "") return;
    onHandleAddMeal(newMeal);
    setNewMeal("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="meal">Add your Meal : </label>
        <input
          value={newMeal}
          id="meal"
          type="text"
          onChange={(event) => setNewMeal(event.target.value)}
        />
        <button>Add Meal</button>
      </form>
    </>
  );
};

export default Form;
