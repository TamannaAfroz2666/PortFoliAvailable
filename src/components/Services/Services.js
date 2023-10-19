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
                        
                    </div>
                    <div className="serviceContentItems">
                        <div className="designer">
                            <hr color='black' size= {1} className='designerLine' />
                            <p className='titleDesign'>Designer</p>
                            <p className='nameOfWork' >Illustration Designer </p>
                        </div>
                        <div className="designer">
                            <hr color='black' size= {1} className='designerLine'/>
                            <p className='titleDesign'>Branding</p>
                            <p className='nameOfWork'>Business Branding </p>
                        </div>
                        <div className="designer">
                            <hr color='black' size= {1} className='designerLine' />
                            <p className='titleDesign'>Design System</p>
                            <p  className='nameOfWork'>Illustration Designer </p>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
};

export default Services;