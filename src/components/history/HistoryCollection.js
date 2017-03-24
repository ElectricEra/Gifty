import React from 'react';

import { HistoryItem } from './HistoryItem';

export const HistoryCollection = (props) => {
  
  return (
      <div className="row">
        {props.history.map((gift, id) => {
            return (
              <div onClick={()=>{props.generateOldGifts(id)}}>
                <HistoryItem {...gift} />
              </div>
            )
          })
        }
      </div>
  )
  
}