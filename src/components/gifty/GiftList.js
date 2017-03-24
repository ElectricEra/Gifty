import React from 'react';
import { GiftItem } from './GiftItem';

export default class GiftList extends React.Component {

  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this)
  }
    
  componentDidMount() {
    $(".carousel").carousel();
  }

  onClickHandler(index) {
    console.log("Click");
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.props.gifts.map((gift,index) => <GiftItem key={index}
              index={index} {...gift} onClickHandler={this.onClickHandler}/>)}
        </div>
      </div>
    )
  }

}
