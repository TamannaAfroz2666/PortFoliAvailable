import React from 'react';
import './ServicePage.css';
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { FaRegNoteSticky } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ServicePage = () => {
    return (
        <div className='servicePageTwo' id='servicePageMulti'>
            <div className="servicePageCon">
                <h1 className='my_service'>my service</h1>
                <h3 className='passionTitle'>Bringing your vision to life with precision and passion</h3>
                <div className="serviceContents">
                    <div className="service_web">
                        <div className="web2">
                            <div className="website_logo">
                                <div className="web_logo_page2">
                                    <span className='websiteSp'><CgWebsite size={45} color='black' /></span>
                                </div>
                                <h3 className='web_des_title'>Website design</h3>
                                <p className='web_design_des'>Any kind of UI that I could construct. Thus, it can be an inventory, blog, e-commerce, etc.</p>



                            </div>

                        </div>
                        <div className="web3">
                            <div className="website_logo">
                                <div className="web_logo_page2">
                                    <span className='websiteSp'><ImMobile size={45} color='black' /></span>
                                </div>
                                <h3 className='web_des_title'>App Development</h3>
                                <p className='web_design_des'>Any kind of UI that I could construct. Thus, it can be an inventory, blog, e-commerce, etc.</p>
                            </div>
                        </div>
                        <div className="web4">
                            <div className="website_logo">
                                <div className="web_logo_page2">
                                    <span className='websiteSp'><FaRegNoteSticky size={45} color='black' /></span>
                                </div>
                                <h3 className='web_des_title'>software testing</h3>
                                <p className='web_design_des'>Any kind of UI that I could testing on my way. Thus, it can be an inventory, blog, e-commerce, etc.</p>
                            </div>

                        </div>
                        {/* <a href="mailto:{{ contact_info.emails.0 }}">{{ contact_info.emails.0 }}</a>
                        <a href="mailto:your email">your email</a> */}
                    </div>
                    <div className="web_btn_group">
                        <a href="/read-more">Read more</a>
                    </div>






                </div>


            </div>

        </div>
    );
};

export default ServicePage;