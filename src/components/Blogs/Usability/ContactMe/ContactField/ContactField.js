import React, { useState } from 'react';
import './ContactField.css';

const ContactField = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        textarea: '',
    });
    // input event handler 
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,       //data exits kore niyese ager gulo
            [name]: value,     // new data added
        }))
    }

    // step 2 : data validation part 

    const [errors, setErrors] = useState({});

    const dataValidation = () => {
        let dataIsValid = true;
        let newErrors = {};

        // for name field validated check 
        if (!formData.name.trim()) {
            dataIsValid = false;
            newErrors.name = 'Required your name!';
        }
        // for email field validation check 
        const emailReges = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailReges.test(formData.email)) {
            dataIsValid = false;
            newErrors.email = 'Enter a valid email address'
        }

        // for textArea field validation check 
        if (!formData.textarea.trim()) {
            dataIsValid = false;
            newErrors.textarea = ' Required your messages ';
        }
        setErrors(newErrors);
        return dataIsValid;

    };

    const submitHandle = (e) => {
        e.preventDefault();
        if (dataValidation ()) {
            console.log('your data is submitted', formData);
        }
        else {
            console.log('form validation field');
        }
    }

    return (
        <div className='contactField'>
            <h1 className='infoTitle'> Let's Talk About Ideas </h1>
            <form onSubmit={submitHandle}>
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
                        {errors.name && <span className='nameError'>
                            {errors.name}</span>}

                    </div>
                    <div className="email">
                        <input
                            type="email"
                            className='emailField'
                            placeholder='Email Address'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                        {errors.email && <span className='nameError'>
                            {errors.email}</span>}

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
                        autoComplete='off'
                    />
                   
                    {errors.textarea && <span className='nameError'>
                            {errors.textarea}</span>}
                    
                </div>
                <div className="btnOfContact">
                    <button type="submit">Send Message</button>
                </div>
            </form>

        </div>
    );
};

export default ContactField;