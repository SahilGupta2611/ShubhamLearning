import React from "react";
import classes from "./Body.module.css";
const Body = (props) => {
  return (
    <div>
      <article className={classes.container}>
        <img
          src="https://www.w3schools.com/w3images/chicago.jpg"
          alt="demo image"
          className={classes.img}
        />
        <div className={classes.position}>
          <h2>Chicago</h2>
          <p>Thank you, Chicago - A night we won't forget. </p>
        </div>
      </article>
    </div>
  );
};
export default Body;
