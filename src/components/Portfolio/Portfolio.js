import React from 'react';
import './Portfolio.css';
// import { Link } from 'react-router-dom';

const Portfolio = () => {
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
                            <button className='btnShow'>Branding App</button>
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
                <h1>hh</h1>
            </div>


        </div>
    );
};

export default Portfolio;