import React from 'react';
import './Services.css';
import image from '../../assets/Images/Background/Leaf.jpg'
import { BsCircleFill } from "react-icons/bs";
import Button from '@mui/material/Button';


const Services = () => {
    return (
        <div className="serviceContainer">
            <div className='services'>
                <div className="servicesHead">
                    <div className="servicesParentNode">
                        <div className="miniTitle">
                            <p>Services | Offer</p>
                        </div>
                        <p className='serviceTitle'>My Specializations</p>
                    </div>
                    <div className="serviceContent">
                        <div className="containerImage">
                            <div className="serviceImage">
                            </div>

                            <div className=" noteHead">

                                <Button variant="text"> <BsCircleFill className='iconBall' color='yellow' size={20} /></Button>
                                <Button variant="text"> <BsCircleFill className='iconBallRed' color='yellow' size={10} /></Button>
                                <h1 className='numberNote'>01</h1>
                                <p className='noteDescription'>
                                    There are many variations of passages ipsum available , but the majority  have some form, by injected humour, and randomised words which looks even slightly believable
                                </p>
                                <a className='linkMoreNote' href="/readmore"> Read more...</a>

                            </div>
                        </div>

                        <div className="serviceContentItems">
                            <div className="designer designer animated1 animatedFadeInUp fadeInUp" >
                                <hr color='black' size={1} className='designerLine' />
                                <p className='titleDesign'>Designer</p>
                                <p className='nameOfWork' >Illustration Designer </p>
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

                </div>
            </div>

        </div>

    );
};

export default Services;