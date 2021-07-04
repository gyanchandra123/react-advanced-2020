import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, settext] = useState("a");

  /* const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>1st:{firstValue}</h2>
      <h2>2nd :{secondValue}</h2>
    </>
  ); */

  return (
    <>
      <h1>{text || "john doe"}</h1>
      {text && <h2>hello world</h2>}
    </>
  );
};

export default ShortCircuit;
