import React from "react";
import {Logo, Text} from '../materialize';
import {Button, SubmitButton} from '../materialize';
import {Row, TextInput, LoginWrapper, Form} from '../materialize';
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

  handleSubmitForm(event) {

    console.log('submit');
  }

  renderField ({ input, label, type, meta: { touched, error } }) {
    return (
      <div>
        {console.log(error)}
        <TextInput {...input} type={type}>{label}</TextInput>
        {touched && error && <span className="field-error col s12">{error}</span>}
      </div>
    )
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <LoginWrapper>
        <Logo imgSrc="images/gifty-blue.svg" />
        <Row>
          <Form onSubmit={handleSubmit(this.handleSubmitForm)}>
            <Field
              name="name"
              id="name"
              type="text"
              component={this.renderField}
              label="Name"/>

            <Field
              name="surname"
              id="surname"
              type="text"
              component={this.renderField}
              label="Surname"/>

            <Field
              name="email"
              id="email"
              type="email"
              component={this.renderField}
              label="Email"/>

            <Field
              name="password"
              id="password"
              type="password"
              component={this.renderField}
              label="Password"/>
            <SubmitButton disabled={submitting}>Register</SubmitButton>
           </Form>
        </Row>
       </LoginWrapper>
    )}
};

export default reduxForm({
  form: 'LoginReduxForm',
  validate,
})(LoginForm)
