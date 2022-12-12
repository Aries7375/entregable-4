import axios from "axios";
import React from "react";

const UserCard = ({
  user,
  getUsers,
  deleteUser,
  setUpdateInfo,
  setHideShow,
}) => {
  const capture = () => {
    setUpdateInfo(user);
    setHideShow(false);
  };
  return (
    <article className="user-card">
      <h2>
        {user.first_name} {user.last_name}
      </h2>

      <div className="user-info">
        <ul>
          <li>
            <span>Email</span>
            <p>{user.email}</p>
          </li>
          <li>
            <span>Birthday</span>
            <p>{user.birthday}</p>
          </li>
        </ul>
      </div>
      <div className="user-buttons">
        <button onClick={() => deleteUser(user.id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button onClick={capture}>
          <i className="fa-solid fa-pencil"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
