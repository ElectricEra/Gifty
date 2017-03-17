import React from "react";
import {IndexLink, Link} from 'react-router';
import {BasicWrapper} from '../materialize';
import { connect } from 'react-redux';
import { GiftList } from './GiftList';

class GiftyGenerated extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.gifts.length === 0) {
      console.log('Loading...');
      return <div>Loading...</div>
    }
    return (
      <BasicWrapper>
        <GiftList gifts={this.props.gifts} />
      </BasicWrapper>
    )}
};


function mapStateToProps({ gifts }) {
  return { gifts };
}


export default connect(mapStateToProps)(GiftyGenerated);
