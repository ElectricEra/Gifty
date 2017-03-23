import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <ul className="collection">

      {props.friends.map(user => {

        return (
          <li key={user.id} className="collection-item friend" onClick={props.handleFriend.bind(null, user.id)} >
            <div className='center'>
              <img src={user.picture.data.url} alt="pic" className="circle" />
              <h5>{user.name}</h5>              
              <p>Birtday: {user.birthday.slice(0, 5)}</p>
            </div>
          </li>
        );

      })}

    </ul>
  );
}
