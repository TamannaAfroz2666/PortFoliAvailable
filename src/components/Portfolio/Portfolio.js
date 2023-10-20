import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className="portfolioHead">
                <p className='sortTitlePortfolio'>My Portfolio</p>
                <p className='portfolioTitle'>Visit my portfolio and keep <br /> your feedback</p>
            </div>
            <div className="btnGroupFolio">
                <ul className='listOfLink'>
                    <li>All</li>
                    <li>Branding App </li>
                    <li>Ios App</li>
                    <li>Landing Page</li>
                    <li>Website</li>
                </ul>

            </div>
            
            
        </div>
    );
};

export default Portfolio;