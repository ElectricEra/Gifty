import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logInCreator } from '../../actions/index';
import fb from '../../facebook/fbApi';

class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  login() {
  	FB.init({
      appId      : '381020565615954',
      xfbml      : true,
      cookie     : true,
      version    : 'v2.8'
    });
  	FB.login((response) => {
      if(response.status === 'connected'){
        fb.getInfo().then(data => {
          let user = {
            facebook: data.id,
            name: data.name,
            picture: data.picture.data.url
          }
          this.props.logInCreator(user);
        });       
      };
    },
  		{scope: 'email,publish_actions,user_about_me,user_birthday,user_friends,user_games_activity,user_likes,user_posts,user_actions.books,user_actions.fitness,user_events,user_actions.music'});


  }

  render() {
    return (

      <div onClick={() => this.login()} className='center' >
      	<img alt='facebooklogin' src='images/facebookLogin.png' className='facebooklogin' />
      </div>

    )}
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logInCreator
  }, dispatch)
}


export default connect(
  null,
  mapDispatchToProps
)(FacebookLogin)
