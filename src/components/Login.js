import React from "react";
import {IndexLink, Link} from 'react-router';
import {BasicWrapper, LoginWrapper} from './materialize';
import { connect } from 'react-redux';


export default class Login extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <LoginWrapper>
         <div className="row center">
             <img src="images/gifty.png" alt="Gifty" className="valign my-profile-image-login" />
         </div>
         <div className="row center">
             <span className="black-text">Welcome to gifty!</span>
         </div>
         <div className="row">
             <div className="input-field col s6">
                 <input id="first_name" type="text" className="validate" />
                 <label htmlFor="first_name">First Name</label>
             </div>
             <div className="input-field col s6">
                 <input id="last_name" type="text" className="validate" />
                 <label htmlFor="last_name">Last Name</label>
             </div>
             <div claclassNamess="input-field col s12">
                 <input id="email" type="email" cclassNamelass="validate" />
                 <label htmlFor="email" data-error="Look's like you made a mistake">Email</label>
             </div>
             <div className="input-field col s12">
                 <input id="password" type="password" className="validate" />
                 <label htmlFor="password">Password</label>
             </div>
             <div className="input-field col s12 center">
                 <a className="waves-effect waves-light btn my-theme-color">Register</a>
             </div>
         </div>
        </LoginWrapper>
      </div>
    );
  }

};
