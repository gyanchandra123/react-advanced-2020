import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setuser] = useState("default user");

  useEffect(() => {
    axios
      .get(url)
      .then((user) => {
        console.log(user);
        const { login } = user.data;
        setuser(login);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setisLoading(false);
        setisError(true);
      });

    return () => {};
  }, []);

  if (isLoading) {
    return <h3>Loading .....</h3>;
  }

  if (isError) {
    return <h3>ERROR .....</h3>;
  }

  return <h3>{user}</h3>;
};

export default MultipleReturns;
