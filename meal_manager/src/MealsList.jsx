/* eslint-disable react/prop-types */
import MealItem from "./MealItem";

const MealsList = ({
  meals,
  onToggleMeal,
  onDeleteMealById,
  onHandleResetMeals,
  onSaveMeals,
  onDeleteAllMeals
}) => {

  return (
    <>
      <ul>
        {meals.length === 0 && <h4> NO MEALS ADDED YET !!! D</h4>}
        {meals.map((meal) => (
          <MealItem
            key={meal.id}
            {...meal}
            // id={meal.id}
            // mealName={meal.mealName}
            // eaten={meal.eaten}
            onToggleMeal={onToggleMeal}
            onDeleteMealById={onDeleteMealById}
          />
        ))}
      </ul>
      { meals.length >= 1  && 
      <>
      <button onClick={onHandleResetMeals}>Reset All</button>
      <button onClick={onSaveMeals}>Save All Meals</button>
      <button onClick={onDeleteAllMeals}>Delete All Meals</button>
      </>
      }
    </>
  );
};

export default MealsList;
