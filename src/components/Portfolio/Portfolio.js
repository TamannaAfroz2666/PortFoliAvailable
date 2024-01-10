import React from 'react';
import './Portfolio.css';
// import { Link } from 'react-router-dom';
import web1 from '../../assets/Images/Portfolio/we1.jpg';
import figma1 from '../../assets/Images/Portfolio/fig1.jpg';
import web2 from '../../assets/Images/Portfolio/web2.jpg';
import fig2 from '../../assets/Images/Portfolio/figma2.jpg'


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import All from './SubContent/All';
import BrandingApp from './SubContent/BrandingApp/BrandingApp';
import LandingPage from './SubContent/LandingPage/LandingPage';
import Website from './SubContent/Website/Website';

const Portfolio = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="portfolioContainer" id='portfolio'>
            <div className='portfolio'>
                <div className="portfolioHead">
                    <div className="sortTitlePart">
                        <p className='sortTitlePortfolio'>My Portfolio</p>
                    </div>

                    <p className='portfolioTitle'>Visit my portfolio and keep <br /> your feedback</p>
                </div>

                <TabContext value={value} className='tabContext1'>
                    <div className="btnGroupFolio">
                        <div className="btnContents">

                            <Box className='listOfLink' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList className='classes.tabs' onChange={handleChange} aria-label="lab API  example">
                                    <Tab className='btnShow' label="All" value="1" />
                                    <Tab className='btnShow' label="Branding App" value="2" />

                                    <Tab className='btnShow' label="Landing page " value="3" />
                                    <Tab className='btnShow' label="Website " value="4" />
                                </TabList>
                            </Box>

                        </div>

                    </div>


                    <TabPanel value="1">
                        <All></All>
                    </TabPanel>
                    <TabPanel value="2">
                        <BrandingApp></BrandingApp>
                    </TabPanel>

                    <TabPanel value="3">
                        <LandingPage></LandingPage>
                    </TabPanel>
                    <TabPanel value="4">
                        <Website></Website>
                    </TabPanel>
                </TabContext>
                <div>
                </div>
            </div>

        </div>

    );
};

export default Portfolio;