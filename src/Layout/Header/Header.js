import React from 'react';
import './Header.css';
import { AiOutlineMenu  } from "react-icons/ai";
// import logo2 from '../../assets/Images/Logo/logo2.jpg'
import logo from '../../assets/Images/Logo/logo.jpg';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";



const Header = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

     const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <RxCross2 fontSize="small" />
               
            </IconButton>
        </React.Fragment>
    );


    return (
        <div className="header">
            <div className='headerSub'>
                <div className="header-main">
                    <div className="logoPart">
                        <a href="#"><img src={logo} alt="not available" /></a>
                    </div>
                    <div className="navLinks">
                        <ul className='nav_links'>

                            <li>
                                {/* <a href="#" className='active'>Home</a> */}
                                <NavLink to='/'>Home</NavLink>
                                <hr className='underline'  size={10} />

                                <ul class="drop_menu">
                                    <li className='menu'>
                                        <NavLink to="/">Home Page 01</NavLink>

                                    </li>
                                    <li className='menu1'>
                                        <NavLink to="./page2">Home Page 02 </NavLink>
                                    </li>
                                </ul>

                            </li>
                            <li><NavLink smooth duration={500} to="about">About Me</NavLink>
                                <hr className='underline1' color='yellow' size={5} />
                              
                            </li>
                            
                            <li>
                                <NavLink to="/services">Services</NavLink>
                                <hr className='underline1' color='yellow' size={5} />
                                <ul class="drop_menu">
                                    <li className='menu'>
                                        <NavLink to="/services">Services</NavLink>
                                    </li>
                                    <li className='menu1'>
                                        <NavLink to="./servicesDetails">Services Details </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/portfolio">Portfolio</NavLink>
                                <hr className='underline1' color='yellow' size={5}/>
                                <ul class="drop_menu">
                                    <li className='menu'>
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                    </li>
                                    <li className='menu1'>
                                        <NavLink to="./portfolioDetails">Portfolio Details </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/blogs">Blogs</NavLink>
                                <hr className='underline1' color='yellow' size={5} />
                                <ul class="drop_menu">
                                    <li className='menu'>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                    </li>
                                    <li className='menu1'>
                                        <NavLink to="./blogsDetails">Blogs Details </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li><NavLink to="/contact">Contact</NavLink>
                                <hr className='underline1' color='yellow' size={5} />
                            </li>


                        </ul>
                    </div>
                    <div className="menuLink">
                        <div className="wrapper">
                            <div className="menuBar">
                                <Button onClick={handleClick}>
                                    <AiOutlineMenu className='menuIcon' />
                                </Button>
                                <Snackbar
                                    open={open}
                                    autoHideDuration={6000}
                                    onClose={handleClose}
                                    message="Note archived"
                                    action={action}
                                />

                            </div>




                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Header;