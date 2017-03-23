import React from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { DefaultBoxWrapper } from '../materialize';
import ProfileInfo from './ProfileInfo';
import ProfilePresents from './ProfilePresents';

class ProfileView extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if(this.props.logStatus.loggedIn === false) {
      browserHistory.push('/app');
    }
	}

	render() {
	  return (
  		<DefaultBoxWrapper>
  			<div className="col offset-s3 s6 l5">
  				<ProfileInfo name="JOHN" src="../../images/user.jpg"/>
  			</div>
  			<div className="col s12 l7">
  				<ProfilePresents gifts={[{src:"../../images/user.jpg","name":"Bobby1"},
            {src:"../../images/user.jpg","name":"Bobby2"}]}/>
  			</div>
  		</DefaultBoxWrapper>
	  )
  }
}

function mapStateToProps(state) {
  return {
    logStatus: state.logStatus
  }
}

export default connect(mapStateToProps)(ProfileView);
