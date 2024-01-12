import React from 'react';
import './ContactPageBasic.css';
import { TbDeviceMobileVibration } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineSendToMobile } from "react-icons/md";

const ContactPageBasic = () => {
    return (
        <div className='ContactPageBasic'>
            <div className="contact_contents">
                <div className="phone_multiContent">
                    <div className="items_info">
                        <MdOutlineSendToMobile size={85} className='mobileDevice' />
                        <h1 className='phone_contactPage'>phone</h1>
                        <p className='call_meTitle'>Call me 8.00am - 10.00pm</p>
                        <h3 className='number_show'>+008 13-189-178-74</h3>

                    </div>



                </div>
                <div className="location_multiContent">

                </div>
                <div className="day_multiContent">

                </div>
            </div>

        </div>
    );
};

export default ContactPageBasic;