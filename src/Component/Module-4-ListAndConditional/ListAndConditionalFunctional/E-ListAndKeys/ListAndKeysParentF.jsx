import React, { useState } from "react";
import { ListAndKeysChildF } from "./ListAndKeysChildF";
export const ListAndKeysParentF = () => {
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
    const newPersonData = [...personData]; // called state immutability OR (Copying existing state)
    newPersonData.splice(index, 1);
    setPersonData(newPersonData);
  };

  return (
    <div className="mt-2">
      <p>4. Lists & Keys </p>
      <button onClick={toggleNameHandler}>List & Keys</button>
      {showPerson ? (
        <div>
          {personData.map((item, index) => {
            return (
              <ListAndKeysChildF
                itemCurrent={item}
                name={item.name}
                age={item.age}
                key={item.id}
                clicked={() => removePersonData(index)}
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
