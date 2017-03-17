import React from "react";
import {Logo, Text} from '../materialize';
import {Button} from '../materialize';
import {Row, TextInput, LoginWrapper} from '../materialize';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleInputChange(event) {
    console.log(changes);
  }

  handleSubmitForm() {
    console.log(this.state);
  }

  render() {
    return (
      <LoginWrapper>
        <Logo imgSrc="images/gifty-blue.svg" />
        <Row>
          <TextInput id="firstName" size="small">First Name</TextInput>
          <TextInput id="lastName" size="small">Last Name</TextInput>
          <TextInput id="email">Email</TextInput>
          <TextInput id="password">Password</TextInput>
          <Button to="profile" onClick={this.handleSubmitForm}>Register</Button>
        </Row>
       </LoginWrapper>
    )}
};
