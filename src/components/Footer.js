import React from "react";
import {BasicWrapper} from './materialize'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="page-footer">
        <div className="row my-footer">
            <div className="footer-copyright">
                <BasicWrapper>
                    <p>© 2017 EPAM FrontendLab6</p>
                </BasicWrapper>
            </div>
        </div>
    </footer>
    );
  }

};
