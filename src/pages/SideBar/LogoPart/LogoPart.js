import React from 'react';
import './LogoPart.css';
import img1 from '../../../assets/Images/Logo/logo.jpg'
import { IoHomeOutline } from "react-icons/io5";
import { LiaAddressBook } from "react-icons/lia";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { FaPenNib } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { RxGithubLogo } from "react-icons/rx";
import { PiUserSquare } from "react-icons/pi";

const LogoPart = () => {
    return (
        <div className='logoPart1'>
            <div className="sideLogoContainer">
                {/* logo part  */}
                <div className="logoPartContent1">
                    <div className="logoSide">
                        <a href="/home-page-multi">
                        <img src={img1} alt="not found" />
                        </a>
                    </div>
                    <div className="nameSide">
                    <a href="/home-page-multi">
                        <p className='name-title'>tamanna</p>
                        </a>
                    </div>
                </div>
                {/* sidebar add  */}
                {/* <h1 className='oo'>ooo</h1> */}
                <div className="sideNavBar">
                    <div className="sideNavCon">
                        <ul className='sideNavUi'>
                            <li className='sideNavLi'>
                                <span className='sideNavIconTi'>
                                <IoHomeOutline size={22}/>
                                </span>
                                <a href="#homePage">
                             <span className='sideNavTitleLi'> Home</span> </a>
                            </li>
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi1'>
                                <LiaAddressBook size={22}/>
                                </span>
                                <a href="#aboutPage">
                             <span className='sideNavTitleLi'> about me</span></a> 
                            </li>
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi1'>
                                <PiShoppingBagOpenThin size={20}/>
                                </span>
                                <a href="#servicePageMulti">
                             <span className='sideNavTitleLi'>service </span></a> 
                            </li>
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi1'>
                                <FaPenNib size={20}/>
                                </span>
                                <a href="#skillsPageMulti">
                             <span className='sideNavTitleLi'> skills</span> </a>
                            </li>
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi1'>
                                <TiMessages size={20}/>
                                </span>
                                <a href="#portfolioPageMulti">
                             <span className='sideNavTitleLi'> portfolio</span> </a>
                            </li>
                            {/* <li className='sideNavLi1'>
                                <span className='sideNavIconTi1'>
                                <RxGithubLogo size={50}/>
                                </span>
                             <span className='sideNavTitleLi'> blog</span> 
                            </li> */}
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi1'>
                                <PiUserSquare size={20}/>
                                </span>
                                <a href="#contactPageMulti">
                             <span className='sideNavTitleLi'> contact</span> </a>
                            </li>
                           
                           
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default LogoPart;