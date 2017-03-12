import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import GiftyForm from './gifty/GiftyForm'
import {BasicWrapper, LoginWrapper} from './materialize';

export default class GiftyApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleGenerate = this.handleGenerate.bind(this)
  }

  handleGenerate() {
    console.log('yeee');
  }

  render() {
    return (
      <GiftyForm onGenerate = {this.handleGenerate}/>
    );
  }

};
