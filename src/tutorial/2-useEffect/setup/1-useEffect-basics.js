import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  // to check the working of the useffect:
  useEffect(() => {
    if (count > 2) {
      console.log("use effect");
      document.title = `new doc title ${count}`;
    }
  },[count]);

  useEffect(()=>{
    console.log('running on the initial page load')
  },[]) 

  console.log("component render");

  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>count value :{count}</h3>
      <button onClick={() => setCount(count + 1)} className="btn">
        increase count
      </button>
    </>
  );
};

export default UseEffectBasics;
