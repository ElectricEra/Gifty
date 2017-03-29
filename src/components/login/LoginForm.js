import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {IndexLink, Link, browserHistory} from 'react-router';
import { Field, reduxForm, getFormValues } from 'redux-form'
import { Logo, Text } from '../materialize'
import { SubmitButton } from '../materialize'
import { Row, TextInput, LoginWrapper, Form } from '../materialize'
import { validate } from '../../utils/utils_login/index'
import { changeSignInForm, changeSignUpForm } from '../../actions/index'
import { logInCreator, signUpCreator } from '../../actions/index'
import FacebookLogin from './FacebookLogin'


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentWillMount() {
    if(this.props.logStatus.loggedIn !== false) {
      browserHistory.push('/app');
    }
  }

  componentDidUpdate() {
    if(this.props.logStatus.loggedIn !== false) {
      browserHistory.push('/app');
    }
  }

  handleInputChange(event) {
    console.log('changed');
  }

  handleChangeForm(event) {
    let id = event.target.id;
    id === 'signIn' ? this.props.changeSignInForm() : this.props.changeSignUpForm();
  }

  handleLogIn() {
    let email = this.props.values.email;
    let password = this.props.values.password;

    this.props.logInCreator(email, password)
  }

  handleSignUp() {
    let name = this.props.values.name;
    let email = this.props.values.email;
    let password = this.props.values.password;

    this.props.signUpCreator(name, email, password);
  }

  renderField ({ input, label, type, id, meta: { touched, error } }) {
    return (
      <div>
        <TextInput {...input} id={id} type={type}>{label}</TextInput>
        {touched && error && <span className="field-error col s12">{error}</span>}
      </div>
    )
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { currentForm } = this.props;

    return (
      <LoginWrapper>
        <Logo imgSrc="images/gift.png" />
        <Row>
          <Form onSubmit={ currentForm === 'signIn' ?
                           handleSubmit(this.handleLogIn) :
                           handleSubmit(this.handleSignUp)}>

          {currentForm === 'signUp' ?
            <Field
              name="name"
              id="name"
              type="text"
              component={this.renderField}
              label="Name"/> : null}
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

            <SubmitButton disabled={submitting}>
              {currentForm === 'signIn' ? 'Log In' : 'Sign Up'}
            </SubmitButton>

           </Form>
        </Row>
        <Row>
          {currentForm === 'signIn' ?
           <div className="sign-toggle">
             <Text txtPosition="center">
               Dont have an have account?
               <span className="sign-toggle-text" id="signIn" onClick={this.handleChangeForm}> Sign up</span>
             </Text>
           </div>
           :
           <div className="sign-toggle">
             <Text txtPosition="center">
               Already have an have account?
               <span className="sign-toggle-text" id="signUp" onClick={this.handleChangeForm}> Sign in</span>
             </Text>
           </div>
          }

          <FacebookLogin />
        </Row>
       </LoginWrapper>
    )}
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeSignInForm,
    changeSignUpForm,
    logInCreator,
    signUpCreator
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    values: getFormValues('LoginReduxForm')(state),
    currentForm: state.currentForm,
    user: state.user,
    logStatus: state.logStatus
  }
}

LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)


export default reduxForm({
  form: 'LoginReduxForm',
  validate
})(LoginForm)



/*
//


           <div className="sign-toggle">
             <Text txtPosition="center">
               Already have account? <span className="sign-toggle-text">Sign in</span>
             </Text>
           </div>
*/
