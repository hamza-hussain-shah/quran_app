import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav>
    <div className="logo">

<img src="/src/assets/images/Group-25.png" alt="logo" />
    </div>
    <div className="navitem">
        
        <ul>
<li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#13B3AD" : "initial" })}>Home</NavLink></li>
<li><NavLink to="/packages" style={({ isActive }) => ({ color: isActive ? "#13B3AD" : "initial" })} >Packages</NavLink></li>
<li><NavLink to="/courses"  style={({ isActive }) => ({ color: isActive ? "#13B3AD" : "initial" })}>Courses</NavLink></li>
<li><NavLink to="/blog"  style={({ isActive }) => ({ color: isActive ? "#13B3AD" : "initial" })}>Blog</NavLink></li>
<li><NavLink to ="/contact"  style={({ isActive }) => ({ color: isActive ? "#13B3AD" : "initial" })}>Conatact</NavLink></li>

        </ul>
    </div>
        <p>#924567890</p>
   </nav>
  )
}

export default Navbar
