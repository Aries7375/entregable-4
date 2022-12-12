import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({
  getUsers,
  createUser,
  setUpdateInfo,
  updateInfo,
  updateUser,
  setHideShow,
}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);
  const closeX = () => {
    setUpdateInfo();
    setHideShow(true);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };
  const submit = (data) => {
    updateInfo ? updateUser(updateInfo.id, data) : createUser(data);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setUpdateInfo();
    setHideShow(true);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="close-form" onClick={closeX}>
        X
      </div>
      <h2>{updateInfo ? "Update User" : "Create User"}</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" {...register("password")} />
      </div>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" {...register("first_name")} />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" {...register("last_name")} />
      </div>
      <div>
        <label htmlFor="birthday">birthday</label>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>
      <input type="submit" value="submit" id="form-btn" />
    </form>
  );
};

export default UserForm;
