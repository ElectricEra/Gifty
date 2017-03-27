import React from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { Row } from '../materialize';
import ProfileInfo from './ProfileInfo';
import ProfilePresents from './ProfilePresents';
import ProfileThemesContainer from './ProfileThemesContainer';
import ProfileHelp from './ProfileHelp';

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
		const { user } = this.props;

	  return (
  		<Row>
			<div className="col s12 m2 l2"></div>
			<div className="col s12 m8 l8 profile">
					<div className="card">
						<div className="card-image">
							<img src="images/user-1.jpg" />
							<span className="card-title">{user.name}</span>
							<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">mode_edit</i></a>
						</div>
						<div className="card-content">
							<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
						</div>
					</div>
					<ProfileThemesContainer/>
					<ProfileHelp/>
				</div>

  		</Row>
	  )
  }
}

function mapStateToProps(state) {
  return {
    logStatus: state.logStatus,
		user: state.user
  }
}

export default connect(mapStateToProps)(ProfileView);


	// <div className="col offset-s3 s6 l5">
	// 	<ProfileInfo name="JOHN" src="../../images/user.jpg"/>
	// </div>

		//
		// <div className="col s12 m6">
		// 	<ProfilePresents gifts={[{src:"../../images/user.jpg","name":"Bobby1"},
		// 		{src:"../../images/user.jpg","name":"Bobby2"}]}/>
		// </div>
