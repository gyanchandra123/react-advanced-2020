import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";


const defaultState = {
  people: [],
  IsModelOpen: false,
  modelContent: "hello world",
};

const Index = () => {
  const [name, setName] = useState("");

  //Reducer
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

  const closeModel = () => {
    dispatch({ type: "CLOSE_MODEL" });
  };

  return (
    <>
      {state.IsModelOpen && (
        <Modal modelContent={state.modelContent} closeModel={closeModel} />
      )}

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
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: id });
                console.log('brn click')
              }}
            >
              remove item
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
