import React from 'react';
import { DefaultBoxWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import {IndexLink, Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';

import { HistoryCollection } from './HistoryCollection'
import { getGifts } from '../../actions/index'

class HistoryView extends React.Component {
	
	constructor(props) {
		super(props);

		this.generateOldGifts = this.generateOldGifts.bind(this);
	}

	generateOldGifts(index) {
		this.props.getGifts(this.props.history[index]);
    console.log('Form submited');
    browserHistory.push('/generated');
	}

	redirectToMain() {
    browserHistory.push('/app');
  }

  componentWillMount() {
    if (this.props.isFirstTime) {
      this.redirectToMain();
    }
  }
	
	render() {
	  return (
  		<DefaultBoxWrapper>
  			<HistoryCollection history={this.props.history} 
  				generateOldGifts={this.generateOldGifts} />
  		</DefaultBoxWrapper>
	  )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getGifts }, dispatch);
}

function mapStateToProps({ history, isFirstTime }) {
  return { history, isFirstTime };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryView);