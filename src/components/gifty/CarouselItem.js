import React from 'react';

export const CarouselItem = (props) => {

  return (
	<div className="carousel-item">
	  <a href={props.url} target="_blank">
	    <img src={props.img} className="helper-my-image-140" />
	  </a>
	  <p className="center">{props.price}</p>
	</div>

  )
}

