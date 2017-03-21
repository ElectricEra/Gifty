import React from 'react';
import { DefaultBoxWrapper } from '../materialize';

export default class SettingsView extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
	  return (
  		<DefaultBoxWrapper>
  			<p>Settings</p>
  		</DefaultBoxWrapper>
	  )
  }
}