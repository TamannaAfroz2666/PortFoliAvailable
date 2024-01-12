import React from 'react';
import './ContactPageBasic.css';
import { TbDeviceMobileVibration } from "react-icons/tb";

const ContactPageBasic = () => {
    return (
        <div className='ContactPageBasic'>
            <div className="contact_contents">
                <div className="phone_multiContent">
                    <div className="items_info">
                        <TbDeviceMobileVibration />
                        <h3 className='phone_contactPage'>phone</h3>
                        <p className='call_meTitle'>Call me 8.00am - 10.00pm</p>
                        <h3 className='number_show'>+008 13-189-178-74</h3>

                    </div>
                    {/* <h1>phone</h1> */}


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