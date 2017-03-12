import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import {BasicWrapper} from '../materialize';

export default class GiftyForm extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <BasicWrapper>
        <p>Gifts</p>
      </BasicWrapper>
    )}
};
