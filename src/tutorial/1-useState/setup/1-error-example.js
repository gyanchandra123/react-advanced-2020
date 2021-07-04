import React from "react";

const ErrorExample = () => {
  let title = "book show";

  return (
    <div className="container">
      <button type="button" onChange={()=>{title='new title'}}>
        change the title name
      </button>
      <h2> {title}</h2>
    </div>
  );
};

export default ErrorExample;
// without using the state feature in functional component, it's not 
//possible to update any variable & render in UI.