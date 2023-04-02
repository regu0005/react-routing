import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Appliances = ( {appliances} ) => {
  
    return (
        <>
        <div className='content-wrap'>
            <div className='title'>
              <h1>Appliances List</h1>
            </div>
    
            <div className='left-block'>
                <ul className="user-list">
                  {
                    appliances.map((appliance) => (
                      <Link key={appliance.id} to={`/appliances/${appliance.id}`} >
                        <li>
                              {appliance.equipment} 
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
