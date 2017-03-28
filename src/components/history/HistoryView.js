import React from 'react';
import { DefaultBoxWrapper, BasicWrapper, Row } from '../materialize';
import { bindActionCreators } from 'redux'
import {IndexLink, Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';

import { HistoryCollection } from './HistoryCollection'
import { giftProcess, getGifts, deleteFromHistory } from '../../actions/index'

class HistoryView extends React.Component {

	constructor(props) {
		super(props);

		this.generateOldGifts = this.generateOldGifts.bind(this);
    this.deleteFromHistoryHandler = this.deleteFromHistoryHandler.bind(this);
	}

  deleteFromHistoryHandler(index) {
    this.props.deleteFromHistory(index);
  }

	generateOldGifts(index) {
    this.props.giftProcess(true);
    this.props.getGifts(this.props.user.history[index]);
    browserHistory.push('/generated');
	}

  componentWillMount() {
    if(this.props.logStatus.loggedIn === false) {
      browserHistory.push('/app');
    }
  }

	render() {
	  return (
  		<BasicWrapper>
  			<HistoryCollection history={this.props.user.history}
  				generateOldGifts={this.generateOldGifts}
          deleteFromHistoryHandler={this.deleteFromHistoryHandler} />
  		</BasicWrapper>
	  )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getGifts, giftProcess, deleteFromHistory }, dispatch);
}

function mapStateToProps({ user, logStatus }) {
  return { user, logStatus };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryView);
