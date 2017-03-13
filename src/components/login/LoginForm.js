import React from "react";
import {LoginWrapper, InputWrapper, Logo, Text} from '../materialize';
import {SmallWrapper, Form, Checkbox, Button} from '../materialize';
import {Row, TextInput, RadioInput, NumberInput} from '../materialize';



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
          <TextInput inputId="firstName" size="small">First Name</TextInput>
          <TextInput inputId="lastName" size="small">Last Name</TextInput>
          <TextInput inputId="email">Email</TextInput>
          <TextInput inputId="password">Password</TextInput>
          <Button to="profile">Register</Button>
        </Row>
       </LoginWrapper>
    )}
};
