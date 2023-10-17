import React from 'react';
import './Header.css';
import { AiOutlineMenu } from "react-icons/ai";
// import logo2 from '../../assets/Images/Logo/logo2.jpg'
import logo from '../../assets/Images/Logo/logo.jpg';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

import { RxCross2 } from "react-icons/rx";

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
                            <li><a href="/about">About Me</a>
                                <hr className='underline1' color='yellow' />
                            </li>
                            <li>
                                <a href="/services">Services</a>
                                <hr className='underline1' color='yellow' />
                                <ul class="drop_menu">
                                    <li className='menu'>
                                        <a href="/services">Services</a>
                                    </li>
                                    <li className='menu1'>
                                        <a href="./servicesDetails">Services Details </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/portfolio">Portfolio</a>
                                <hr className='underline1' color='yellow' />
                                <ul class="drop_menu">
                                    <li className='menu'>
                                        <a href="/portfolio">Portfolio</a>
                                    </li>
                                    <li className='menu1'>
                                        <a href="./portfolioDetails">Portfolio Details </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/blogs">Blogs</a>
                                <hr className='underline1' color='yellow' />
                                <ul class="drop_menu">
                                    <li className='menu'>
                                        <a href="/blogs">Blogs</a>
                                    </li>
                                    <li className='menu1'>
                                        <a href="./blogsDetails">Blogs Details </a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="/contact">Contact</a>
                                <hr className='underline1' color='yellow' />
                            </li>


                        </ul>
                    </div>
                    <div className="menuLink">
                        <div className="wrapper">
                            <div className="menuBar">
                                <Button onClick={handleClick}>
                                    <AiOutlineMenu  color='white' size={35}/>
                                </Button>
                                <Snackbar
                                    open={open}
                                    autoHideDuration={6000}
                                    onClose={handleClose}
                                    message="Note archived"
                                    action={action}
                                />
                                {/* <AiOutlineMenu id='btnMenu' className='menu_btn' color='white' size={35} /> */}
                            </div>




                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Header;