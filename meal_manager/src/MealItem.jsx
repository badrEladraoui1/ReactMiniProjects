/* eslint-disable react/prop-types */

const MealItem = ({id , mealName , eaten , onToggleMeal , onDeleteMealById}) => {

  return (
    <>
      <li>
        <input
        onChange={(event) => onToggleMeal(id , event.target.checked)}
        checked={eaten}
        type="checkbox"/>
        {mealName}
        <button onClick={ () => onDeleteMealById(id) }>Delete</button>
      </li>
    </>
  )
}

export default MealItem
