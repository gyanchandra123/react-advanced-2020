import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  // it is destructure as an object, since useParams: is an object.
  // we need to parse the 'id' from the useParam to number.Since it's astring.

  const [name, setName] = useState("default Name");

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <button className="btn">
        <Link to="/people"> go back to people</Link>
      </button>
    </div>
  );
};

export default Person;
