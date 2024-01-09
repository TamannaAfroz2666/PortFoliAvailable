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
                        <Accordion  defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0" className='bodyAcc'>
                                <Accordion.Header className='titleAccor' >What are project based Rates ?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header  className='titleAccor'>How many service we provide ?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header  className='titleAccor'>What are your terms and conditions ?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header  className='titleAccor'>What kind of payment do you accept ?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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