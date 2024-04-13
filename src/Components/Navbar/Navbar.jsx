import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo 1.png'


export const Navbar = () => {
  return (
    <nav className='fixed top-0 left-5'>
        <img src={logo} alt=""  className="h-20 ml-6 mt-4"/>
    </nav>
  )
}

export default Navbar