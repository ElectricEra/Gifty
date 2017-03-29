import React from 'react';

export const CarouselItem = (props) => {

  return (
		<div className="carousel-item card-panel">
	  	<a href={props.url} target="_blank">
	  		<div className="my-image-wrapper">
	  			{props.img !== "http://thumbs1.ebaystatic.com/pict/04040_0.jpg" ? 
	    			<img src={props.img} className="helper-my-image my-select-none" /> :
	    			<img src="../images/giftBlurry.png" className="helper-my-image my-select-none" />
	    		}
	    	</div>
	  	</a>
	  	<p className="center my-select">{$.trim(props.name).substring(0, 30).split(" ").slice(0, -1).join(" ")}</p>
	  	<p className="center my-select-none">{props.price}$</p>
		</div>
  )

}