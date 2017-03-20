import React from 'react'
import { GiftItem } from './GiftItem'

export default class GiftList extends React.Component {
	constructor(props) {
		super(props);
		this.displayCarousel.bind(this)
	}

	componentDidMount() {
	  	$(".carousel").carousel();
	  	$(".carousel").toggleClass("display-none");
	}

	displayCarousel(i) {
		$(".carousel").eq(i).toggleClass("display-none");
		$(".carousel").eq(i).toggleClass("col l7 s12");
	  	$(".my-our-propositions").eq(i).toggleClass("col l5 s12 my-our-propositions-offset")
	}

	render() {
	  return (
	  	<div>
	  		{console.log(this.props.gifts)}
	        <div className="row">
	          {this.props.gifts.map((gift,index) => <GiftItem key={index} index={index} displayCarousel={this.displayCarousel} {...gift}/>)}
	        </div>
	    </div>
	  )
  	}
}
