import React from 'react'
import {BasicWrapper, Row} from './materialize';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="not-found">
        <BasicWrapper>
          <Row>
          <h2>Oops...Page not found</h2>
          </Row>
        </BasicWrapper>
      </div>
    );
  }
};
