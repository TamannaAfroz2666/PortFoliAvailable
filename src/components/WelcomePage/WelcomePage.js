import React from 'react';
import './WelcomePage.css';
// import fish1 from '../../assets/Images/Logo/3d-basketball-essentials.jpg';
import { CgMail } from "react-icons/cg";
import { BsArrowRightCircle } from "react-icons/bs";

import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
// import { FaBeer } from "react-icons/fa";

const WelcomePage = () => {

    // const messagePart = () => {
    //     console.log('hello world');
    // }
    return (
        <div className='welcome'>
            <div className="pageHead">
                <div className="infoSection">
                    <div className="personalInfo">
                        <p className='sort_title'>Welcome To My World</p>

                        <div className="scrollerHead">
                            <div className="scroller">
                                <span>
                                    <h3 className='hey'>Hey </h3><br />
                                    <h2 className='name'>I'm Tamanna Afroz</h2>  <br />
                                    <small className='frontEnd'>Front-End Developer</small>

                                </span>
                            </div>

                        </div>

                        <p className='descriptionInfoWel'>
                            As a Front-End Developer, I take great pride in my work and am devoted to it. I've gained the abilities and know-how required to see your project through to completion.
                        </p>

                        <div id="frameDiv">

                            <span className='span' id="fish1"> * </span>

                            <svg className='svg' fill="none" stroke="orange" stroke-width="5" stroke-dasharray="5,8">
                                <path d="M 50 80 C 150 -20 250 180 350 80" />

                            </svg>
                        </div>


                    </div>
                    <div className="contactInfo">
                        <div className="backgroundPart">
                            <div className="btnInfo1">

                                <Button className='button' variant="outlined" startIcon={<CgMail className='mailIcon' size={45} />}>

                                    Message
                                    <BsArrowRightCircle color='black'  className='arrowIcon' size={30} />
                                </Button>

                            </div>


                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default WelcomePage;