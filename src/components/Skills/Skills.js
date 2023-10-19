import React from 'react';
import './Skills.css';
import html from '../../assets/Images/Skills/html2.jpg'


const Skills = () => {


    return (
        <div className='skills'>
            <div className="skillBody">
                <div className="skillsHead">
                    <p className='SkillSort'>My Skills</p>
                    <p className='SkillTitle'>I'm great in what I do <br />and I'm loving it</p>

                </div>
                <div className="skillContent">
                    <div className="SkillContentAll">
                        <div className="imageInfoSkills">
                            <img src={html} alt="loading" />
                        </div>


                    </div>


                </div>
            </div>

        </div>
    );
};

export default Skills;