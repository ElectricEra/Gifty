import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriends } from '../../actions/index';
import { getGifts } from '../../actions/index';

import {LoginWrapper, Logo} from '../materialize';
import {Row} from '../materialize';
import FriendList from './user-list';


class FriendListView extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriend = this.handleFriend.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {      
      found: []
    }
  }
  
  componentDidMount() {
    getFriends().then(data => {
      this.props.addFriends(data);
      this.setState({found: data});
    })
  }

  handleFriend(id) {
    getQuery(id).then(query => {
      this.props.getGifts(query)
    })
    
  }

  handleSearch(event) {
    var result = this.props.friends.filter(function(friend){
      return friend.name.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
    })
    this.setState({found: result});
  }
  

  render() {
    return (
      
        <LoginWrapper>
          <Logo imgSrc="images/gifty-blue.svg" />
          <Row>
            <input type="text" placeholder="Search" onChange={this.handleSearch} />
            <FriendList friends={this.state.found} handleFriend={this.handleFriend} />
           </Row>
         </LoginWrapper>
    
    )}
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFriends, getGifts }, dispatch);
}

function mapStateToProps({ friends }) {
  return { friends };
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendListView);