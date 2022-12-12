import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";
import useCrud from "./hooks/useCrud";
import { Toaster } from "react-hot-toast";

function App() {
  const {
    users,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    updateInfo,
    setUpdateInfo,
    hideShow,
    setHideShow,
  } = useCrud();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>USERS</h1>
      <button className="open-btn" onClick={() => setHideShow(false)}>
        Create new User
      </button>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={`form-cont ${hideShow && "hide-form"}`}>
        <UserForm
          getUsers={getUsers}
          createUser={createUser}
          setUpdateInfo={setUpdateInfo}
          updateInfo={updateInfo}
          updateUser={updateUser}
          setHideShow={setHideShow}
        />
      </div>
      <div className="users-cont">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            getUsers={getUsers}
            deleteUser={deleteUser}
            setUpdateInfo={setUpdateInfo}
            setHideShow={setHideShow}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
