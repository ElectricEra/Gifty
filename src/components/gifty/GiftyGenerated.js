import React from "react";
import {IndexLink, Link} from 'react-router';
import {BasicWrapper} from '../materialize';
import { connect } from 'react-redux';
import GiftList from './GiftList';

class GiftyGenerated extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.gifts.length === 0) {
      return <div className="loader">Loading...</div>
    }
    return (
        <GiftList gifts={this.props.gifts} />
    )}
};

function mapStateToProps({ gifts }) {
  return { gifts };
}

export default connect(mapStateToProps)(GiftyGenerated);
