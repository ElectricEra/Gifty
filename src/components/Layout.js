import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import App from "./App.js";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Header />
        <App />
        <Footer />
      </div>
    )
  }

}
