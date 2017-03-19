import React from 'react';
import { ProfileGift } from './ProfileGift';

export default class ProfilePresents extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
	  return (
	  	<div>
	  		<span>
	  			Presents you would like to get
	  		</span>
	  		{this.props.gifts.map(gift=>{
	  			<ProfileGift {...gift} />
	  		})}
	  	</div>
	  )
  	}
}