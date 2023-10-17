import React from 'react';
import './Header.css';
import logo from '../../assets/Images/Logo/logo.jpg';
import { AiOutlineMenu } from "react-icons/ai";
import logo2 from '../../assets/Images/Logo/logo2.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-main">
                <div className="logoPart">
                    <img src={logo2} alt="not available" />
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
                <div className="menuLink">
                    <div className="menuBar">
                        <AiOutlineMenu /> 
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;