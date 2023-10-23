import React from 'react';
import './ContactMe.css';
import image from '../../../../assets/Images/Background/ContactMe/Contact.jpg'
import image1 from '../../../../assets/Images/Background/ContactMe/ContactMe.jpg'
import ContactLocation from './ContactLocation/ContactLocation';
const ContactMe = () => {
    const nameChange = () => {
        console.log('name in input field');
    }
    const emailChange = () => {
        console.log('name in email field');
    }
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
                        <div className="contentsOfInfo">
                            <div className="nameOfInput">
                                <input type="text" className='nameField' onChange={nameChange} placeholder='Enter Full Name' name='name' autoComplete='off' />

                            </div>
                            <div className="email">
                                <input type="email" className='emailField' onChange={emailChange} placeholder='Email Address' name='email' />

                            </div>
                        </div>
                        <div className="messageSection">
                            <textarea name="textarea" id="textarea" cols="20" rows="10" placeholder='Your Message' className='textArea'></textarea>
                        </div>
                        <div className="btnOfContact">
                            <button type='button' >Send Message</button>
                        </div>


                    </div>
                    

                </div>
                <div className="numberLocationHead">
                        <h1>gg</h1>
                        <ContactLocation></ContactLocation>



                    </div>

            </div>

        </div>
    );
};

export default ContactMe;