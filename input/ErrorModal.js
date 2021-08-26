import React from "react";
import Card from "../Details/Card.js";
import Button from "./Button.js";
import classes from "./ErrorModal.module.css";
const Errors = (props) => {
  return (
    <div>
      <div onClick={props.onClick} className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.data.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.data.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};
export default Errors;
