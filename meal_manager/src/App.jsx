import { useEffect, useState } from "react";
import "./SavedMeals.css";
import Form from "./Form";
import MealsList from "./MealsList";
import SavedMeals from "./SavedMeals";

const App = () => {
  // const [meals, setMeals] = useState([]);
  const [meals, setMeals] = useState(() => {
    const localValue = localStorage.getItem("MEALS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  const [savedMeals, setSavedMeals] = useState(() => {
    const localSavedMeals = localStorage.getItem("SAVED_MEALS");
    if (localSavedMeals === null) return [];
    return JSON.parse(localSavedMeals);
  });


  useEffect(() => {
    localStorage.setItem("MEALS", JSON.stringify(meals));
    localStorage.setItem("SAVED_MEALS", JSON.stringify(meals));
  }, [meals]);

  const handleAddMeal = (mealName) => {
    setMeals((prevMeals) => {
      return [
        ...prevMeals,
        { id: crypto.randomUUID(), mealName, eaten: false },
      ];
    });
  };

  const toggleMeal = (id, eaten) => {
    setMeals((prevMeals) => {
      return prevMeals.map((prevMeal) => {
        if (prevMeal.id == id) {
          return { ...prevMeal, eaten };
        }
        return prevMeal;
      });
    });
  };

  const deleteMealById = (id) => {
    setMeals((prevMeals) => {
      return prevMeals.filter((prevMeal) => prevMeal.id !== id);
    });
  };

  const handleResetMeals = () => {
    setMeals((prevMeals) => {
      return prevMeals.map((prevMeal) => {
        if (prevMeal.eaten) {
          return { ...prevMeal, eaten: false };
        } else {
          return { ...prevMeal };
        }
      });
    });
  };

  const saveMeals = () => {
    setSavedMeals((prevSavedMeals) => [...prevSavedMeals, ...meals]);
  };

  const deleteAllMeals = () => {
    setMeals([]);
  };

  return (
    <>
      <h1>MEALS MANAGER</h1>
      <Form onHandleAddMeal={handleAddMeal} />
      <MealsList
        meals={meals}
        onToggleMeal={toggleMeal}
        onDeleteMealById={deleteMealById}
        onHandleResetMeals={handleResetMeals}
        onSaveMeals={saveMeals}
        onDeleteAllMeals={deleteAllMeals}
      />
      <SavedMeals savedMeals={savedMeals} />
    </>
  );
};

export default App;
