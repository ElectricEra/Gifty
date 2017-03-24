import React from "react";
import { IndexLink, Link, browserHistory } from 'react-router';
import { BasicWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import GiftList from './GiftList';
import { resetGift, addToHistory } from '../../actions/index';
  
class GiftyGenerated extends React.Component {

  componentWillUnmount() {
    this.props.resetGift();
  }

  componentWillMount() {
    if(this.props.logStatus.loggedIn === false) {
      browserHistory.push('/app');
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
  return bindActionCreators({ resetGift, addToHistory }, dispatch);
}

function mapStateToProps({ gifts, logStatus }) {
  return { gifts, logStatus };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftyGenerated);
