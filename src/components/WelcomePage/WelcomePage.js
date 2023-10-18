import React from 'react';
import './WelcomePage.css';
import fish1 from '../../assets/Images/Logo/3d-basketball-essentials.jpg';


const WelcomePage = () => {
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
                                    <h2 className='name'>I'm Tamanna</h2>  <br />
                                    <small className='frontEnd'>Front-End Developer</small>

                                </span>
                            </div>

                        </div>

                        {/* <h1 className='nameTitle'>Hey, I'm Tamanna! <br /> Creative Front-End Developer</h1> */}
                        <p className='descriptionInfo'>
                            I'm a Front-End Develpoer & I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success.
                        </p>

                        <div id="frameDiv">
                          
                            <span className='span' id="fish1"> * </span>

                            <svg fill="none" stroke="orange" stroke-width="5" stroke-dasharray="5,8">
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