import React from 'react';
import { DefaultBoxWrapper } from '../materialize';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import HistoryCollection from './HistoryCollection'

class HistoryView extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
	  return (
  		<DefaultBoxWrapper>
  		{console.log(this.props.history)}
  			<HistoryCollection history={this.props.history} />
  		</DefaultBoxWrapper>
	  )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}

function mapStateToProps({ history }) {
  return { history };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryView);