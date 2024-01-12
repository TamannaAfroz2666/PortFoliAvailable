import React from 'react';
import './ContactPage.css';
import ContactPageBasic from '../../pages/ContactPage/ContactPageBasic';
import MessagePage from '../../pages/ContactPage/MessagePage/MessagePage';

const ContactPage = () => {
    return (
        <div className='ContactPage'>
            <div className="contactPageContent">
                <ContactPageBasic></ContactPageBasic>
            </div>
            <div className="contactPage_inputContent">
                <MessagePage></MessagePage>
            </div>
        </div>
    );
};

export default ContactPage;