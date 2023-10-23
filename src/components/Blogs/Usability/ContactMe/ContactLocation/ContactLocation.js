import React from 'react';
import './ContactLocation.css';
import { BsPhoneFlip } from "react-icons/bs";

const ContactLocation = () => {
    return (
        <div className='contactLocation'>
            <div className="contactLocationBody">
                <div className="phone">
                    <div className="phoneContents">
                        <div className="phoneIcon">
                            <BsPhoneFlip size={30} color='white' className='locationPhoneIcon'/>
                        </div>
                    </div>
                    <div className="phoneInfo">
                        <p className='phoneTitle'>Phone</p>
                        <span className='phoneNumber'>+13135 663 5532</span>
                    </div>
                </div>
                <div className="emailContact">

                </div>
                <div className="locationMap">

                </div>

            </div>
            
        </div>
    );
};

export default ContactLocation;