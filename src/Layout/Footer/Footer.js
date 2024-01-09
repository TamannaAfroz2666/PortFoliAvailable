import React from 'react';
import './Footer.css';
import image1 from '../../assets/Images/Logo/Footer/Footer1.jpg'
import { Link } from 'react-router-dom'
import { BiLogoBehance, BiLogoDribbble } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";


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
                    <div className="socialIconContents">
                        <ul className='socialOfItem'>

                            <li className='listOfIcon'>
                                <Link className='linkIcon' to="./facebook">
                                    <FaFacebookF size={24} />

                                </Link>
                            </li>
                            <li className='listOfIcon'>
                                <Link className='linkIcon' to="./dribbles">
                                    <BiLogoDribbble size={24} />

                                </Link>
                            </li>
                            <li className='listOfIcon'>
                                <Link className='linkIcon' to="./behance">
                                    <BiLogoBehance size={24} />

                                </Link>
                            </li>
                            <li className='listOfIcon'>
                                <Link className='linkIcon' to="./linkin">
                                    <AiOutlineLinkedin size={24} />

                                </Link>
                            </li>
                            <li className='listOfIcon'>
                                <Link className='linkIcon' to="./instagram">
                                    <FaInstagram size={24} />
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="footerLine">
                        <hr  className='lineOfHr' />

                    </div>
                    <div className="termContents">
                        <div className="copyrightHead">
                            <p className='copyright'>Copyright 
                                <span><AiOutlineCopyrightCircle size={15} color='white'/> </span>
                                2023 Tom. All rights reserved.
                                </p>
                        </div>
                        <div className="termHead">
                            <ul className='termsBody'>
                                <li className='termsList'>
                                    <Link to='/termsCondition' className='termsTitle'> Terms & Condition</Link>
                                </li>

                                <li className='termsList'>
                                <Link to='/privacyPolicy' className='termsTitle'>
                                    Privacy Policy
                                </Link>
                                    
                                </li>

                            </ul>

                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Footer;