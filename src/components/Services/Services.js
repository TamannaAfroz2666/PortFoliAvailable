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
                        <div className="designer designer animated1 animatedFadeInUp fadeInUp" >
                            <hr color='black' size={1} className='designerLine' />
                            <p className='titleDesign'>Designer</p>
                            <p className='nameOfWork' >Illustration Designer </p>
                        </div>
                        <div className="designer designer animated2 animatedFadeInUp fadeInUp">
                            <hr color='black' size={1} className='designerLine' />
                            <p className='titleDesign'>Branding</p>
                            <p className='nameOfWork'>Business Branding </p>
                        </div>
                        <div className="designer animated animatedFadeInUp fadeInUp">
                            <hr color='black' size={1} className='designerLine' />
                            <p className='titleDesign'>Design System</p>
                            <p className='nameOfWork'>Illustration Designer </p>
                        </div>
                        <div className="designer animated3 animatedFadeInUp fadeInUp">
                            <hr color='black' size={1} className='designerLine' />
                            <p className='titleDesign'>UI/UX Design </p>
                            <p className='nameOfWork'>Web UI/UX Design </p>
                        </div>
                        <div className="designer animated4 animatedFadeInUp fadeInUp">
                            <hr color='black' size={1} className='designerLine' />
                            <p className='titleDesign'> Web Design </p>
                            <p className='nameOfWork'>Application Design</p>
                        </div>
                    </div>
                </div>
                <div className="noteHead">
                    

                </div>
            </div>



        </div>
    );
};

export default Services;