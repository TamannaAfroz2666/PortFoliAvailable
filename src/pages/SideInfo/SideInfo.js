import React from 'react';
import './SideInfo.css'
import HomePage from './HomePage/HomePage';
import AboutPageTwo from '../../components/AboutPageTwo/AboutPageTwo';
import ServicePage from '../../components/ServicePage/ServicePage';

const SideInfo = () => {
    return (
        <div className='sideInfoC1'>
           <HomePage></HomePage>
           <AboutPageTwo></AboutPageTwo>
           <ServicePage></ServicePage>

            
        </div>
    );
};

export default SideInfo;