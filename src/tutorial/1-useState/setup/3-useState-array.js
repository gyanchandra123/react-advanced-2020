import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deletePerson = (id) => {
    const filteredPeople = people.filter((person) => person.id !== id);
    setPeople(filteredPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button onClick={()=>deletePerson(id)}>
              delete
            </button>
          </div>
        );
      })}

      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear all items
      </button>
    </>
  );
};

export default UseStateArray;
