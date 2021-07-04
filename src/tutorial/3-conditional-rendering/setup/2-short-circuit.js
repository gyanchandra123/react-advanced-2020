import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, settext] = useState("a");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h3>conditional rendering with short-circuit vs ternary operator</h3>

      <button onClick={() => setIsError(!isError)} className="btn">
        toggle condition
      </button>

      {isError && <h3>there is some error</h3>}
      {isError ? <h3>network error !!!</h3> : <h3>welcome back </h3>}
      <h1>{text || "john doe"}</h1>
      {text && <h2>hello world</h2>}
    </>
  );
};

export default ShortCircuit;
