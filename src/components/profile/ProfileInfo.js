import React from 'react';
import { ProfilePicture } from './ProfilePicture';
import { ProfileName } from './ProfileName';

export default class ProfileInfo extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
	  return (
	  	<div>
	  		<ProfilePicture img={this.props.img} />
	  		<ProfileName name={this.props.name} />
	  	</div>
	  )
  	}
}