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
                        <img src={image1} alt="" />

                    </div>
                    <div className="ContactInfoHead">
                       <p className='infoTitle'> Let's Talk About Ideas </p>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default ContactMe;