import React from 'react';
import './About.css';
import image from '../../assets/Images/Background/ABOUT.jpg'


const About = () => {
    return (
        <div className='aboutAll'>
            <div className="aboutAllInfo">
                <div className="imageInfo">
                    <img src={image} alt="image" />

                </div>
                <div className="informationAll">

                </div>
            </div>
        
            
        </div>
    );
};

export default About;