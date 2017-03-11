import React from "react";
import {IndexLink, Link} from 'react-router';
import {NavbarWrapper, BasicWrapper} from './materialize';
import { connect } from 'react-redux';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <NavbarWrapper>
          <BasicWrapper>
            <Link href="#" className="brand-logo">Gifty</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link href="#">Profile</Link></li>
                <li><Link href="#">Settings</Link></li>

                <li><Link href="#">Log in</Link></li>
            </ul>
          </BasicWrapper>
        </NavbarWrapper>
      </div>
    );
  }

};
