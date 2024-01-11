import React from 'react';
import './ServicePage.css';
import { CgWebsite } from "react-icons/cg";

const ServicePage = () => {
    return (
        <div className='servicePageTwo'>
            <div className="servicePageCon">
                <h1 className='my_service'>my service</h1>
                <h3 className='passionTitle'>Bringing your vision to life with precision and passion</h3>

                {/* <h1 className='tama'>hhh</h1> */}

                <div className="serviceContents">
                    <div className="service_web">
                        <div className="website_logo">
                            <div className="web_logo_page2">
                                <span className='websiteSp'><CgWebsite size={85} color='black' /></span>
                            </div>


                            {/* <div className="website_info_design11">
                                <h1 className='web_title11'>website design</h1>

                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicePage;