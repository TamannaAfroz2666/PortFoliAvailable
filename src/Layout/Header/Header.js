import React from 'react';
import './Header.css';
import logo from '../../assets/Images/Logo/logo.jpg';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-main">
                <div className="logoPart">
                    <img src={logo} alt="not available" />
                </div>
                <div className="navLinks">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="/about">About Me</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/contact">Contact</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;