import React from 'react';
import './All.css';
import web1 from '../../../assets/Images/Portfolio/we1.jpg';
import figma1 from '../../../assets/Images/Portfolio/fig1.jpg';
import web2 from '../../../assets/Images/Portfolio/web2.jpg';
import fig2 from '../../../assets/Images/Portfolio/figma2.jpg'

const All = () => {
    return (
        <div className='all'>
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
                        <p className='designDes'>Several figmas such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImages">
                        <img src={figma1} alt="" />
                    </div>
                </div>
                <div className="webDesign">
                    <div className="webContents">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Web Design</p>
                        <p className='designDes'>Several factors such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImages">
                        <img src={web2} alt="" />
                    </div>
                </div>
                <div className="webDesign">
                    <div className="webContents">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Figma Design</p>
                        <p className='designDes'>Several factors such as consistency, colours, typography,imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImages">
                        <img src={fig2} alt="" />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default All;