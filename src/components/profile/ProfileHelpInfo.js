import React from 'react';
import {Link} from 'react-router'

export const ProfileHelpInfo = (props) => {
  	return (
        <div className="card blue lighten-2">
            <div className="card-content white-text">
                <span className="card-title">Instructions</span>
                <p> 
                    Юріям - чебурек.<br/>
                    Роксолані - chocolate
                </p>
            </div>
            <div className="card-action">
                <Link onClick={props.onClick} to={props.to}>Close</Link>
            </div>
        </div>
    )
}
