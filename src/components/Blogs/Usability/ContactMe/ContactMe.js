import React from 'react';
import './ContactMe.css';
import image from '../../../../assets/Images/Background/ContactMe/Contact.jpg'
import image1 from '../../../../assets/Images/Background/ContactMe/ContactMe.jpg'
const ContactMe = () => {
    return (
        <div className='contactMe'>
            <div className="contactMeHead">
                <div className="contactMeTitle">
                    <p className='contactOfTitle'>Contact me</p>
                    
                </div>
                <div className="contactMeBody">
                    <div className="imagePart">
                        <img src={image} alt="" />

                    </div>
                    <div className="ContactInfoHead">
                       <h1 className='infoTitle'> Let's Talk About Ideas </h1>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default ContactMe;