import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useCrud = () => {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [hideShow, setHideShow] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const confirmCreation = () => {
    toast.success("The user was successfully created");
  };
  const confirmDel = () => {
    toast.success("User deleted successfully");
  };
  const confirmUpdate = () => {
    toast.success("User updated successfully");
  };
  const confirmError = () => {
    toast.error("An error has occurred");
  };
  const getUsers = () => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  const createUser = (data) => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .post(URL, data)
      .then(() => {
        getUsers();
        confirmCreation();
      })
      .catch((err) => {
        console.log(err);
        confirmError();
      });
  };
  const updateUser = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(URL, data)
      .then(() => {
        getUsers();
        confirmUpdate();
      })
      .catch((err) => {
        console.log(err);
        confirmError();
      });
  };
  const deleteUser = (id) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        getUsers();
        confirmDel();
      })
      .catch((err) => {
        console.log(err);
        confirmError();
      });
  };

  return {
    users,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    updateInfo,
    setUpdateInfo,
    hideShow,
    setHideShow,
  };
};

export default useCrud;
