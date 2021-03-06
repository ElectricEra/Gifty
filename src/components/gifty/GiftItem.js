import React from 'react';
import { CarouselItem } from './CarouselItem';

export const GiftItem = (props) => {
  if (!props.ebay){
    return (
      <div className="row">
        <div className="col s12 l4">
          <div className="card-panel my-our-propositions center">
            <div className="row center my-image-box">
              <img src={props.img} className="helper-my-image-120 my-select-none" />
            </div>
            <p className="center my-select-none">{props.name}</p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="row">
      <div className="col s12 l4">
        <div className="card-panel my-our-propositions center">
          <div className="row center my-image-box">
            <img src={props.img} className="helper-my-image-120 my-select-none" />
          </div>
          <p className="center my-select-none">{props.name}</p>
        </div>
      </div>
      <div className="col s12 l8">
        <div className="center">
          <div className="carousel center">
            {props.ebay.map((gift, index) => <CarouselItem key={index} {...gift} />)}
          </div>
        </div>
      </div>
    </div>
  )

}
