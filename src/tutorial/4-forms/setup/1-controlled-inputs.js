import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // without this any of the belong code won't have much effective,
    console.log("hello world");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input type="email" id="email" name="email" />
        </div>

        <button type="submit">add person</button>
      </form>
    </>
  );
};

export default ControlledInputs;
