import React from "react";
import { IndexLink, Link, browserHistory } from 'react-router';
import { BasicWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import GiftList from './GiftList';
import { getGifts, resetGift, updateUser, giftProcess, saveLastPath } from '../../actions/index';

class GiftyGenerated extends React.Component {

  constructor(props) {
    super(props);

    this.state = {} 
  }

  componentWillUnmount() {
    this.props.resetGift();
    this.props.giftProcess(false);
  }

  componentWillMount() {
    if (!this.props.giftProcessState) {
      browserHistory.push('/app');
    }

    if(this.props.logStatus.loggedIn) {
      this.props.updateUser(this.props.user);
    }

    if (this.props.giftProcessState) {
      this.props.getGifts(false);
      this.props.giftProcess(false);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.gifts.length) {
      this.props.giftProcess(false);
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
  return bindActionCreators({ getGifts, resetGift, updateUser, giftProcess, saveLastPath }, dispatch);
}

function mapStateToProps({ user, gifts, logStatus, giftProcessState, prevPath }) {
  return { user, gifts, logStatus, giftProcessState, prevPath };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftyGenerated);
