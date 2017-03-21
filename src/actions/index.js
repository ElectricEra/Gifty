import axios from 'axios';

export const GENERATE_GIFTS = 'GENERATE_GIFTS';
export const SELECT_GIFT = 'SELECT_GIFT';
export const GET_GIFTS = 'GET_GIFTS';
export const ADD_FRIENDS = 'ADD_FRIENDS';
export const CHANGE_SIGN_IN = 'CHANGE_SIGN_IN';
export const CHANGE_SIGN_UP = 'CHANGE_SIGN_UP';


export function generateGifts(description) {
  return {
    type: GENERATE_GIFTS,
    payload: request
  }
}

export function getGifts(personDescription) {
  const url = '/submit';
  const request = axios.post(url, personDescription);
  return {
    type:  GET_GIFTS,
    payload: request
  }
}

export function addFriends(data) {
  return {
    type:  ADD_FRIENDS,
    payload: data
  }
}

export function changeSignUpForm() {
  return {
    type: CHANGE_SIGN_UP,
    payload: 'signIn'
  }
}

export function changeSignInForm() {
  return {
    type: CHANGE_SIGN_IN,
    payload: 'signUp'
  }
}


export const selectGift = (gift) => ({
  type: SELECT_GIFT,
  payload: gift
})

export const logIn = (data) => ({
  type: "LOG_IN",
  data
});

export const logOut = () => ({
  type: 'LOG_OUT'
});

const userCreated = () => ({
  type: 'USER_CREATED'
});

const updateUser = (data) => ({
  type: 'UPDATE_USER',
  data
});
