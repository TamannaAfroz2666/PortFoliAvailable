import React from 'react';
import './SideInfo.css'
import HomePage from './HomePage/HomePage';
import AboutPageTwo from '../../components/AboutPageTwo/AboutPageTwo';
import ServicePage from '../../components/ServicePage/ServicePage';
import SkillsPage from '../../components/SkillsPage/SkillsPage';
import PortfolioPage from '../../components/PortfolioPage/PortfolioPage';

const SideInfo = () => {
    return (
        <div className='sideInfoC1'>
           <HomePage></HomePage>
           <AboutPageTwo></AboutPageTwo>
           <ServicePage></ServicePage>
           <SkillsPage></SkillsPage>
           <PortfolioPage></PortfolioPage>

            
        </div>
    );
};

export default SideInfo;