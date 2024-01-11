import React from 'react';
import './AboutPageTwo.css';
import img1 from '../../assets/Images/PageTwo/AboutSection/about_1.png';
import img2 from '../../assets/Images/PageTwo/AboutSection/about_2.png';
import img3 from '../../assets/Images/Background/AboutPart.jpg';
import { FaAward } from "react-icons/fa";

const AboutPageTwo = () => {
    return (
        <div className='aboutPageTwo'>
            <div className="aboutCon_pageTwo">
                <h1 className='title_abPageTwo'>about me</h1>
                <h3 className='craftingTitle'>Crafting stories through design and
                    innovation</h3>
                <div className="infoAbout_pageTwo">
                    <div className="infoCon_Page">
                        <img src={img1} alt="" />
                        <h1 className='myAmbition'>My Ambition</h1>
                        <p className='ambitionDes'>I will develop a large website like a google microsoft where gather all of the information freely. that can be easily used by students. and to ensure that website visitors can easily interact with the page</p>
                        <img src={img2} alt="" />
                        <h1 className='myAmbition'>My Purpose</h1>
                        <p className='ambitionDes'> Front-end development focuses on the user-facing side of a website.As a  Front-end developer I'm ensure that visitors can easily interact with and navigate sites by using programming languages, design skills, and other tools. They produce the drop-down menus, layouts, and designs for websites.</p>

                    </div>
                    <div className="ImageCon_page">
                        <img src={img3} alt="" />
                        <div className="yearEx">
                            <div className="logoYearEx">
                                <span> <FaAward /></span>
                            </div>
                            <div className="infoYearEx">
                                <h1>2+</h1>
                                <p>Year experience</p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutPageTwo;