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
    return (
      <BasicWrapper>
        <GiftList gifts={this.props.gifts[0]} />
      </BasicWrapper>
    )}
};


function mapStateToProps({ gifts }) {
  return { gifts };
}


export default connect(mapStateToProps)(GiftyGenerated);
