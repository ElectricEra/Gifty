import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logInCreator, updateUser } from '../../actions/index';
import fb from '../../facebook/fbApi';

class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  login() {
    fb.login().then(() => {
        fb.getInfo().then(data => {
          let user = {
            facebook: data.id,
            name: data.name,
            picture: data.picture.data.url
          }
          this.props.logInCreator(user);
          this.props.updateUser(user);
        });
      });
  }

  render() {
    return (
      <div onClick={() => this.login()} className='center' >
      	<img alt='facebooklogin' src='images/facebookSignIn.png' className='facebooklogin' />
      </div>

    )}
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logInCreator,
    updateUser
  }, dispatch)
}


export default connect(
  null,
  mapDispatchToProps
)(FacebookLogin)
