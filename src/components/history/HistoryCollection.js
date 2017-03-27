import React from 'react';
import { HistoryItem } from './HistoryItem';

export const HistoryCollection = (props) => {
  
  return (
      <div className="row center">
        {props.history.length?props.history.map((gift, id) => 
          <div onClick={()=>{props.generateOldGifts(id)}} key={id}>
            <HistoryItem {...gift} index={id} 
            	deleteFromHistoryHandler={props.deleteFromHistoryHandler}/>
          </div> 
        ):<div className="center">
        		<img src="./images/gift.png" className="helper-my-image-120"/>
        		<p>No history right now...</p>
        	</div>}
      </div>
  )
  
}