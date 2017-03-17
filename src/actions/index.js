import axios from 'axios';

export const GENERATE_GIFTS = 'GENERATE_GIFTS';
export const SELECT_GIFT = 'SELECT_GIFT';
export const GET_GIFTS = 'GET_GIFTS'

export function generateGifts(description) {
  console.log('action: GENERATE_GIFTS');
  return {
    type: GENERATE_GIFTS,
    payload: description
  }
}

export function getGifts() {
  console.log('action: GET_GIFTS');
  const url = '/data/response.json';
  const request = axios.get(url);
  return {
    type:  GET_GIFTS,
    payload: request
  }
}


export const selectGift = (gift) => ({
  type: SELECT_GIFT,
  paload: gift
})

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
