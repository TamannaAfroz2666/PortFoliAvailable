import React from 'react';
import './LandingPage.css';
import web1 from '../../../../assets/Images/Portfolio/we1.jpg';

import fig2 from '../../../../assets/Images/Portfolio/figma2.jpg'


const LandingPage = () => {
    return (
        <div className='landingPage'>
            <div className="showActivities">

                <div className="webDesign">
                    <div className="webContents">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Web Design</p>
                        <p className='designDes'>Several factors such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImages">
                        <img src={web1} alt="" />
                    </div>
                </div>
             
                <div className="webDesign">
                    <div className="webContents">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Figma Design</p>
                        <p className='designDes'>Several factors such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design</p>
                    </div>
                    <div className="webImages">
                        <img src={fig2} alt="" />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default LandingPage;