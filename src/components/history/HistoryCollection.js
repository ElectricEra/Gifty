import React from 'react';
import { HistoryItem } from './HistoryItem';

export const HistoryCollection = (props) => {
  
  return (
      <div className="row">
        {props.history.map((gift, id) => 
          <div onClick={()=>{props.generateOldGifts(id)}} key={id}>
            <HistoryItem {...gift} index={id} 
            	deleteFromHistoryHandler={props.deleteFromHistoryHandler}/>
          </div> 
        )}
      </div>
  )
  
}