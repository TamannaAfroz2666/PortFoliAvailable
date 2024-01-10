import React from 'react';
import './ContactMe.css';
import image from '../../../../assets/Images/Background/ContactMe/Contact.jpg'
import ContactLocation from './ContactLocation/ContactLocation';
import ContactField from './ContactField/ContactField';
const ContactMe = () => {
   
    return (
        <>
            <div className="contactContainer" id='contact'>
                <div className='contactMe'>
                    <div className="contactMeHead">
                        <div className="contactMeTitle">
                            <p className='contactOfTitle'>Contact me</p>
                        </div>
                        <div className="contactMeBody">
                            <div className="imagePart">
                                <img src={image} alt="not found" />
                            </div>
                            <div className="ContactInfoHead">
                                <ContactField/>
                            </div>
                        </div>
                        <div className="numberLocationHead">
                            <div className="contactLocationContents">
                                <ContactLocation></ContactLocation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMe;