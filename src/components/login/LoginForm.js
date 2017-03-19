import React from "react";
import {Logo, Text} from '../materialize';
import {Button} from '../materialize';
import {Row, TextInput, LoginWrapper} from '../materialize';
import { reduxForm } from 'redux-form'
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
    const { fields: { name, surname, email } } = this.props;

    return (
      <LoginWrapper>
        <Logo imgSrc="images/gifty-blue.svg" />

        <Row>
          <TextInput
            name="name"
            id="name"
            size="small">
            First Name
          </TextInput>

          <TextInput
            name="surname"
            id="surname"
            size="small">
            Last Name
          </TextInput>

          <TextInput
            name="email"
            id="email">
            Email
          </TextInput>

          <TextInput name="password" id="password">Password</TextInput>
          <Button to="profile" onClick={this.handleSubmitForm}>Register</Button>
        </Row>
       </LoginWrapper>
    )}
};

export default reduxForm({
  form: 'LoginReduxForm',
  fields: ['name', 'surname', 'password'],
  validate,
})(LoginForm)
