import React from 'react';
import './SideInfo.css'
import HomePage from './HomePage/HomePage';
import AboutPageTwo from '../../components/AboutPageTwo/AboutPageTwo';

const SideInfo = () => {
    return (
        <div className='sideInfoC1'>
           <HomePage></HomePage>
           <AboutPageTwo></AboutPageTwo>

            
        </div>
    );
};

export default SideInfo;