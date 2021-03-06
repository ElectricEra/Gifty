import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import GiftyForm from './gifty/GiftyForm'
import {BasicWrapper, LoginWrapper} from './materialize';

export default class GiftyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};
