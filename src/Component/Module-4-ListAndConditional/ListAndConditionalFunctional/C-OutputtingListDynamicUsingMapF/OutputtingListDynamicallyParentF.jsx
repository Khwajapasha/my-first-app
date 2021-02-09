import React, { useState } from "react";
import { OutputtingListDynamicallyChildF } from "./OutputtingListDynamicallyChildF";

export const OutputtingListDynamicallyParentF = () => {
  const [ShowPersonData, setShowPersonData] = useState(false);
  const [PersonData, setPersonData] = useState({
    person: [
      { name: "Khwaja", age: 27 },
      { name: "Roman", age: 12 },
      { name: "Kashaf", age: 4 },
    ],
  });
  const handleNameChange = () => {
    setPersonData({
      person: [
        { name: "Muhammad Khwaja", age: 28 },
        { name: "Roman Khan", age: 28 },
        { name: "Ayesha Kashaf", age: 28 },
      ],
    });
  };
  const handleConditionalRendering = () => {
    setShowPersonData(!ShowPersonData);
  };
  return (
    <div>
      <p className="mt-2">2. Dynmaic Loading Data & Conditional Rendering</p>
      <button onClick={handleConditionalRendering}>
        Loading Dynamic Data Using .Map()
      </button>
      {ShowPersonData ? (
        <div>
          {PersonData.person.map((itemCurrent) => {
            return (
              <OutputtingListDynamicallyChildF
                name={itemCurrent.name}
                age={itemCurrent.age}
              />
            );
          })}
          <button onClick={handleNameChange}> Change State</button>
        </div>
      ) : null}
    </div>
  );
};
