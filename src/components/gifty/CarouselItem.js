import React from 'react';

export const CarouselItem = (props) => {

  return (
	<div className="carousel-item card-panel">
	  <a href={props.url} target="_blank">
	    <img src={props.img} className="helper-my-image-120 my-select-none" />
	  </a>
	  <p className="center my-select-none">{props.price}</p>
	</div>

  )
}

