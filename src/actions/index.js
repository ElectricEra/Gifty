import axios from "axios";


export const logIn = (data) => ({
  type: "LOG_IN",
  data
});

export const logOut = () => ({
  type: 'LOG_OUT'
});

export const toggleForm = (value) => ({
  type: 'TOGGLE_FORM',
  value
});



const userCreated = () => ({
  type: 'USER_CREATED'
});

const updateUser = (data) => ({
  type: 'UPDATE_USER',
  data
});
