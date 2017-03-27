import React from 'react';

export const HistoryItem = (props) => {
  
  return (
    <div className="card-panel row">
      <div className="col s12 m3 center valign row">
        <img src={props.picture} /> 
      </div>
    	<div className="col s12 m9 row">
        <div className="col s12 m11">
          <p>You wanted to find present for <b>{props.name}</b>. It's 
          {props.gender=="male"? " his" : " her"} <b>{props.age}</b>'s anniversary!
          You were ready to spend <b>{props.price}$</b> on a present</p>
          <p><b>{props.tags.length?"Your friend likes "+ props.tags.reduce((a, b) => a + ", " +b):"Your friend has no interests"}</b></p>
        </div>
        <div className="col s12 m1 center">
          <i className="material-icons" onClick={(e)=>{e.stopPropagation();props.deleteFromHistoryHandler(props.index)}}>delete</i>
        </div>
    	</div>
    </div>
  )

}
