import React from 'react';
import { DefaultBoxWrapper } from '../materialize';

export default class HistoryView extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
	  return (
  		<DefaultBoxWrapper>
  			<p>History</p>
  		</DefaultBoxWrapper>
	  )
  }
}