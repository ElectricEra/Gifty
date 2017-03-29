import React from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { Row } from '../materialize';
import ProfileThemesContainer from './ProfileThemesContainer';

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
				<div className="col s12 m12 l12 profile">
					<div className="profile-info">
						<img
							src={user.picture ? user.picture : "images/user-2.jpg"}
							className="profile-info-picture"/>

						<p className="profile-info-name">{user.name}</p>
						<p className="profile-info-email">{user.email}</p>

						<div className="card">
							<div className="profile-info-stats">
								<i className="material-icons">list</i>
								<i className="material-icons">perm_identity</i>
								<i className="material-icons">done</i>
							</div>

							<div className="profile-info-stats">
								<span className="stats">Hstory: 54</span>
								<span className="stats">Friend: 10</span>
								<span className="stats">Gifts: 40</span>
							</div>
						</div>
					</div>
					<ProfileThemesContainer/>
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
