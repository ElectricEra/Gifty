import axios from 'axios';

export const GENERATE_GIFTS      = 'GENERATE_GIFTS';
export const GET_GIFTS           = 'GET_GIFTS';
export const ADD_FRIENDS         = 'ADD_FRIENDS';
export const CHANGE_SIGN_IN      = 'CHANGE_SIGN_IN';
export const CHANGE_SIGN_UP      = 'CHANGE_SIGN_UP';
export const GIFT_RESET          = 'GIFT_RESET';
export const FIRST_ENTRANCE      = 'FIRST_ENTRANCE';
export const LOG_IN              = 'LOG_IN';
export const LOG_OUT             = 'LOG_OUT';
export const SIGN_UP             = 'SIGN_UP';
export const CREATE_USER         = 'CREATE_USER';
export const LOG_IN_SUCCESS      = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILED       = 'LOG_IN_FAILED';
export const SIGN_UP_FAILED      = 'SIGN_UP_FAILED';
export const SIGN_UP_SUCCESS     = 'SIGN_UP_SUCCESS';
export const LOGGED_OUT          = 'LOGGED_OUT';
export const ADD_TO_HISTORY      = 'ADD_TO_HISTORY';
export const GIFT_PROCESS        = 'GIFT_PROCESS';
export const LAST_PATH           = 'LAST_PATH';
export const DELETE_FROM_HISTORY = 'DELETE_FROM_HISTORY';
export const THEME               = 'THEME';


export function deleteFromHistory(data) {
  console.log(data);
  return {
    type: DELETE_FROM_HISTORY,
    payload: data
  }
}

export function generateGifts(description) {
  return {
    type: GENERATE_GIFTS,
    payload: request
  }
}

export function getGifts(personDescription) {
  const url = '/submit';
  if (personDescription) {
    const request = axios.post(url, personDescription);
    return {
      type:  GET_GIFTS,
      payload: request
    }
  } else {
    return {
      type:  GET_GIFTS,
      payload: {data:[]} 
    }
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

export function resetGift() {
  return {
    type: GIFT_RESET,
    payload: []
  }
}

export function firstEntrance() {
  return {
    type: FIRST_ENTRANCE,
    payload: false
  }
}

export function logIn(userData) {
  return {
    type: LOG_IN,
    payload: userData
  }
}

export function logOut() {
  return {
    type: LOG_OUT
  }
}

export function createUser(userData) {
  return {
    type: CREATE_USER,
    payload: userData
  }
}

export function logInFailed(logStatus) {
  return {
    type: LOG_IN_FAILED,
    payload: logStatus
  }
}

export function signUpFailed(logStatus) {
  return {
    type: SIGN_UP_FAILED,
    payload: logStatus
  }
}

export function logInSuccess(logStatus) {
  return {
    type: LOG_IN_SUCCESS,
    payload: logStatus
  }
}

export function signUpSuccess(logStatus) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: logStatus
  }
}

export function loggedOut() {
  return {
    type: LOGGED_OUT
  }
}


export function logInCreator(email, password) {
    console.log('LOG IN CREATOR');
    const logInSuccessStatus = {
      loggedIn: true,
      shouldRedirect: true
    }

    return (dispatch) => {
      axios.post('/login', {email, password})
        .then((response) => {
          if(response.data === false) {
            dispatch(logInFailed({ errorMessage: 'Wrong email or password' }))
          } else {
            dispatch(logInSuccess(logInSuccessStatus))
            dispatch(logIn(response.data[0]));
          }
        })
        .catch((err) => {
          dispatch(logInFailed({ errorMessage: 'Something Wrong' }))
        })
    }
}

export function signUpCreator(name, email, password) {
  console.log('SIGN UP CREATOR');

  return (dispatch) => {
    axios.post('/register', {name, email, password})
      .then((response) => {
        if(response.data === false) {
          dispatch(signUpFailed({ errorMessage: 'User already exist' }))
        } else {
          dispatch(signUpSuccess());
          dispatch(createUser({name, email, password}));
          dispatch(changeSignUpForm('signIn'));
        }
      })
      .catch((err) => {
        dispatch(signUpFailed({ errorMessage: 'Something Wrong' }))
      })
  }
}

export function logOutCreator() {
  console.log('LOG OUT CREATOR');

  return (dispatch) => {
    dispatch(logOut());
    dispatch(loggedOut());
  }
}

export function addToHistory(data) {
  return {
    type: ADD_TO_HISTORY,
    payload: data
  }
}


export function updateUser(user){
  console.log(user);

  return (dispatch) => {
    axios.post('/update', 
        {
          email: user.email, 
          facebook: user.facebook,
          friends: user.friends,
          history: user.history,
          settings: user.settings
        }
      ).then(() => console.log('update'))
  }
}

export function giftProcess(data) {
  return {
    type: GIFT_PROCESS,
    payload: data
  }
}

export function updateTheme(data) {
  return {
    type:  THEME,
    payload: data
  }
}
