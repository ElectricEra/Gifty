import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../materialize';
import {ProfileHelpInfo} from './ProfileHelpInfo';


class ProfileHelp extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			open: false,
		}
	    this.openClose = this. openClose.bind(this);
	}
	openClose (e) {
		this.setState({open: !this.state.open})
	}
    render() {
	  return (
  		<div className="row center">
            <Button onClick= {this.openClose}> Help </Button>
            <div className="col s12"> 
               { this.state.open ? <ProfileHelpInfo onClick= {this.openClose}/> : null }      
            </div>

        </div>
	  )
    }
}

export default ProfileHelp;
