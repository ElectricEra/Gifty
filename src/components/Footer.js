import React from "react";
import {BasicWrapper} from './materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="page-footer" style={{background:this.props.user.theme}}>
        <BasicWrapper>
          <p>© 2017 EPAM FrontendLab6</p>
        </BasicWrapper>
      </footer>
    );
  }
};
const mapStateToProps = function(state) {
  return {
     user: state.user,
  };
}
export default connect(mapStateToProps)(Footer);
