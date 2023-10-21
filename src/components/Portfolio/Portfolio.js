import React from 'react';
import './Portfolio.css';
// import { Link } from 'react-router-dom';
import web1 from '../../assets/Images/Portfolio/we1.jpg';
import figma1 from '../../assets/Images/Portfolio/fig1.jpg';
import web2 from '../../assets/Images/Portfolio/web2.jpg';
import fig2 from '../../assets/Images/Portfolio/figma2.jpg'





const Portfolio = () => {

    const openCity = (evt, cityName) => {
        var i, tabContent, tabLinks;
        tabContent = document.getElementsByClassName("tabcontent");
        // for (i = 0; i < tabContent.length; i++) {
        //   tabContent[i].style.display = "none";
        // }
        tabLinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    return (
        <div className='portfolio'>
            <div className="portfolioHead">
                <p className='sortTitlePortfolio'>My Portfolio</p>
                <p className='portfolioTitle'>Visit my portfolio and keep <br /> your feedback</p>  
            </div>
            <div className="btnGroupFolio">
                <div className="btnContents">
                    <ul className='listOfLink'>
                        <li>
                            <button className='btnShow' >all</button>

                        </li>
                        <li>
                            <button className='btnShow' >Branding App</button>
                        </li>
                        <li>
                            <button className='btnShow'>Ios App</button>
                        </li>
                        <li>
                            <button className='btnShow'>Landing Page</button>
                        </li>
                        <li>
                            <button className='btnShow'>Website</button>
                        </li>

                    </ul>
                </div>
            </div>
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

            <div>

           
                
          
            </div>
        </div>
    );
};

export default Portfolio;