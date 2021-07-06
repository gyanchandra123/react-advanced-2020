import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  const [showModel, setShowModel] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModel(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModel(true);
    }
  };

  return (
    <>
      {showModel && <Modal />}

      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>

      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
