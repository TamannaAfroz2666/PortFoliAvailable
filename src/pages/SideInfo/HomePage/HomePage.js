import React from 'react';
import './HomePage.css';
import { BiDownArrowAlt } from "react-icons/bi";

const HomePage = () => {
    return (
        <div className='home_page'>
            <div className="home_page_con">
                <div className="home_page2">
                    <h1 className='nameTitle_homePage'>
                        <div class="waviy">
                            <span style={{ '--i': 1 }}>f</span>
                            <span style={{ '--i': 2 }}>r</span>
                            <span style={{ '--i': 3 }}>o</span>
                            <span style={{ '--i': 4 }}>n</span>
                            <span style={{ '--i': 5 }}>t</span>
                            <span style={{ '--i': 6 }}>e</span>
                            <span style={{ '--i': 7 }}>n</span>
                            <span style={{ '--i': 8 }}>d</span>
                            <br />
                            <strong className='degicnationTitle'>developer</strong>
                        </div>
                    </h1>
                    <p className='des_homePage2'>
                        I'm a passionate Front-End Developer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                        <div className="infoCollectCon">
                            <div className="downloadCv">
                                <button className='downloadCvBtn'>download cv <span className='spanDoCv'><BiDownArrowAlt size={30}/></span></button>
                            </div>
                            <div className="watchVideo">

                            </div>
                        </div>
                </div>

            </div>

        </div>
    );
};

export default HomePage;