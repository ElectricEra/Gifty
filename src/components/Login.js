import React from "react";
import { connect } from 'react-redux';
import LoginForm from './login/LoginForm';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginForm/>
      </div>
    );
    }
};
