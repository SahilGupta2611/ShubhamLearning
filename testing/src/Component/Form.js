import React from "react";
import classes from "./Form.module.css";
import { useState, useContext } from "react";
import AppContext from "./Context";

function Form(props) {
  const ctx = useContext(AppContext);
  console.log(ctx);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://react-http-4f560-default-rtdb.firebaseio.com/Meals.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
        }),
      }
    );
    if (response.ok) {
      ctx.AddedSuccesfully();
      setName("");
      setDescription("");
      setPrice("");
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* <label htmlFor="name">name</label> */}
      <input
        type="text"
        placeholder="name"
        className={classes.input}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      {/* <label htmlFor="name">name</label> */}
      <input
        type="text"
        placeholder="description"
        className={classes.input}
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      {/* <label htmlFor="name">name</label> */}
      <input
        type="number"
        placeholder="price"
        className={classes.input}
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <input type="submit" value="Add Meal" className={classes.input} />
    </form>
  );
}
export default Form;
