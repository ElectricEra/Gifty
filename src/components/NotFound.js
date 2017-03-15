import React from 'react'
import {BasicWrapper} from './materialize';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="not-found">
        <BasicWrapper>
          <div className="row center">
          <h2>Oops...Page not found</h2>
          </div>
        </BasicWrapper>
      </div>
    );
  }
};
