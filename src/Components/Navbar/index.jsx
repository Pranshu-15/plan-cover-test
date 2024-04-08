import React from 'react'
import './style.css'
import Button from '../Button'

const Navbar = () => {
  return (
    
    <div className='navbar'>
    <div className='nav-left'>
    <ul>
        <li><img src='https://images.unsplash.com/photo-1611488006018-95b79a137ff5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></li>
        <li><h1>Logo</h1></li>
    </ul>
      
      
    </div>
      <div className='nav-right'>
        <ul>
            <li>Home</li>
            <li>Page</li>
            <li>Features</li>
            <li>How it Works</li>
            <li>Screenshot</li>
            <li>Pricing</li>
            <li><Button text = "Download"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
