import React from 'react';

export const HistoryItem = (props) => {
  
  return (
    <div className="card-panel my-our-propositions center">
      {console.log(props.gift.name)}
      <div className="row center my-image-box">
        <img src={props.gift.img} className="helper-my-image-120 my-select-none" />
      </div>
      <p className="center my-select-none">{props.gift.name}</p> 
    </div>
  )

}
