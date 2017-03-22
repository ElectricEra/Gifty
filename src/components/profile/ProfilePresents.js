import React from 'react';
import { ProfileGift } from './ProfileGift';

export default class ProfilePresents extends React.Component {

	render() {
	  return (
	  	<div className="center">
	  		<span>Presents you would like to get</span>
	  		<div>
		  		{this.props.gifts.map(gift=>{
		  			return <ProfileGift {...gift} />
		  		})}
	  		</div>
	  	</div>
	  )
  }

}