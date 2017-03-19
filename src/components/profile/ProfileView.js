import React from 'react';
import { BasicWrapper, LoginWrapper } from '../materialize';
import ProfileInfo from './ProfileInfo';
import ProfilePresents from './ProfilePresents';

export default class ProfileView extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
	  return (
	  	<BasicWrapper>
	  		<LoginWrapper>
	  			<div className="col offset-s3 s6 l5">
	  				<ProfileInfo name="JOHN" src="https://static1.squarespace.com/static/563cc892e4b04c0de4499553/57b33d3b59cc6873eeba99da/57b33d3b59cc6873eeba99dc/1462383623393/Video+Client+-+Gifty+Logo.jpg"/>
	  			</div>
	  			<div className="col s12 l7">
	  				<ProfilePresents gifts={[{src:"https://static1.squarespace.com/static/563cc892e4b04c0de4499553/57b33d3b59cc6873eeba99da/57b33d3b59cc6873eeba99dc/1462383623393/Video+Client+-+Gifty+Logo.jpg"},{src:"https://static1.squarespace.com/static/563cc892e4b04c0de4499553/57b33d3b59cc6873eeba99da/57b33d3b59cc6873eeba99dc/1462383623393/Video+Client+-+Gifty+Logo.jpg"}]}/>
	  			</div>
	  		</LoginWrapper>
	  	</BasicWrapper>
	  )
  	}
}