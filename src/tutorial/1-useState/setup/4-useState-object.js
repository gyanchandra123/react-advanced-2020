import React, { useState } from "react";

const UseStateObject = () => {
  /*
  const [person, setperson] = useState({
    name: "peter",
    age: 24,
    message: "random mesage",
  }); */

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random mesage");

  const changeUseMessage = (newMessage) => {
    //following the object way:
    /*  setperson({
      ...person,
      message: newMessage,
    }); */

    //following multiple state way
    setMessage(newMessage);
  };

  return (
    <>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{message}</h4>
      <button onClick={() => changeUseMessage("new message")} className="btn">
        change message
      </button>
    </>
  );
};

export default UseStateObject;
