import React from 'react';
import './BrandingApp.css';
import web2 from '../../../../assets/Images/Portfolio/web2.jpg';
import fig2 from '../../../../assets/Images/Portfolio/fig1.jpg'

const BrandingApp = () => {
    return (
        <div className='brandingApp'>
            <div className="showActivities">
                <div className="webDesign">
                    <div className="webContentsSingle">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Web Design</p>
                        <p className='designDesSingle'>Several factors such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImagesSingle">
                        <img src={fig2} alt="" />
                    </div>
                </div>

                <div className="webDesign">
                    <div className="webContentsSingle">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Figma Design</p>
                        <p className='designDesSingle'>Several factors such as consistency, colours, typography,imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImagesSingle">
                        <img src={web2} alt="" />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default BrandingApp;