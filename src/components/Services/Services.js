import React from 'react';
import './Services.css';
import image from '../../assets/Images/Background/Leaf.jpg'

const Services = () => {
    return (
        <div className='services'>
            <div className="servicesHead">
                <div className="servicesParentNode">
                    <div className="miniTitle">
                        <p>Services | Offer</p>
                    </div>
                    <p className='serviceTitle'>My Specializations</p>
                </div>
                <div className="serviceContent">
                    <div className="serviceImage">
                        <img src={image} alt="loading ...." />
                    </div>
                    <div className="serviceContentItems">
                        <div className="designer">
                            <hr />
                            <p>Designer</p>
                            <p>Illustration Designer </p>
                        </div>
                        <div className="designer">
                            <hr />
                            <p>Designer</p>
                            <p>Illustration Designer </p>
                        </div>
                        <div className="designer">
                            <hr />
                            <p>Designer</p>
                            <p>Illustration Designer </p>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
};

export default Services;