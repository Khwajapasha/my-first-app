import React, { useState } from "react";
import { PropsWithFunctionChild } from "./PropsWithFunctionChild";

export const PropsWithFunctionParent = () => {
  const [personData, setPersonData] = useState({
    person: [
      { name: "Salman", age: 23 },
      { name: "Khuddus", age: 24 },
      { name: "Zeeshan", age: 25 },
    ],
  });
  const switchNameHandler = () => {
    setPersonData({
      person: [
        { name: "Node js Developer", age: 23 },
        { name: "React Developer", age: 24 },
        { name: "UI Developer", age: 25 },
      ],
    });
  };
  const changeNameHandler = () => {
    setPersonData({
      person: [
        { name: " Salmaan Node js Developer", age: 23 },
        { name: " Khuddus React Developer", age: 24 },
        { name: "Zeeshan UI Developer", age: 25 },
      ],
    });
  };
  return (
    <div>
      <PropsWithFunctionChild
        name={personData.person[0].name}
        age={personData.person[0].age}
      />
      <PropsWithFunctionChild
        name={personData.person[1].name}
        age={personData.person[1].age}
      />
      <PropsWithFunctionChild
        name={personData.person[2].name}
        age={personData.person[2].age}
      />
      <button onClick={switchNameHandler}>Click TO Change State 1</button>
      <button onClick={changeNameHandler}>Click TO Change State 2</button>
    </div>
  );
};