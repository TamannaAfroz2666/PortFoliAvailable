import React from 'react';
import './EducationAndExperience.css';

const EducationAndExperience = () => {
    return (
        <div className='educations'>
            <div className="educationHead">
                <div className="educationAndExperience">
                    <div className="experienceField">
                        <h1 className='experienceTitle'>Experience</h1>
                        <div className="experienceContent">
                            <div className="listOfExperience">
                                <div className="year">
                                    <p>In 2012</p>
                                </div>
                                <div className="experienceOfTitle">
                                    <p className='JobTitle'>Software Engineer</p>
                                    <p className='position'>UI Head and Manager</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="EducationField">
                        <h1>Education</h1>

                        <div className="experienceContent">
                            <div className="listOfExperience">
                                <div className="year">
                                    <p>In 2012</p>
                                </div>
                                <div className="experienceOfTitle">
                                    <p>Software Engineer</p>
                                    <p>UI Head and Manager</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>




        </div>
    );
};

export default EducationAndExperience;