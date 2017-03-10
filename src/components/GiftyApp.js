import React from "react";
import {GiftyForm, GiftyLogo} from './gifty'

export default class GiftyApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gifty-app">
        <GiftyLogo />
        <GiftyForm> hey </GiftyForm>
      </div>
    );
  }

};
