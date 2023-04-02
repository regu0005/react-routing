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