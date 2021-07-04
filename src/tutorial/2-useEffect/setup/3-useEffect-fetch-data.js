import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, usersState] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((users) => {
        console.log(users);
        usersState(users.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
