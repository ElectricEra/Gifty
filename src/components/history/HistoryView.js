import React from 'react';
import { DefaultBoxWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import {IndexLink, Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';

import { HistoryCollection } from './HistoryCollection'
import { giftProcess, getGifts } from '../../actions/index'

class HistoryView extends React.Component {

	constructor(props) {
		super(props);

		this.generateOldGifts = this.generateOldGifts.bind(this);
	}

	generateOldGifts(index) {
    this.props.giftProcess("GENERATING");
    this.props.getGifts(this.props.user.history[index]);
    console.log('Form submited');
    browserHistory.push('/generated');
	}

  componentWillMount() {
    if(this.props.logStatus.loggedIn === false) {
      browserHistory.push('/app');
    }
    console.log("CompWillMount")
    this.props.giftProcess("WAIT");
  }

	render() {
	  return (
  		<DefaultBoxWrapper>
  			<HistoryCollection history={this.props.user.history} 
  				generateOldGifts={this.generateOldGifts} />
  		</DefaultBoxWrapper>
	  )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getGifts, giftProcess }, dispatch);
}

function mapStateToProps({ user, logStatus }) {
  return { user, logStatus };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryView);
