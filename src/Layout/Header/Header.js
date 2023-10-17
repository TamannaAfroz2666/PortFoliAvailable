import React from 'react';
import './Header.css';
import { AiOutlineMenu } from "react-icons/ai";
import logo2 from '../../assets/Images/Logo/logo2.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className='headerSub'>

                <div className="header-main">
                    <div className="logoPart">
                        <a href="#"><img src={logo2} alt="not available" /></a>
                    </div>
                    <div className="navLinks">
                        <ul className='nav_links'>

                            <li>
                                <a href="#" className='active'>Home</a>
                                <hr className='underline' color='yellow' />

                                <ul class="drop_menu">
                                    <li className='menu'>
                                        <a href="/first">Home Page 01</a>
                                    </li>
                                    <li className='menu1'>
                                        <a href="./manage">Home Page 02 </a>
                                    </li>
                                </ul>

                            </li>


                            <li><a href="/about">About Me</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/blogs">Blogs</a></li>
                            <li><a href="/contact">Contact</a></li>

                        </ul>
                    </div>
                    <div className="menuLink">
                        <div className="menuBar">
                            <AiOutlineMenu color='white' size={25} />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Header;