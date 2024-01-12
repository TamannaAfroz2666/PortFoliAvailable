import React from 'react';
import './Education.css';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Education = () => {
    return (
        <div className='education_multiPage'>
            <div className="educationContents">
                <div className="formerDesigner">
                    <div className="link_creative">
                        <div className="arrow_cv">
                            <MdKeyboardDoubleArrowRight className='doubleArrow' size={26} />
                        </div>
                        <div className="informationOfCv">
                            <h4 className='agencyTitle'> SWA

                            </h4>
                            <hr className='hrAgency' />
                            <h3 className='framerDownTitle'> Daffodil International University</h3>
                            <h5 className='timeOfFramer'>2019 - 2022</h5>
                            <p className='desWork_down'>I have completed my degree  with CGPA:3.70 out of 4.00.Software Engineering (SWA) is a most popular subject in world wide. It is contributed to all programming language and helped to  build a user friendly software and others.  </p>
                            {/* <progress className='progress-bar' id="file" max="100" value="80"></progress> */}

                        </div>

                    </div>
                </div>
                <div className="web_designerCv">
                    <div className="link_creative">
                        <div className="arrow_cv">
                            <MdKeyboardDoubleArrowRight className='doubleArrow' size={26} />
                        </div>
                        <div className="informationOfCv">
                            <h4 className='agencyTitle'>HSC

                            </h4>
                            <hr className='hrAgency' />
                            <h3 className='framerDownTitle'>Lalmonirhat Govt. College</h3>
                            <h5 className='timeOfFramer'>2015 - 2016</h5>
                            <p className='desWork_down'>I have completed my H.Sc level with GPA:4.17 out of 5.00.</p>
                            {/* <progress className='progress-bar' id="file" max="100" value="60">70%</progress> */}

                        </div>

                    </div>

                </div>
                <div className="web_designerCv">
                    <div className="link_creative">
                        <div className="arrow_cv">
                            <MdKeyboardDoubleArrowRight className='doubleArrow' size={26} />
                        </div>
                        <div className="informationOfCv">
                            <h4 className='agencyTitle'>SSC

                            </h4>
                            <hr className='hrAgency' />
                            <h3 className='framerDownTitle'>Barakhata High School.</h3>
                            <h5 className='timeOfFramer'>2014 - 2015</h5>
                            <p className='desWork_down'>I have completed my S.Sc level with GPA:5.00 out of 5.00</p>
                            {/* <progress className='progress-bar' id="file" max="100" value="60">70%</progress> */}

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Education;