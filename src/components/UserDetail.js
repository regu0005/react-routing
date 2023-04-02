import React from 'react';
import { useParams } from 'react-router-dom';

export const UserDetail = ({ users }) => {
    const { id } = useParams();
    const user = users.find(user => user.id === parseInt(id));
  
    return (
      <div>
        <h1>User Details</h1>
        {user ? (
          <div>
            <p>ID: {user.id}</p>
            <p>Name: {user.first_name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Employment: {user.employment.title}</p>
            <p>Date of Birth: {user.date_of_birth}</p>
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    );
  };


// import React from 'react';

// const UserDetail = ({ user }) => {
//   return (
//     <div>
//       <h1>User Details</h1>
//       <p>ID: {user.id}</p>
//       <p>Name: {user.first_name}</p>
//     </div>
//   );
// };

// export default UserDetail;

// import React, { useEffect, useState } from 'react'

// export const UserDetail = ( {match} ) => {
    
//     const [user, setUser] = useState({});

//   return (
//     <div>
//         <h1>User Detail</h1>
//         <h2>{user.first_name} {user.last_name}</h2>
//         <p>{user.email}</p>
//         <p>{user.phone_number}</p>
//         <p>{user.address}</p>
//     </div>
//   )
// }
