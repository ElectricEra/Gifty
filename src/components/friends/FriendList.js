import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';

import {LoginWrapper, Logo, } from '../materialize';
import {Row} from '../materialize';
import FriendList from './user-list'

export default class FriendListView extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriend = this.handleFriend.bind(this);
    this.state = {
      friends: [
        {
          id: "1213922765330248",
          name: "Юрій Данилевич",
          picture: {
            data:{
              url:"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12993516_968423489880178_3312180938734337082_n.jpg?oh=3e648533e0ccf3b6756eb55a31a1f56c&oe=59619040"
            }
          }
        },
        {
          id: "1287709277944565",
          name: "Roksolana Yasynevych",
          picture: {
            data:{
              url:"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/14956051_1164091850306309_739022048876137729_n.jpg?oh=f222b6f1b5c9656c88498efdb42ce69b&oe=59538DF2"
            }
          }
        },
        {
          id: "756869654480026",
          name: "Yuriy Pankiv",
          picture: {
            data:{
              url:"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/13754315_627879230712403_6912702353736773732_n.jpg?oh=6643eca76fe58a132a3c84e0d29916ac&oe=592A223D"
            }
          }
        }
      ]
    }
  }
  

  handleFriend(id) {
    getQuery(id)
  }  
  

  render() {
    return (
      
        <LoginWrapper>
          <Logo imgSrc="images/gifty-blue.svg" />
          <Row>
            <FriendList friends={this.state.friends} handleFriend={this.handleFriend} />
           </Row>
         </LoginWrapper>
    
    )}
};