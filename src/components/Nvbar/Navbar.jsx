import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {

    const navlinkstyles=({isActive})=>{
        return{
            fontWeight: 'bold',
            textDecoration: isActive? 'underline':'none',
            textDecorationColor:isActive?  '#EE3A24': null,
            color: 'white'
        }
    }

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
        
    };

    const handleLinkClick = () => {
        setDropdownVisible(false);  
    };
    
  return (
        <nav>
        <div class="logo">
            <img src="https://www.saeiitbhu.in/images/navbar/SAEVectorWhite.svg" />
        </div>
        
        <div class="nav-items">
            <ul class="overview">
                <li><NavLink style={navlinkstyles} to='/'>Home</NavLink></li>
                <li><NavLink style={navlinkstyles} to='/events'>Events</NavLink></li>
                <li><NavLink style={navlinkstyles} to='/about'>About</NavLink></li>
                <li><NavLink style={navlinkstyles}  to='/blogs'>Blogs</NavLink></li>
                <li><NavLink style={navlinkstyles}  to='/projects'>Projects</NavLink></li>
            </ul>
          
        </div>
        <div className='small'>
            <a><button id="login"><NavLink style={navlinkstyles} to='/trident'>Trident</NavLink> </button></a>
                <div class="hamburger"onClick={toggleDropdown} >
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <ul className='dropdown-menu' style={{ display: isDropdownVisible ? "block" : "none" }} >

                    <li onClick={handleLinkClick}><NavLink style={navlinkstyles} to='/'>Home</NavLink></li>
                    <li onClick={handleLinkClick}><NavLink style={navlinkstyles} to='/events'>Events</NavLink></li>
                    <li onClick={handleLinkClick}><NavLink style={navlinkstyles} to='/about'>About</NavLink></li>
                    <li onClick={handleLinkClick}><NavLink style={navlinkstyles}  to='/blogs'>Blogs</NavLink></li>
                    <li onClick={handleLinkClick}><NavLink style={navlinkstyles}  to='/projects'>Projects</NavLink></li>
                </ul>
        </div>
        
    </nav>
    )
}
