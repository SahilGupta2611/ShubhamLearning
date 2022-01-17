import React from "react";
import MealList from "./Component/MealList";
import { useState, useContext, useEffect } from "react";
import AppContext from "./Component/Context";
import Form from "./Component/Form";
import classes from "./Component/Form.module.css";

function App() {
  const ctx = useContext(AppContext);
  const { isAddedSuccesfully } = ctx;
  const [meals, setMeals] = useState([]);

  const getMealHandler = async () => {
    try {
      const response = await fetch(
        "https://react-http-4f560-default-rtdb.firebaseio.com/Meals.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      let loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    if (isAddedSuccesfully) {
      getMealHandler();
    }
    return () => {
      if (isAddedSuccesfully) {
        ctx.AddedSuccesfully();
      }
    };
  }, [isAddedSuccesfully]);
  return (
    <React.Fragment>
      <Form />
      <button onClick={getMealHandler} className={classes.btn}>
        fetch data
      </button>
      <MealList Meals={meals} />
    </React.Fragment>
  );
}
export default App;
