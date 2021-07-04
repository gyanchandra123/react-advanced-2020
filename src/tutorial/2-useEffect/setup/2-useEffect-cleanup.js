import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setsize] = useState(window.innerWidth);

  const checkSize = () => {
    setsize(window.innerWidth);
  };

  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("unsubscribe event");
      window.removeEventListener("resize", checkSize);
    };
  },[]); // its good to use both the return funciton + [] to unsubscribe event.

  return (
    <>
      <h2>windows size</h2>
      <h3>{size}</h3>
    </>
  );
};

export default UseEffectCleanup;
