import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className="portfolioHead">
                <p className='sortTitlePortfolio'>My Portfolio</p>
                <p className='portfolioTitle'>Visit my portfolio and keep <br /> your feedback</p>
            </div>
            <div className="btnGroupFolio">
                <ul className='listOfLink'>
                    <li>
                        <Link to='/all'>All</Link>
                    </li>
                    <li>
                    <Link to='/brandingApp'>Branding App</Link>
                         </li>
                    <li>
                    <Link to='/ios'>Ios App</Link></li>
                    <li>
                    <Link to='/landingPage'>Landing Page</Link></li>
                    <li>
                    <Link to='/Website'>Website</Link></li>
                </ul>

            </div>


        </div>
    );
};

export default Portfolio;