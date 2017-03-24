import React from 'react';

import { HistoryItem } from './HistoryItem';

export const HistoryCollection = (props) => {
  
  return (
      <div className="row">
        {props.history.map((gift, index) => {
            return (
              <div onClick={(index)=>{props.generateOldGifts(index)}}>
                <HistoryItem key={index} {...gift} />
              </div>
            )
          })
        }
      </div>
  )
  
}