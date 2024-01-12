import React from 'react';
import './ContactPage.css';
import ContactPageBasic from '../../pages/ContactPage/ContactPageBasic';

const ContactPage = () => {
    return (
        <div className='ContactPage'>
            <div className="contactPageContent">
                <ContactPageBasic></ContactPageBasic>
            </div>
            
        </div>
    );
};

export default ContactPage;