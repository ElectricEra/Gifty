import React from 'react';
import { DefaultBoxWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import {IndexLink, Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';

import { HistoryCollection } from './HistoryCollection'
//import { getGifts } from '../../actions/index'

class HistoryView extends React.Component {
	
	constructor(props) {
		super(props);

		this.generateOldGifts = this.generateOldGifts.bind(this);
	}

	generateOldGifts(index) {
		console.log(this.props.history);	
		//this.props.getGifts(...this.props.history[index]);
    console.log('Form submited');
    //browserHistory.push('/generated');
	}
	
	render() {
	  return (
  		<DefaultBoxWrapper>
  		{console.log(this.props.history)}
  			<HistoryCollection history={this.props.history} 
  				generateOldGifts={this.generateOldGifts} />
  		</DefaultBoxWrapper>
	  )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ /*getGifts*/ }, dispatch);
}

function mapStateToProps({ history }) {
  return { history };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryView);