import React from 'react';
import './Footer.css';
import image1 from '../../assets/Images/Logo/Footer/Footer1.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footerHead'>
            <div className="footerBody">
                <div className="footerContent">
                    <div className="footerImage">
                        <img src={image1} alt="" />
                    </div>
                    <div className="contentList">
                        <ul className='listOfItem'>
                            <li className='listOfTitle'>
                                <Link className='link' to="./home"
                                >Home</Link>
                            </li>
                            <li className='listOfTitle'>
                                <Link className='link' to="./about"
                                >About me</Link>
                            </li>
                            <li className='listOfTitle'>
                                <Link className='link' to="./service"
                                >Services</Link>
                            </li>
                            <li className='listOfTitle'>
                                <Link className='link' to="./portfolio"
                                >Portfolio</Link>
                            </li>
                            <li className='listOfTitle'>
                                <Link className='link' to="./blog"
                                >Blog</Link>
                            </li>
                            <li className='listOfTitle'>
                                <Link className='link' to="./Contact"
                                >Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;