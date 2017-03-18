import React from "react";
import {Logo, Text} from '../materialize';
import {Button} from '../materialize';
import {Row, TextInput, LoginWrapper} from '../materialize';
import { Field, reduxForm } from 'redux-form'
import { validate } from '../../utils/index'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }



  handleInputChange(event) {
    console.log(changes);
  }

  handleSubmitForm() {
    console.log('sumited');
  }

  render() {
    const { fields: { name, surname, email }, handleSubmit } = this.props;
    return (
      <LoginWrapper>
        <Logo imgSrc="images/gifty-blue.svg" />
        <Row>
          <TextInput name="name" size="small" {...name}>First Name</TextInput>
          <TextInput name="surname" size="small" {...surname}>Last Name</TextInput>
          <TextInput name="email" {...email}>Email</TextInput>
          <TextInput id="password">Password</TextInput>
          <Button to="profile" onClick={this.handleSubmitForm}>Register</Button>
        </Row>
       </LoginWrapper>
    )}
};

export default reduxForm({
  form: 'LoginForm',
  fields: ['name', 'surname', 'email'],
  validate,
})(LoginForm)
