import React from 'react';
import './ContactField.css';

const ContactField = () => {
    const nameChange = () => {
        console.log('name in input field');
    }
    const emailChange = () => {
        console.log('name in email field');
    }
    return (
        <div className='contactField'>
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
    );
};

export default ContactField;