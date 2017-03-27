import React from "react";
import {IndexLink, Link} from 'react-router';
import {NavbarWrapper, BasicWrapper} from './materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { logOutCreator } from '../actions/index'


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleHideSideNav = this.handleHideSideNav.bind(this);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  handleLogOut() {
    this.props.logOutCreator();
  }

  handleHideSideNav(event) {
    let tag = event.target.tagName;

    if(tag === 'A') {
      $('.button-collapse').sideNav('hide');
    }
  }

  render() {
    const { logStatus, user } = this.props;

    switch(logStatus.loggedIn) {
      case 'facebook':

        return  (
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
                  <li><Link to="login" onClick={this.handleLogOut}>Log out</Link></li>
                </ul>
            </NavbarWrapper>
            <ul id="slide-out" className="side-nav" onClick={this.handleHideSideNav}>
                <li><div className="userView">
                  <div className="background">
                    <img src="images/menu-bg.png" />
                  </div>
                  <a href="#!user"><img className="circle" src="images/user-1.jpg" /></a>
                  <a href="#!name"><span className="white-text name">{user.name}</span></a>
                  <a href="#!email"><span className="white-text email">{user.email}</span></a>
                </div></li>
                <li><Link to="app">Gifty</Link></li>
                <li><Link to="profile">Profile</Link></li>
                <li><Link to="history">History</Link></li>
                <li><Link to="friends">Friends</Link></li>
                <li><Link to="settings">Settings</Link></li>
                <li><div className="divider"></div></li>
                <li><Link className="waves-effect" to="app" onClick={this.handleLogOut}>Log out</Link></li>
              </ul>
            </div>
        )
        
        break;
      case true:

        return  (
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
                  <li><Link to="settings">Settings</Link></li>
                  <li><Link to="login" onClick={this.handleLogOut}>Log out</Link></li>
                </ul>
            </NavbarWrapper>
            <ul id="slide-out" className="side-nav" onClick={this.handleHideSideNav}>
                <li><div className="userView">
                  <div className="background">
                    <img src="images/menu-bg.png" />
                  </div>
                  <a href="#!user"><img className="circle" src="images/user-1.jpg" /></a>
                  <a href="#!name"><span className="white-text name">{user.name}</span></a>
                  <a href="#!email"><span className="white-text email">{user.email}</span></a>
                </div></li>
                <li><Link to="app">Gifty</Link></li>
                <li><Link to="profile">Profile</Link></li>
                <li><Link to="history">History</Link></li>
                <li><Link to="settings">Settings</Link></li>
                <li><div className="divider"></div></li>
                <li><Link className="waves-effect" to="app" onClick={this.handleLogOut}>Log out</Link></li>
              </ul>
            </div>
        )
        
        break;

      default:
      
        return (
          <div className="navbar">
            <NavbarWrapper>
                <Link to="app" className="brand-logo">
                  <img className="logo" src="images/gifty-white.svg" alt="Gifty"/>
                </Link>
                <Link to="#" data-activates="slide-out" className="button-collapse navbar-hamburger">
                  &#9776;
                </Link>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="login">Log in</Link></li>
                </ul>
            </NavbarWrapper>
            <ul id="slide-out" className="side-nav" onClick={this.handleHideSideNav}>
                <li><div className="userView">
                  <div className="background">
                    <img src="images/menu-bg.png" />
                  </div>
                  <Link to="login" className="side-nav-login"><span className="white-text">Log In</span></Link>
                </div></li>
                <li><Link to="app">Gifty</Link></li>
                <li><div className="divider"></div></li>
            </ul>
          </div>
        )
    }
  }
};

function mapStateToProps(state) {
  return {
    logStatus: state.logStatus,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logOutCreator
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);



/*
<ul className="side-nav" id="mobile-demo">
<li><a href="profile">Profile</a></li>
<li><Link to="history">History</Link></li>
<li><Link to="friends">Friends</Link></li>
<li><Link to="settings">Settings</Link></li>

<li><Link to="login">Log in</Link></li>
</ul>

*/
