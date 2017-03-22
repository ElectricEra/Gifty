import React from 'react';
import { GiftItem } from './GiftItem';

export default class GiftList extends React.Component {

	componentDidMount() {
	  	$(".carousel").carousel();
	}

	render() {
	  return (
  		<div>
        <div className="row">
         	{this.props.gifts.map((gift,index) => <GiftItem key={index} 
         			index={index} {...gift}/>)}
        	</div>
    	</div>
	  )
  }

}
