import React from 'react';
import './WelcomePage.css';
import fish1 from '../../assets/Images/Logo/3d-basketball-essentials.jpg';
import { AiOutlineRight } from "react-icons/ai";

const WelcomePage = () => {
    return (
        <div className='welcome'>
            <div className="pageHead">
                <div className="infoSection">
                    <div className="personalInfo">
                        <p className='sort_title'>Welcome To My World</p>
                        <h1 className='nameTitle'>Hey, I'm Tamanna! <br /> Creative Front-End Developer</h1>
                        <p className='descriptionInfo'>
                            I'm a Front-End Develpoer & I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success.
                        </p>

                        <div id="frameDiv">
                            {/* <img id="fish1"  alt="fish" /> */}
                            <span className='span' id="fish1">enjoy</span>

                            <svg fill="none" stroke="orange" stroke-width="3" stroke-dasharray="5,5">
                                <path d="M 50 80 C 150 -20 250 180 350 80" />

                            </svg>
                        </div>


                    </div>
                    <div className="contactInfo">
                        <div className="backgroundPart">

                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default WelcomePage;