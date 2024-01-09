import React from 'react';
import './Skills.css';
import html from '../../assets/Images/Skills/html2.jpg';
import bootstrap from '../../assets/Images/Skills/bootstrap.jpg';
import tailwind from '../../assets/Images/Skills/tailwind.png';
import js from '../../assets/Images/Skills/js.png';
import react from '../../assets/Images/Skills/react.png';



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
                            <p className='percentSkill'>100%</p>
                        </div>
                        <div className="nameTopic">
                            <p className='htmlTi'>HTML</p>
                        </div>
                    </div>
                    <div className="SkillContentAll">
                        <div className="imageInfoSkills">
                            <img src={bootstrap} alt="loading" />
                            <p className='percentSkill'>100%</p>
                        </div>
                        <div className="nameTopicLong">
                            <p className='bootstrap'>Bootstrap</p>
                        </div>
                    </div>
                    <div className="SkillContentAll">
                        <div className="imageInfoSkills">
                            <img src={tailwind} alt="loading" />
                            <p className='percentSkill'>100%</p>
                        </div>
                        <div className="nameTopicTail">
                            <p className='tailwind'>Tailwind</p>
                        </div>
                    </div>
                    <div className="SkillContentAll">
                        <div className="imageInfoSkills">
                            <img src={js} alt="loading" />
                            <p className='percentSkill'>80%</p>
                        </div>
                        <div className="nameTopicJS">
                            <p className='js'>JavaScript</p>
                        </div>
                    </div>
                    <div className="SkillContentAll">
                        <div className="imageInfoSkills">
                            <img src={react} alt="loading" />
                            <p className='percentSkill'>90%</p>
                        </div>
                        <div className="nameTopic">
                            <p className='htmlTi'>React</p>
                        </div>
                    </div>
                   


                </div>
            </div>

        </div>
    );
};

export default Skills;