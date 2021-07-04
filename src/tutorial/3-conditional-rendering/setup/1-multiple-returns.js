import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {

  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h3>Loading .....</h3>;
  }

  return <h3>multiple returns</h3>;
};

export default MultipleReturns;
