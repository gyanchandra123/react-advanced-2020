import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

// reducer function
const reducer = (state, action) => {
  if (action.type === "ACTION") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      IsModelOpen: true,
      modelContent: "item added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      IsModelOpen: true,
      modelContent: "please enter a valid value",
    };
  }

  throw new Error("no matching action type");
};

const defaultState = {
  people: [],
  IsModelOpen: false,
  modelContent: "hello world",
};

const Index = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ACTION", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <>
      {state.IsModelOpen && <Modal modelContent={state.modelContent} />}

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

      {state.people.map((person) => {
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
