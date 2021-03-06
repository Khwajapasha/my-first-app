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
  const switchNameHandler = (newName1, newName2) => {
    setPersonData({
      person: [
        { name: newName1, age: 23 },
        { name: newName2, age: 24 },
        { name: "Zeeshan", age: 25 },
      ],
    });
  };
  const changeNameHandler = (e) => {
    setPersonData({
      person: [
        { name: " Salmaan Node js Developer", age: 23 },
        { name: " Khuddus React Developer", age: 24 },
        { name: e.target.value, age: 25 },
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
        change={changeNameHandler}
      />
      <button onClick={() => switchNameHandler("Ayesha Kashaf", "zainab")}>
        Click TO Change State 1
      </button>
      {/* <button onClick={changeNameHandler}>Click TO Change State 2</button> */}
    </div>
  );
};
//  What is the major difference between class & functional component
// In Class Component we can use state only once in component using (state keyword)
// In functional component we can use state many time as we want using (useState hook)
