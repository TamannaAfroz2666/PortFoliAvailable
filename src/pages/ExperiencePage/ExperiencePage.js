import React from 'react';
import './ExperiencePage.css';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ExperiencePage = () => {
    return (
        <div className='ExperiencePage'>
             <div className="downloadCvContent">
                <div className="formerDesigner">
                    <div className="link_creative">
                        <div className="arrow_cv">
                            <MdKeyboardDoubleArrowRight className='doubleArrow' size={26} />
                        </div>
                        <div className="informationOfCv">
                            <h4 className='agencyTitle'>Creative agency

                            </h4>
                            <hr className='hrAgency' />
                            <h3 className='framerDownTitle'>Framer Designer & Developer</h3>
                            <h5 className='timeOfFramer'>2021 - Present</h5>
                            <p className='desWork_down'>This work is mainly performed contractually. here, complete several projects.</p>
                            <progress className='progress-bar' id="file" max="100" value="20">70%</progress>

                        </div>

                    </div>

                </div>
                <div className="web_designerCv">
                    <div className="link_creative">
                        <div className="arrow_cv">
                            <MdKeyboardDoubleArrowRight className='doubleArrow' size={26} />
                        </div>
                        <div className="informationOfCv">
                            <h4 className='agencyTitle'>Sawari Overseas

                            </h4>
                            <hr className='hrAgency' />
                            <h3 className='framerDownTitle'>Front-end Developer</h3>
                            <h5 className='timeOfFramer'>2022 - 2023</h5>
                            <p className='desWork_down'>This work is mainly performed on remote. here, complete several projects.</p>
                            <progress className='progress-bar' id="file" max="100" value="60">70%</progress>

                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default ExperiencePage;