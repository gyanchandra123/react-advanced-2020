import React, { useState } from "react";

const UseStateBasics = () => {
  //proofing the useState is a function returning an array of 2 values.
  console.log(useState(1));
  console.log(useState(1)[0]);
  console.log(useState(1)[1]);

  let initialTitle = "random title";

  const [title, setTitle] = useState(initialTitle);

  const changeTitle = () => {
    if (title === "random title") {
      setTitle("hello world");
    } else {
      setTitle("random title");
    }
  };

  return (
    <React.Fragment>
      <button type="button" onClick={changeTitle} className='btn'>
        change title
      </button>
      <h3>{title}</h3>
    </React.Fragment>
  );
};

export default UseStateBasics;
