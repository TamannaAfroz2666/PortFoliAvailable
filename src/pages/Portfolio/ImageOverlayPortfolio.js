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
                    <div className="img_porfolio">
                    <img src={img1} alt="Your Image" />

                    </div>
                    
                    <div class="overlay">
                        <h2 className='overlayTitle_portfolio'>E-commerce site</h2>
                        
                        {/* <h3>hhhh fffff kkkkk bbbb oooo</h3> */}
                    </div>
                </div>
                <div class="image-container">
                <div className="img_porfolio">
                    <img src={img2} alt="Your Image" />

                    </div>
                    {/* <img src={img2} alt="Your Image" /> */}
                    <div class="overlay">
                        <h2>Your Image Title</h2>
                        <h3>hhhh fffff kkkkk bbbb oooo</h3>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ImageOverlayPortfolio;