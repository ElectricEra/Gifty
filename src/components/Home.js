import React from "react";
import GiftyApp from "./GiftyApp";
import Login from "./Login";
import {BasicWrapper} from './materialize';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <BasicWrapper>
          {this.props.children}
        </BasicWrapper>
      </div>
    );
  }

};
