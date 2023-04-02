import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Users = ( { users } ) => {
 
  return (
    <>
    <div className='content-wrap'>
        <div className='title'>
          <h1>Users List</h1>
        </div>

        <div className='left-block'>
            <ul className="user-list">
              {
                users.map((user) => (
                  <Link key={user.id} to={`/users/${user.id}`} >
                    <li>
                      {user.name} {user.first_name} {user.last_name}
                    </li>
                  </Link>
                ))
              }
            </ul>
        </div>

        <div className="right-block">
          <Outlet />
        </div>
    </div>
    </>
  )
}