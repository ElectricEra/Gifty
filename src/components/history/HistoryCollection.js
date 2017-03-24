import React from 'react';

import { HistoryItem } from './HistoryItem';

export default class HistoryCollection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        
        <div className="row">
          {this.props.history.forEach(function(gift, index){
            console.log(gift.name);
              return (
                <div className="card-panel my-our-propositions center">
                  {console.log(gift.name)}
                  <div className="row center my-image-box">
                    <img src={gift.img} className="helper-my-image-120 my-select-none" />
                  </div>
                  <p className="center my-select-none">{gift.name}</p> 
                </div>
              )
            }
              
            )
          }

        </div>

      </div>
    )

  }

}