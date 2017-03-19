import React from 'react'
import { CarouselItem } from './CarouselItem'

export const GiftItem = (props) => {
  return (
      <div>
        <div className="card-panel my-our-propositions center" onClick={props.displayCarousel.bind(this,props.index)}>
          <div className="row center">
          	<img src={props.img} className="helper-my-image-140" />
          </div>
          <p className="center">{props.name}</p>
        </div>

        <div className="carousel display-none">
          {props.ebay.map((gift,index) => <CarouselItem key={index} {...gift} />)}
        </div>

      </div>
  )
}
