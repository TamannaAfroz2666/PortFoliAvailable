import React from 'react';
import './PorrtfolioPage.css';
import ImageOverlayPortfolio from '../../pages/Portfolio/ImageOverlayPortfolio';

const PortfolioPage = () => {
    return (
        <div className='portfolioPage' id='portfolioPageMulti'>
            <h3 className='recent_portfolio'>my recent portfolio</h3>
            <h1 className='portfolio_elevate'>Elevate your brand to new heights with our
                portfolio expertise</h1>
                <div className="imageOverlay_portfolio">
                    <ImageOverlayPortfolio></ImageOverlayPortfolio>
                </div>


        </div>
    );
};

export default PortfolioPage;