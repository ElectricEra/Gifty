import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BasicWrapper } from "./materialize/index"


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Navbar />
          <BasicWrapper>
            {this.props.children}
          </BasicWrapper>
        <Footer />
      </div>
    )
  }
}
