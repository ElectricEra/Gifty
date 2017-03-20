import React from 'react'
import { CarouselItem } from './CarouselItem'

export const GiftItem = (props) => {
  return (
      <div className="row">
        <div className="card-panel my-our-propositions center my-select-none" onClick={props.displayCarousel.bind(this,props.index)}>
          <div className="row center my-image-box">
          	<img src={props.img} className="helper-my-image-120" />
          </div>
          <p className="center my-select-none">{props.name}</p>
        </div>
        <div className="center">
          <div className="carousel center">
            {props.ebay.map((gift,index) => <CarouselItem key={index} {...gift} />)}
          </div>
        </div>
      </div>
  )
}
