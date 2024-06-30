import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const Header = () => {
  return (
    

    <nav>
      <div className="container nav-container">
          <Link to="/" className="nav-logo">
            <img src={Logo} alt="" />
          </Link>
          <ul className="nav-menu">
            <li><Link to="/profile">User Name</Link></li>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/logout" className='logout'>Logout</Link></li>
          </ul>
          <button className='nav-toggle-btn'>
            <AiOutlineClose/>
          </button>
      </div>
    </nav>
  )
}

export default Header
