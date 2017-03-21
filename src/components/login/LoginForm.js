import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { Logo, Text } from '../materialize'
import { SubmitButton } from '../materialize'
import { Row, TextInput, LoginWrapper, Form } from '../materialize'
import { validate } from '../../utils/utils_login/index'
import { changeSignInForm, changeSignUpForm } from '../../actions/index'


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleInputChange(event) {
    console.log('changed');
  }

  handleSubmitForm(event) {
    console.log('Form submited');
    console.log(this.props.values);
  }

  handleChangeForm(event) {
    let id = event.target.id;
    id === 'signIn' ? this.props.changeSignInForm() : this.props.changeSignUpForm();
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
          <Form onSubmit={handleSubmit(this.handleSubmitForm)}>

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
              {currentForm === 'signIn' ? 'Log In' : 'Register'}
            </SubmitButton>
           </Form>
        </Row>
        <Row>
          {currentForm === 'signIn' ?
           <div className="sign-toggle">
             <Text txtPosition="center">
               Dont have an have account?
               <span className="sign-toggle-text" id="signIn" onClick={this.handleChangeForm}>Sign up</span>
             </Text>
           </div>
           :
           <div className="sign-toggle">
             <Text txtPosition="center">
               Already have an have account?
               <span className="sign-toggle-text" id="signUp" onClick={this.handleChangeForm}>Sign in</span>
             </Text>
           </div>
         }
        </Row>
       </LoginWrapper>
    )}
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeSignInForm, changeSignUpForm }, dispatch)
}

function mapStateToProps(state) {
  return {
    values: getFormValues('LoginReduxForm')(state),
    currentForm: state.currentForm
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



           <div className="sign-toggle">
             <Text txtPosition="center">
               Already have account? <span className="sign-toggle-text">Sign in</span>
             </Text>
           </div>
*/
