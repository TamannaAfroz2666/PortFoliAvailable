import React from 'react';
import './FQA.css'
import Accordion from 'react-bootstrap/Accordion';
import image from '../../assets/Images/Background/new412.jpg'





const FQA = () => {
    return (
        <div className='fqaHead'>
            <div className="fqaBody">
                <div className="fqaContent">
                    <div className="fqaSection">
                        <h1 className='FqaTitle'>FQA</h1>
                        <p className='fqaDes'>Frequently asked question(FQA) <br /> pages to find answer</p>
                        <img src={image} alt="" />

                    </div>
                    <div className="accordionSection">
                        <Accordion  defaultActiveKey={['0']} alwaysOpen >
                            <Accordion.Item eventKey="0" className='bodyAcc'>
                                <Accordion.Header  >
                                    <h1 className='titleAccor'>What are project based Rates ? </h1>
                                    
                                    </Accordion.Header>
                                <Accordion.Body>
                                    <p className='descriptionAccordion'> As a Front-End Developer, I take great pride in my work and am devoted to it. I've gained the abilities and know-how required to see your project through to completion. </p>
                                    
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header  className='titleAccor'>
                                <h1 className='titleAccor1'>How many service we provide ? </h1>
                                    
                                    
                                    </Accordion.Header>
                                <Accordion.Body>

                                 <p className='descriptionAccordion'> As a user or client requirements, I'm always ready to provide their project. not specific to any project that I always made. </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header  className='titleAccor'>
                                <h1 className='titleAccor1'> What are your terms and conditions ?</h1>
                                   
                                    </Accordion.Header>
                                <Accordion.Body>
                                <p className='descriptionAccordion'> * standard business hours in an office environment.. </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header  className='titleAccor'>
                                <h1 className='titleAccor1'> What kind of payment do you accept ?</h1>
                                    </Accordion.Header>
                                <Accordion.Body>
                                <p className='descriptionAccordion'> In bank account.  </p> 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>







            </div>


        </div>
    );
};

export default FQA;