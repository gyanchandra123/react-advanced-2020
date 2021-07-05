import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    console.log(divRef)
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input type="text" ref={inputRef} />
        </div>
        <button type="submit">submit</button>
      </form>

      <div ref={divRef}>
        the useRef can be created multiple times inaide a functional component
      </div>
    </>
  );
};

export default UseRefBasics;

// useRef() :        represents the object {current:}
// useRef().current : represents the node 
// useRef().current.value : represents the value of the node 
// we can use more than 1 useRef inside a single component.
// useRef() : does not cause re-render is shown below:

/*

// we are not using empty [] as 2nd parameter as usual to stop re-render.

useEffect(() => {
  inputRef.current.focus();
}); */