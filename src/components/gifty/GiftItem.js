import React from 'react';

export const GiftItem = (props) => {
  $(".carousel").carousel();
  return (
      <div className="card-panel my-our-propositions">
        <a href={props.name}>
          {console.log(props.name)}
          <div className="row center">
          	<img src='../../images/gifty-blue.svg' className="helper-my-image-140" />
            {props.name}
          </div>
          <p className="center">{props.id}</p>
        </a>
      </div>
  )
}
