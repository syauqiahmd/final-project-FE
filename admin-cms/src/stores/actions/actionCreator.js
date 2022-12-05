import axios from "axios"
const baseUrl = "http://localhost:3000";

export const fetchUsersSuccess = (payload) => {
  return {
    type: "users/successFetch",
    payload,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: "user/successFetch",
    payload,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(baseUrl + "/users");
      const data = await res.json();
      dispatch(fetchUsersSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUserById = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(baseUrl + `/users/${id}`);
      const data = await res.json();
      dispatch(fetchUserSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUser = (input) => {
  return async (dispatch) => {
    try {
      await fetch(baseUrl + "/users", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: input,
      });
      dispatch(fetchUsers());
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteUserById = (id) => {
  return async (dispatch) => {
    try {
      await fetch(baseUrl + `/users/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
