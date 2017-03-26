import React from "react";
import { IndexLink, Link, browserHistory } from 'react-router';
import { BasicWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import GiftList from './GiftList';
import { resetGift, updateUser } from '../../actions/index';

class GiftyGenerated extends React.Component {

  componentWillUnmount() {
    this.props.resetGift();
  }

  componentWillMount() {
    if(this.props.logStatus.loggedIn === false) {
      // browserHistory.push('/app');
    } else {
      this.props.updateUser(this.props.user);
    }
  }

  render() {
    if(this.props.gifts.length === 0) {
      return <div className="loader">Loading...</div>
    }
    return <GiftList gifts={this.props.gifts} />
  }

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetGift, updateUser }, dispatch);
}

function mapStateToProps({ user, gifts, logStatus }) {
  return { user, gifts, logStatus };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftyGenerated);
