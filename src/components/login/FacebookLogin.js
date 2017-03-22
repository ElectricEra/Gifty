import React from "react";

export default class FacebookLogin extends React.Component {
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
  	FB.login(function(response) {console.log(response)}, 
  		{scope: 'email,publish_actions,user_about_me,user_birthday,user_friends,user_games_activity,user_likes,user_posts,user_actions.books,user_actions.fitness,user_events,user_actions.music'});
    
  }

  render() {
    return (

      <div onClick={() => this.login()} className='center' >
      	<img alt='facebooklogin' src='../../images/facebooklogin.png' className='facebooklogin' />
      </div>

    )}
};