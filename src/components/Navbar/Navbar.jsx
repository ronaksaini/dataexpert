import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <div className="logo-container">
            <h2 className="logo">Data<span>Expert.</span></h2>
        </div>
        <div className="navlist">
                <div><Link to='/'className="nav-item">Home</Link></div>
                <div><Link to='/about'className="nav-item">About</Link></div>
                <button className="login-btn"onClick={()=>navigate('/signin')}>Login</button>
            </div>
      </div>
    </div>
  )
}

export default Navbar
