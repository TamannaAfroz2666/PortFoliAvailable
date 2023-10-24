import React from 'react';
import './Footer.css';
import image1 from '../../assets/Images/Logo/Footer/Footer1.jpg'

const Footer = () => {
    return (
        <div className='footerHead'>
            <div className="footerBody">
                <div className="footerContent">
                    <div className="footerImage">
                        <img src={image1} alt="" />
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Footer;