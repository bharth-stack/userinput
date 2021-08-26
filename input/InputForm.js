import React, { useState } from "react";
import Card from "../Details/Card.js";
import "./InputForm.css";
import classes from "./AddForm.module.css";
import Button from "./Button.js";
const InputForm = (props) => {
  const [data1, func1] = useState("");
  const [data2, func2] = useState("");
  const userName = (e) => {
    return func1(e.target.value);
  };
  const age = (e) => {
    return func2(e.target.value);
  };
  const transfers = (e) => {
    e.preventDefault();
    const formData = {
      name: data1,
      age: data2,
      id: Math.random().toString(),
    };

    func1("");
    func2("");
    props.change1(formData);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={transfers}>
          <label htmlFor="userName">User name: </label>
          <input
            id="userName"
            type="text"
            value={data1}
            onChange={userName}
          ></input>

          <label htmlFor="age">Age: </label>
          <input id="age" type="number" value={data2} onChange={age}></input>

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default InputForm;
