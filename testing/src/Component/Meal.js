import React from "react";

import classes from "./Meal.module.css";

const Meal = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      <p>{props.price}</p>
    </li>
  );
};

export default Meal;
