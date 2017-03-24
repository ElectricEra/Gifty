import React from 'react';

export const HistoryItem = (props) => {
  
  return (
    	<div className="card-panel row">
    		<div className="col s12">
    			<p>You wanted to find present for <b>{props.name}</b>. It's 
    			{props.gender=="male"? " his" : " her"} <b>{props.age}</b>'s birthday!.
    			You were ready to spend <b>{props.price}$</b> on a present</p>
    			<p>Your friend likes <b>{props.tags.reduce((a, b) => a + ", " +b)}</b></p>
    		</div>
    	</div>
  )

}
