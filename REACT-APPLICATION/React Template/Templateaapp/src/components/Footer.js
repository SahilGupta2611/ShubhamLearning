// @flow
import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.child_container}>
      <footer className={classes.footer}>
        <i className="fab fa-facebook fa-2x"></i>{" "}
        <i className="fab fa-instagram fa-2x"></i>{" "}
        <i className="fab fa-snapchat fa-2x"></i>{" "}
        <i className="fab fa-pinterest-p fa-2x"></i>{" "}
        <i className="fab fa-twitter-square fa-2x"></i>{" "}
        <i className="fab fa-linkedin fa-2x"></i>
        <p>
          Powered by <a href="https://www.w2schools.com/">w2.css</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
