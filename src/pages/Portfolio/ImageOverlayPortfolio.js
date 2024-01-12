import React from 'react';
import './ImageOverlayPortfolio.css';
import img from '../../assets/Images/Background/ABOUT.jpg'
import img1 from '../../assets/Images/PageTwo/portfolio/51.png';
import img2 from '../../assets/Images/PageTwo/portfolio/61.png';
import img3 from '../../assets/Images/PageTwo/portfolio/71.png';
import img4 from '../../assets/Images/PageTwo/portfolio/81.png';
import img5 from '../../assets/Images/PageTwo/portfolio/91.png';

const ImageOverlayPortfolio = () => {
    return (
        <div className='ImageOverlayPortfolio'>
            <div className="imagesContent_portfolio">
                <div class="image-container">
                    <a href="/e-commerce-site">
                        <div className="img_porfolio">
                            <img src={img1} alt="Your Image" />
                        </div>

                        <div class="overlay">
                            <h2 className='overlayTitle_portfolio'>E-commerce site</h2>

                            {/* <h3>hhhh fffff kkkkk bbbb oooo</h3> */}
                        </div>
                    </a>
                </div>
                <div class="image-container">
                    <a href="/e-commerce-site">
                        <div className="img_porfolio">
                            <img src={img2} alt="Your Image" />
                        </div>

                        <div class="overlay">
                            <h2 className='overlayTitle_portfolio'>Online Education site</h2>
                        </div>
                    </a>
                </div>

            </div>
            <div className="imageContentSort">
                <div class="image-container">
                    <a href="/e-commerce-site">
                        <div className="img_porfolioSort">
                            <img src={img3} alt="Your Image" />
                        </div>
                        <div class="overlay">
                            <h2 className='overlayTitle_portfolio'>E-commerce site</h2>
                        </div>
                    </a>
                </div>
                <div class="image-container">
                    <a href="/e-commerce-site">
                        <div className="img_porfolioSort">
                            <img src={img4} alt="Your Image" />
                        </div>

                        <div class="overlay">
                            <h2 className='overlayTitle_portfolio'> T_A Shopping site</h2>
                        </div>
                    </a>
                </div>
                <div class="image-container">
                    <a href="/e-commerce-site">
                        <div className="img_porfolioSort">
                            <img src={img5} alt="Your Image" />
                        </div>

                        <div class="overlay">
                            <h2 className='overlayTitle_portfolio'> Parlor site</h2>
                        </div>
                    </a>
                </div>


            </div>


        </div >
    );
};

export default ImageOverlayPortfolio;