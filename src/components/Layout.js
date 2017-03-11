import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}
