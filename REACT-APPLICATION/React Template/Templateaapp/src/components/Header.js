import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.headcontainer}>
          <a href="#">HOME</a>
          <a href="#">BAND</a>
          <a href="#">TOUR</a>
          <a href="#">CONTACT</a>
          <div className={classes.dropdown}>
            <button href="#" className={classes.dropdown_btn}>
              MORE <i className="fa fa-caret-down"></i>
            </button>
            <div className={classes.dropdown_contents}>
              <a href="#">First Item</a>
              <a href="#">Second Item</a>
              <a href="#">Third Item </a>
            </div>
          </div>
        </div>
        <i className={`fa fa-search ${classes.search}`}></i>
      </header>
    </div>
  );
}

export default Header;
