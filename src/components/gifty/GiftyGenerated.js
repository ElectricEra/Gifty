import React from "react";
import { IndexLink, Link, browserHistory } from 'react-router';
import { BasicWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import GiftList from './GiftList';
import { getGifts, resetGift, updateUser, giftProcess } from '../../actions/index';

class GiftyGenerated extends React.Component {

  constructor(props) {
    super(props);

    this.state = {} 
  }

  componentWillUnmount() {
    this.props.resetGift();
  }

  componentWillMount() {
    if (this.props.giftProcessState === "WAIT") {
      browserHistory.push('/app');
    }

    if(this.props.logStatus.loggedIn === true) {
      this.props.updateUser(this.props.user);
    }

    if (this.props.giftProcessState === "GENERATING") {
      this.props.getGifts(false);
    }
  }

  componentWillReceiveProps() {
    if (this.props.gifts.length !== 0) {
      this.props.giftProcess("WAIT");
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
  return bindActionCreators({ getGifts, resetGift, updateUser, giftProcess }, dispatch);
}

function mapStateToProps({ user, gifts, logStatus, giftProcessState }) {
  return { user, gifts, logStatus, giftProcessState };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftyGenerated);
