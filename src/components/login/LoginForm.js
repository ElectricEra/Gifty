import React from "react";
import {LoginWrapper, InputWrapper, InputWrapperSmall} from '../materialize';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    this.setState({
      [name] : [value]
    })
  }

  handleSubmitForm() {
    console.log(this.state);
  }

  render() {
    return (
      <LoginWrapper>
        <div className="row center">
            <img src="images/gifty-blue.svg" alt="Gifty" className="valign my-profile-image-login" />
        </div>
        <div className="row">
            <InputWrapperSmall>
                <input id="firstName" type="text" className="validate" onChange={this.handleInputChange}/>
                <label htmlFor="firstName">First Name</label>
            </InputWrapperSmall>
            <InputWrapperSmall>
                <input id="lastName" type="text" className="validate" onChange={this.handleInputChange}/>
                <label htmlFor="lastName">Last Name</label>
            </InputWrapperSmall>
            <InputWrapper>
                <input id="email" type="email" className="validate" onChange={this.handleInputChange}/>
                <label htmlFor="email" data-error="Look's like you made a mistake">Email</label>
            </InputWrapper>
            <InputWrapper>
                <input id="password" type="password" className="validate" onChange={this.handleInputChange}/>
                <label htmlFor="password">Password</label>
            </InputWrapper>
            <InputWrapper>
                <a className="waves-effect waves-light btn my-theme-color my-button" onClick = {this.handleSubmitForm}>Register</a>
            </InputWrapper>
        </div>
       </LoginWrapper>
    )}
};
