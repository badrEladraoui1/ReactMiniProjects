/* eslint-disable react/prop-types */
import "./SavedMeals.css"
import SavedListItem from "./SavedListItem";

function SavedMeals({ savedMeals }) {

  return (
    <div className="savedListContainer">
      <ul>
        {savedMeals.length === 0 && <h4> NO List Saved </h4>}
        {savedMeals.map((savedMeal) => (
          <SavedListItem key={savedMeal.id} mealName={savedMeal.mealName} />
        ))}
      </ul>
    </div>
  );
}

export default SavedMeals;
