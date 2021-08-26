import React, { useState } from "react";
import Buttons from "./input/InputButton.js";
import Detail from "./Details/DataDetail.js";

function App() {
  let dats = [];
  const [details, DetailFunc] = useState(dats);
  const dataDetails = (received) => {
    DetailFunc((gotdata) => {
      return [...gotdata, received];
    });
  };
  return (
    <div>
      <Buttons dataDetail={dataDetails}></Buttons>

      {details.map((data) => (
        <Detail addDetail={data} key={data.id}></Detail>
      ))}
    </div>
  );
}

export default App;
