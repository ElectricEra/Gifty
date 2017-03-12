import React from "react";
import {LoginWrapper} from '../materialize';

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
            <div className="input-field col s6">
                <input id="firstName" type="text" className="validate" onChange={this.handleInputChange}/>
                <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
                <input id="lastName" type="text" className="validate" onChange={this.handleInputChange}/>
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-field col s12">
                <input id="email" type="email" className="validate" onChange={this.handleInputChange}/>
                <label htmlFor="email" data-error="Look's like you made a mistake">Email</label>
            </div>
            <div className="input-field col s12">
                <input id="password" type="password" className="validate" onChange={this.handleInputChange}/>
                <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12 center">
                <a className="waves-effect waves-light btn my-theme-color my-button" onClick = {this.handleSubmitForm}>Register</a>
            </div>
        </div>
       </LoginWrapper>
    )}
};
