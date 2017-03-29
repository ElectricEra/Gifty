import React from 'react';

export const HistoryItem = (props) => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return (
    <div className="card-panel row history">
      <div className="col s12 m4 center valign row history-user-picture">
        <img src={props.picture} className="row"/>
        { props.date ? <div><div className="center">Search date:</div>
          <div className="row center"><b>{props.date.day} {monthNames[props.date.month]} {props.date.year}</b></div></div>:
          <div className="row center">No date</div>
        }
      </div>
    	<div className="col s12 m8 row">
        <div className="col s12 m11 history-user-info">
          <p>You wanted to find present for <b>{props.name}</b>. It's
          {props.gender=="male"? " his" : " her"} <b>{props.age}</b>'s!
          You were ready to spend <b>{props.price}$</b> on a present</p>
          <p><b>{props.tags.length?"Your friend likes "+ props.tags.reduce((a, b) => a + ", " +b):"Your friend has no interests"}</b></p>
        </div>
        <div className="col s12 m1 center history-delete-item">
          <i className="material-icons" onClick={(e)=>{e.stopPropagation();props.deleteFromHistoryHandler(props.index)}}>delete</i>
        </div>
    	</div>
    </div>
  )

}
