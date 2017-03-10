import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import GiftyApp from "./GiftyApp";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Header />
        <GiftyApp />
        <Footer />
      </div>
    )
  }

}
