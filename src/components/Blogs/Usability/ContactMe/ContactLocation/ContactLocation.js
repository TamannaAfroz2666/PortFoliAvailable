import React from 'react';
import './ContactLocation.css';
import { BsPhoneFlip } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";


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
                <div className="phoneContents">
                        <div className="phoneIcon">
                            <AiOutlineMail size={30} color='white' className='locationPhoneIcon'/>
                        </div>
                    </div>
                    <div className="phoneInfo">
                        <p className='phoneTitle'>Email</p>
                        <span className='phoneNumber'>hereMe@gmail.com</span>
                    </div>

                </div>
                <div className="locationMap">
                <div className="phoneContents">
                        <div className="phoneIcon">
                            <TfiLocationPin size={30} color='white' className='locationPhoneIcon'/>
                        </div>
                    </div>
                    <div className="phoneInfo">
                        <p className='phoneTitle'>Location</p>
                        <span className='phoneNumber'>Mohammadpur, Dhaka, Bangladesh</span>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default ContactLocation;