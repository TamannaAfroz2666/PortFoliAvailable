import React, { useState } from 'react';
import './ContactField.css';

const ContactField = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        textarea: ''
    })
    // input event handler 
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevData) => ({
            ...prevData,       //data exits kore niyese ager gulo
            [name]: value,     // new data added
        }))
    }

    const submitHandle = () => {
        console.log('submit it');
    }

    return (
        <div className='contactField'>
            <h1 className='infoTitle'> Let's Talk About Ideas </h1>
            <form action="" onSubmit={submitHandle}>
                <div className="contentsOfInfo">
                    <div className="nameOfInput">
                        <input
                            type="text"
                            className='nameField'
                            placeholder='Enter Full Name'
                            autoComplete='off'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="email">
                        <input
                            type="email"
                            className='emailField'
                            placeholder='Email Address'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />

                    </div>
                </div>
                <div className="messageSection">
                    <textarea
                        id="textarea"
                        cols="20" rows="10"
                        placeholder='Your Message'
                        className='textArea'
                        name="textarea"
                        value={formData.textarea}
                        onChange={handleChange}
                    />
                </div>
                <div className="btnOfContact">
                    <button type='submit'>Send Message</button>
                </div>
            </form>

        </div>
    );
};

export default ContactField;