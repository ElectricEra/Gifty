import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import {LoginWrapper} from '../materialize';

export default class GiftyForm extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <LoginWrapper>
        <div className="row center gifty-form">
            <img src="images/gifty-blue.svg" alt="Gifty" className="valign my-profile-image-login" />
        </div>
        <div className="row center">
            <span>Describe a person, who will recieve a gift</span>
        </div>
        <div className="row">
          <div className="input-field col s12">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" className="validate" />
          </div>
            <div className="input-field col s12">
                <div className="center">
                    <span className="my-checkbox-padding">
                        <input name="group1" type="radio" id="male" />
                        <label htmlFor="male">Male</label>
                    </span>
                    <span className="my-checkbox-padding">
                        <input name="group1" type="radio" id="female" />
                        <label htmlFor="female">Female</label>
                    </span>
                </div>
            </div>
            <div className="input-field col s12">
                <label htmlFor="number">Age</label>
                <input id="number" type="number" className="validate" />
            </div>
            <div className="input-field col s12">
                <label htmlFor="price">How much are you ready to spend?</label>
                <input id="price" type="number" className="validate" />
            </div>
            <div claclassNamess="input-field col s12">
                <select multiple>
                    <option value="sport">Sport</option>
                    <option value="travel">Travel</option>
                    <option value="gadgets">Gadgets</option>
                </select>
            </div>
            <div className="input-field col s12 center" onClick={this.props.onGenerate}>
                <a className="waves-effect waves-light btn my-theme-color my-button">Generate</a>
            </div>
         </div>
       </LoginWrapper>
    )}
};
