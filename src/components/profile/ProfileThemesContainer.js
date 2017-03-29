import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from '../../styles/scss/styles.scss';
import { ProfileTheme } from './ProfileTheme';
import  {updateTheme}  from '../../actions/index';
import { updateUser } from '../../actions/index';
import { IndexLink, Link, browserHistory } from 'react-router';

class ProfileThemesContainer extends React.Component {
  
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

  componentWillUnmount() {
    this.props.dispatch(updateUser(this.props.user));
  }

	componentDidMount() {

	}

	handleClick(e) {
		let id = e.target.id;
		let theme;
		switch (id) {
			case "theme_0": theme = styles.theme_0;
			      break;
			case "theme_1": theme = styles.theme_1;
			      break;
			case "theme_2": theme = styles.theme_2;
			      break;
			case "theme_3": theme = styles.theme_3;
			      break;
			case "theme_4": theme = styles.theme_4;
			      break;
			case "theme_5": theme = styles.theme_5;
			      break;
		}

		this.props.dispatch(updateTheme(theme));
	}

	render() {
	  return (
	  	<div className="center theme-picker">
					<div className="col s12 m12 l12 theme-picker-list">
					<div className="card">
					<p className="col s12 m12 l12 theme-picker-label">Choose a theme color</p>
		  		<ProfileTheme id="theme_1" style= {{background: styles.theme_1}} onClick={this.handleClick} />
					<ProfileTheme id="theme_2" style= {{background: styles.theme_2}} onClick={this.handleClick} />
					<ProfileTheme id="theme_3" style= {{background: styles.theme_3}} onClick={this.handleClick} />
					<ProfileTheme id="theme_5" style= {{background: styles.theme_5}} onClick={this.handleClick} />
					<ProfileTheme id="theme_0" style= {{background: styles.theme_0}} onClick={this.handleClick} />
					</div>
				</div>
			</div>
	  )
  	}
}

/*
<ProfileTheme id="theme_4" style= {{background: styles.theme_4}} onClick={this.handleClick} />

*/

const mapStateToProps = function(state) {
  return {
     user: state.user,
  };
}
export default connect(mapStateToProps)(ProfileThemesContainer);
