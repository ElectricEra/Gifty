import React from 'react';

export default function(props) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  return (
    <div>
    
      {props.friends.map(user => {
        if (!user.birthday){

          return (          
            <div key={user.id} className="card-panel row friend" onClick={props.handleFriend.bind(null, user.id)} >
              <div className='center'>
                <img src={user.picture.data.url} alt="pic" className="circle" />
                <h5>{user.name}</h5>
              </div>
            </div>
          );

        }
        return (          
          <div key={user.id} className="card-panel row friend" onClick={props.handleFriend.bind(null, user.id, user.picture.data.url)} >
            <div className='center'>
              <img src={user.picture.data.url} alt="pic" className="circle" />
              <h5>{user.name}</h5>
              <p>Birthday: {+user.birthday.slice(3, 5)} {monthNames[user.birthday.slice(0, 2) - 1]}</p>
            </div>
          </div>
        );

      })}

    </div>
  );
}
