import React from 'react';
import './ContactPageBasic.css';
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineSendToMobile } from "react-icons/md";
import { LuMap } from "react-icons/lu";

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
                <div className="phone_multiContent">
                    <div className="items_info">
                        <LuMap size={85} className='mobileDevice' />
                        <h1 className='phone_contactPage'>location</h1>
                        <p className='call_meTitle'>110/9 Kohinoor Mahal,Mohammadpur, Dhaka</p>
                       <a href="/0131899"> <h3 className='number_show'>View on map</h3></a>
                    </div>
                </div>
                </div>
                <div className="day_multiContent">
                <div className="phone_multiContent">
                    <div className="items_info">
                        <MdOutlineBookmarkAdded size={85} className='mobileDevice' />
                        <h1 className='phone_contactPage'>Monday-Sunday</h1>
                        <p className='call_meTitle'>All days have ready for work</p>
                        <a href="/afroz"><h3  className='email_show'>afroztamanna66@gmail.com</h3></a>
                    </div>
                </div>

                </div>
            </div>

        </div>
    );
};

export default ContactPageBasic;