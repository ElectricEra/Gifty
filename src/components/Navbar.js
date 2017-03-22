import React from "react";
import {IndexLink, Link} from 'react-router';
import {NavbarWrapper, BasicWrapper} from './materialize';
import { connect } from 'react-redux';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
    // $('.button-collapse').click(this.removeOverlay);
  }

  removeOverlay() {
    // $('div[id^=sidenav-overlay]').remove();
  }

  render() {
    return (
      <div className="navbar">
        <NavbarWrapper>
            <Link to="app" className="brand-logo">
              <img className="logo" src="images/gifty-white.svg" alt="Gifty"/>
            </Link>
            <Link to="#" data-activates="slide-out" className="button-collapse">
              &#9776;
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="profile">Profile</Link></li>
              <li><Link to="history">History</Link></li>
              <li><Link to="friends">Friends</Link></li>
              <li><Link to="settings">Settings</Link></li>
              <li><Link to="login">Log in</Link></li>
            </ul>
        </NavbarWrapper>
        <ul id="slide-out" className="side-nav">
            <li><div className="userView">
              <div className="background">
                <img src="images/menu-bg.png" />
              </div>
              <a href="#!user"><img className="circle" src="images/user.jpg" /></a>
              <a href="#!name"><span className="white-text name">John Doe</span></a>
              <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="history">History</Link></li>
            <li><Link to="friends">Friends</Link></li>
            <li><Link to="settings">Settings</Link></li>
            <li><div className="divider"></div></li>
            <li><Link className="waves-effect" to="login">Log out</Link></li>
          </ul>
      </div>
    );
  }
};

/*


<ul className="side-nav" id="mobile-demo">
<li><a href="profile">Profile</a></li>
<li><Link to="history">History</Link></li>
<li><Link to="friends">Friends</Link></li>
<li><Link to="settings">Settings</Link></li>

<li><Link to="login">Log in</Link></li>
</ul>

*/
