import React, { useState } from "react";
import Input from "./InputForm.js";
// import Button from "./Button.js";

import ErrorModal from "./ErrorModal.js";
const Buttonk = (props) => {
  const [chng, chngFunc] = useState(" ");
  const [chng2, chngFunc2] = useState("");
  const change = (received) => {
    if (received.name.trim().length === 0 || received.age.indexOf(0) === 0) {
      chngFunc2({
        title: "Invalid Input",
        message: "Please enter a valid input",
      });
      received.age = 0;
    } else if (received.age > 0) {
      props.dataDetail(received);
    }
    chngFunc(received);

    // else{
    //   chng.age=0;
    // }
  };
  const chngBack = (e) => {
    e.preventDefault();
    chngFunc("");
  };
  if (chng.age <= 0) {
    return <ErrorModal data={chng2} onClick={chngBack}></ErrorModal>;
  } else {
    return <Input change1={change}></Input>;
  }
};

export default Buttonk;
