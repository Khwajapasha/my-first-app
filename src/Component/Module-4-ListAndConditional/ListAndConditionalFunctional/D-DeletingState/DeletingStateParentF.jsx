import React, { useState } from "react";
import { DeletingStateChildF } from "./DeletingStateChildF";
export const DeletingStateParentF = () => {
  const defaultPerson = [
    { id: "khwaja3", name: "Rehan", age: 20 },
    { id: "khwaja1", name: "khwaja", age: 27 },
    { id: "khwaja2", name: "Zahoor", age: 18 },
  ];
  const updatedPerson = [
    { id: "khwaja4", name: " Md khwaja", age: 270 },
    { id: "khwaja5", name: " Md Zahoor", age: 180 },
    { id: "khwaja6", name: "Sk Rehan", age: 200 },
  ];
  const [showPerson, setShowPerson] = useState(false);
  const [personData, setPersonData] = useState(defaultPerson);
  const switchNameHandler = () => {
    setPersonData(updatedPerson);
  };
  const toggleNameHandler = () => {
    setShowPerson(!showPerson);
  };

  const removePersonData = (index) => {
    let newPersonData = [...personData]; // called state immutability OR (Copying existing state)
    newPersonData.splice(index, 1);
    setPersonData(newPersonData);
  };
  return (
    <div className="mt-2">
      <p>3. Deleting State onClick of Button </p>
      <button onClick={toggleNameHandler}>Toggle & Delete Content</button>
      {showPerson ? (
        <div>
          {personData.map((item, index) => {
            return (
              <DeletingStateChildF
                itemCurrent={item}
                name={item.name}
                age={item.age}
                clicked={() => removePersonData(index)}
                key={item.id}
              />
            );
          })}
          <button onClick={switchNameHandler} className="mt-2">
            Change State
          </button>
        </div>
      ) : null}
    </div>
  );
};
