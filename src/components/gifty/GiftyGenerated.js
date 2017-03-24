import React from "react";
import { IndexLink, Link, browserHistory } from 'react-router';
import { BasicWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import GiftList from './GiftList';
import { resetGift, addToHistory } from '../../actions/index';

class GiftyGenerated extends React.Component {

  constructor(props) {
    super(props);

    this.addToHistoryHandler = this.addToHistoryHandler.bind(this)
  }

  redirectToMain() {
    browserHistory.push('/app');
  }

  addToHistoryHandler(data) {
    this.props.addToHistory(data)
  }

  // componentWillMount() {
  //   if(this.props.isFirstTime) {
  //     this.redirectToMain();
  //   }
  // }

  componentWillUnmount() {
    this.props.resetGift();
  }

  render() {
    if(this.props.gifts.length === 0) {
      return <div className="loader">Loading...</div>
    }
    return <GiftList gifts={this.props.gifts} 
            addToHistory={this.addToHistoryHandler} />
  }

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetGift, addToHistory }, dispatch);
}

function mapStateToProps({ gifts, isFirstTime }) {
  return { gifts, isFirstTime };
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftyGenerated);