import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import GiftyForm from './gifty/GiftyForm'
import {BasicWrapper, LoginWrapper} from './materialize';
// import actions

export default class GiftyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  // generateGifts = () => {
  //     this.props.dispatch(this.actions.generateGifts())
  // }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
      ///////////////
      // <input type="text" onClick={} />
    );
  }

};
