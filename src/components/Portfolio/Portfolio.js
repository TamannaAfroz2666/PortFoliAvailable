import React from 'react';
import './Portfolio.css';
// import { Link } from 'react-router-dom';
import web1 from '../../assets/Images/Portfolio/we1.jpg';
import figma1 from '../../assets/Images/Portfolio/fig1.jpg';
import web2 from '../../assets/Images/Portfolio/web2.jpg';
import fig2 from '../../assets/Images/Portfolio/figma2.jpg'


// import Box from '@mui/material/Box';
// // import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import All from './SubContent/All';
import BrandingApp from './SubContent/BrandingApp/BrandingApp';
import LandingPage from './SubContent/LandingPage/LandingPage';
import Website from './SubContent/Website/Website';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import All from './SubContent/All';
// import LandingPage from './SubContent/LandingPage/LandingPage';
// import Website from './SubContent/Website/Website';
// import BrandingApp from './SubContent/BrandingApp/BrandingApp';





const Portfolio = () => {
    // const [value, setValue] = React.useState('1');

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    const [key, setKey] = useState('home');



    return (
        <div className='portfolio'>
            <div className="portfolioHead">
                <p className='sortTitlePortfolio'>My Portfolio</p>
                <p className='portfolioTitle'>Visit my portfolio and keep <br /> your feedback</p>
            </div>

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="all" title="All">
                <All></All>
                </Tab>
                <Tab eventKey="branding" title="Branding App">
                <BrandingApp></BrandingApp>
                </Tab>
                <Tab eventKey="landing" title="Landing Page" >
                <LandingPage></LandingPage>
                </Tab>
                <Tab eventKey="website" title="Website" >
                <Website></Website>
                </Tab>
            </Tabs>

            {/* <TabContext value={value}>
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
            </TabContext> */}



            {/* <div className="showActivities">

                <div className="webDesign">
                    <div className="webContents">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Web Design</p>
                        <p className='designDes'>Several factors such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImages">
                        <img src={web1} alt="" />
                    </div>
                </div>
                <div className="webDesign">
                    <div className="webContents">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Figma Design</p>
                        <p className='designDes'>Several figmas such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImages">
                        <img src={figma1} alt="" />
                    </div>
                </div>
                <div className="webDesign">
                    <div className="webContents">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Web Design</p>
                        <p className='designDes'>Several factors such as consistency, colours, typography, imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImages">
                        <img src={web2} alt="" />
                    </div>
                </div>
                <div className="webDesign">
                    <div className="webContents">
                        <button className='btnWeb' >Designing</button>
                        <p className='web_title'>Figma Design</p>
                        <p className='designDes'>Several factors such as consistency, colours, typography,imagery, simplicity, and functionality contribute to good website design.</p>
                    </div>
                    <div className="webImages">
                        <img src={fig2} alt="" />
                    </div>
                </div>


            </div> */}

            <div>




            </div>
        </div>
    );
};

export default Portfolio;