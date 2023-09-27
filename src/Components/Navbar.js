import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../Styles/Navbar.css'
import { useState } from 'react'

export const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
        <Link to='/' className='title'>TO-DO LIST </Link>
        <div className='Menu' onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
        <li>
               <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to ='/signup'>Signup</NavLink>
            </li>
            <li>
                <NavLink to ='/todolist'>Todo-list</NavLink>
            </li>
        </ul>
    </nav>
  )
}