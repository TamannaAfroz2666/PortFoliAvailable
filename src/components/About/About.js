import React from 'react';
import './About.css';
import {ContactWrapper} from './AboutElement';
import image from '../../assets/Images/Background/ABOUT.jpg'
// import { IoIosArrowForward } from "react-icons/io";
// import { AiFillApple } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from '@mui/material';


const About = () => {
    return (
        <div className="aboutSection">
            <div className='aboutAll flex' id="about" name="about">
            <div className="aboutAllInfo">
                <div className="imageInfo">
                    <img src={image} alt="image" />

                </div>
                <div className="informationAll">
                    <div className="titleAbout">
                        <h3 className='aboutMeTitle'>About Me</h3>
                        <h1 className='title  animated animatedFadeInUp fadeInUp'> Front End Developer <br />From Bangladesh</h1>
                        <p className='descriptionAbout'> I'm a designer & developer with a passion for web design. I developing simple , clean and slick websites that provide real value to the end user. It is a long established fact that a reader will be destructed readable content of a page when looking layout. </p>

                        <div className="contactAbout">
                            <div className="btnAbout">
                                <button>Contact Me</button>

                            </div>
                            <div className="workList">
                                <div className="works">

                                    <a href="/works">
                                        <Button className='btnWorks'>
                                            My Works
                                            <span >
                                                <MdKeyboardArrowRight size={35} className='arrowRight1' />
                                            </span>
                                        </Button>
                                    </a>
                                </div>





                            </div>
                        </div>

                        <div className="birthInfo">
                            <div className="birthInfoHeading">
                                <p>Born in</p>
                                <span>Bangladesh</span>

                            </div>
                            <div className="birthInfoHeading">
                                <p>Experience</p>
                                <span>1 Year</span>

                            </div>
                            <div className="birthInfoHeading">
                                <p>Date of Birth</p>
                                <span>05 March 1998</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>

        </div>
        

    );
};

export default About;