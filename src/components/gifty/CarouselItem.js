import React from 'react';

export const CarouselItem = (props) => {

  return (
		<div className="carousel-item card-panel">
	  	<a href={props.url} target="_blank">
	  		<div className="my-image-wrapper">
	    		<img src={props.img} className="helper-my-image my-select-none" />
	    	</div>
	  	</a>
	  	<p className="center my-select-none">{props.price}</p>
		</div>
  )

}