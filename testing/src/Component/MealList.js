import React from "react";
import Meal from "./Meal";
import Card from "./Card,";
import classes from "./MealList.module.css";

const MealList = (props) => {
  return (
    <Card>
      <ul className={classes["movies-list"]}>
        {props.Meals.map((meal) => (
          <Meal
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default MealList;
