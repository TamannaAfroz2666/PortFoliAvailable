import React from 'react';
import './ImageOverlayPortfolio.css';
import img from '../../assets/Images/Background/ABOUT.jpg'

const ImageOverlayPortfolio = () => {
    return (
        <div className='ImageOverlayPortfolio'>
            <div class="image-container">
                <img src={img} alt="Your Image"/>
                    <div class="overlay">
                        <h2>Your Image Title</h2>
                        <h3>hhhh fffff kkkkk bbbb oooo</h3>
                    </div>
            </div>

        </div>
    );
};

export default ImageOverlayPortfolio;