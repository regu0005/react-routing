import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

export const NavBar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/' activeclassname='active'>
            Home
        </NavLink>
        <NavLink to='/users' activeclassname='active'>
            Users
        </NavLink>
        <NavLink to='/appliances' activeclassname='active'>
            Appliances
        </NavLink>
        <NavLink to='/beers' activeclassname='active'>
            Beers
        </NavLink>
    </nav>
  )
}
