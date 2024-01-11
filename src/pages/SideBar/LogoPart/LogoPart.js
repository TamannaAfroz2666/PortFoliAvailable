import React from 'react';
import './LogoPart.css';
import img1 from '../../../assets/Images/Logo/logo.jpg'
import { IoHomeOutline } from "react-icons/io5";

const LogoPart = () => {
    return (
        <div className='logoPart1'>
            <div className="sideLogoContainer">
                {/* logo part  */}
                <div className="logoPartContent1">
                    <div className="logoSide">
                        <img src={img1} alt="not found" />

                    </div>
                    <div className="nameSide">
                        <p className='name-title'>tamanna</p>
                    </div>
                </div>
                {/* sidebar add  */}
                {/* <h1 className='oo'>ooo</h1> */}
                <div className="sideNavBar">
                    <div className="sideNavCon">
                        <ul className='sideNavUi'>
                            <li className='sideNavLi'>
                                <span className='sideNavIconTi'>
                                <IoHomeOutline size={50}/>
                                </span>
                             <span className='sideNavTitleLi'> Home</span> 
                            </li>
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi'>
                                <IoHomeOutline size={50}/>
                                </span>
                             <span className='sideNavTitleLi'> Home</span> 
                            </li>
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi'>
                                <IoHomeOutline size={50}/>
                                </span>
                             <span className='sideNavTitleLi'> Home</span> 
                            </li>
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi'>
                                <IoHomeOutline size={50}/>
                                </span>
                             <span className='sideNavTitleLi'> Home</span> 
                            </li>
                            <li className='sideNavLi1'>
                                <span className='sideNavIconTi'>
                                <IoHomeOutline size={50}/>
                                </span>
                             <span className='sideNavTitleLi'> Home</span> 
                            </li>
                           
                           
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default LogoPart;