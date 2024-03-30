import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate=useNavigate();
  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-text-container">
            <h1>Unleash <span>the</span> Power of your Information <br /> with <span>DataExpert</span></h1>
            <p>Navigate your data journey effortlessly with DataExpert, where users can effortlessly add, manage, and export their data, ensuring a streamlined and efficient data-driven experience.</p>
            <div><button className="explore-btn"onClick={()=>navigate('/add-employee')}>Explore Now</button>
        </div></div>
      </div>
    </div>
  )
}

export default Header
