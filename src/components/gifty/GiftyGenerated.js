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

  render() {
    if(this.props.gifts.length === 0) {
      if(this.props.isFirstTimeOnOurWebsiteTryingToFingSomeNiceGiftsForFrendsOrParentsOrDogOnWebsiteGiftyWhichIFindReallyInterestingAndHelpful) {
        this.redirectToMain();
      }
      return <div className="loader">Loading...</div>
    }
    return (
        <GiftList gifts={this.props.gifts} />
    )}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetGift }, dispatch);
}

function mapStateToProps({ gifts, isFirstTimeOnOurWebsiteTryingToFingSomeNiceGiftsForFrendsOrParentsOrDogOnWebsiteGiftyWhichIFindReallyInterestingAndHelpful }) {
  return { gifts, isFirstTimeOnOurWebsiteTryingToFingSomeNiceGiftsForFrendsOrParentsOrDogOnWebsiteGiftyWhichIFindReallyInterestingAndHelpful };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftyGenerated);
