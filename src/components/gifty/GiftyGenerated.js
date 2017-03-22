
import React from "react";
import {IndexLink, Link, browserHistory} from 'react-router';
import {BasicWrapper} from '../materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import GiftList from './GiftList';
import { resetGift } from '../../actions/index';

class GiftyGenerated extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.resetGift();
  }

  redirectToMain() {
    browserHistory.push('/app');
  }

  componentWillMount() {
      if(this.props.isFirstTime) {
        this.redirectToMain();
      }
  }

  render() {
    if(this.props.gifts.length === 0) {
      return <div className="loader">Loading...</div>
    }
    return (
        <GiftList gifts={this.props.gifts} />
    )}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetGift }, dispatch);
}

function mapStateToProps({ gifts, isFirstTime }) {
  return { gifts, isFirstTime };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftyGenerated);
