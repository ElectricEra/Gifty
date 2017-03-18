import React from 'react'
import { GiftItem } from './GiftItem'
import { CarouselItem } from './CarouselItem'

export default class GiftList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	  $(".carousel").carousel();
	}
	render() {
	  return (
	  	<div>
	  	  <div>
	        <div className="row">
	          {this.props.gifts.map((gift,index) => <GiftItem key={index} {...gift}/>)}
	        </div>
	      </div>

	      <div className="carousel">
	        {this.props.gifts.map((gift,index) => <CarouselItem key={index} {...gift} />)}
	      </div>
	      
	    </div>
	  )
  	}
}
