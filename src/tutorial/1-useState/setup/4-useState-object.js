import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setperson] = useState({
    name: "peter",
    age: 24,
    message: "random mesage",
  });

  const changeUseMessage = (newMessage) => {
    setperson({
      ...person,
      message: newMessage,
    });
  };

  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button onClick={() => changeUseMessage("new message")}  className='btn'> 
        change message
      </button>
    </>
  );
};

export default UseStateObject;
