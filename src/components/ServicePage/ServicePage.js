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
                            <h3 className='web_des_title'>Website design</h3>
                            <p className='web_design_des'>Any kind of UI that I could construct. Thus, it can be an inventory, blog, e-commerce, etc.</p>


                           
                        </div>
                        <div className="web_btn_group">
                            <a href="/read more">Read more</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicePage;