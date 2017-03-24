import React from "react";
import {IndexLink, Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriends } from '../../actions/index';
import { getGifts, firstEntrance, addToHistory } from '../../actions/index';

import {DefaultBoxWrapper, Logo} from '../materialize';
import {Row} from '../materialize';
import FriendView from './FriendView';


class FriendListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriend = this.handleFriend.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.updateFriends = this.updateFriends.bind(this);
    this.state = {      
      found: this.props.user.friends
    }
  }
  
  componentWillMount() {
    if(this.props.logStatus.loggedIn === false) {
      browserHistory.push('/app');
    }

    if(FBInitialized()){
     this.updateFriends();
    } else {
      initFb().then(() =>  this.updateFriends());
    }      
  }

  updateFriends(){
    facebookLogged().then(() => {
        getFriends().then(data => {
          this.props.addFriends(data);
          this.setState({found: data});
          this.handleSearch({target:{value:''}});
        })
      })
  }

  handleFriend(id) {
    getQuery(id, this.refs.price.value).then(query => {
      this.props.getGifts(query);
      this.props.firstEntrance();
      this.props.addToHistory(query);
      browserHistory.push('/generated');
    })
    
  }

  handleSearch(event) {
    var result = this.props.user.friends.filter(function(friend){
      return friend.name.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
    });
    this.setState({found: result});
  }
  

  render() {
    return (
      
        <DefaultBoxWrapper>
          <Logo imgSrc="images/gift.png" />
          <Row>
            <div className='input-field col s9'>
              <input type="text" placeholder="Search" onChange={this.handleSearch} />
            </div>
            <div className='input-field col s3'>
              <input type="number" placeholder='Max price' ref='price' />
            </div>  
            <FriendView friends={this.state.found} handleFriend={this.handleFriend} />
           </Row>
         </DefaultBoxWrapper>
    
    )}
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFriends, getGifts, firstEntrance, addToHistory }, dispatch);
}

function mapStateToProps({ user, logStatus, history }) {
  return { user, logStatus, history };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendListContainer);