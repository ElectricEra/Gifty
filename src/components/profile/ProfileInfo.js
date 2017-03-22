import React from 'react';
import { ProfilePicture } from './ProfilePicture';
import { ProfileName } from './ProfileName';

export default class ProfileInfo extends React.Component {

	render() {
	  return (
	  	<div>
	  		<ProfilePicture img={this.props.src} />
	  		<ProfileName name={this.props.name} />
	  	</div>
	  )
  }
  
}