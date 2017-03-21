import React from 'react';
import { DefaultBoxWrapper } from '../materialize';
import ProfileInfo from './ProfileInfo';
import ProfilePresents from './ProfilePresents';

export default class ProfileView extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
	  return (
  		<DefaultBoxWrapper>
  			<div className="col offset-s3 s6 l5">
  				<ProfileInfo name="JOHN" src="../../images/user.jpg"/>
  			</div>
  			<div className="col s12 l7">
  				<ProfilePresents gifts={[{src:"../../images/user.jpg","name":"Bobby1"},{src:"../../images/user.jpg","name":"Bobby2"}]}/>
  			</div>
  		</DefaultBoxWrapper>
	  )
  }
}