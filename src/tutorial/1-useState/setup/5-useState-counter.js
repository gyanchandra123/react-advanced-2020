import React from "react";

const UseStateCounter = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <h2>count value: {value}</h2>
      <button className='btn' onClick={()=>setValue(prevVal=>prevVal+1)}>increment</button>
      <button className='btn'  onClick={()=>setValue(prevVal=>prevVal-1)}>decrement</button>
      <button className='btn' onClick={()=>setValue(0)}>reset</button>
    </>
  );
};

export default UseStateCounter;
