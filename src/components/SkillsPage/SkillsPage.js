import React from 'react';
import './SkillsPageTwo.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const SkillsPage = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='skillsPages'>
            <div className="skillPageContainer">
                <h2 className='my_skills'>my skills</h2>
                <h3 className='skills_header'>Crafting Stories through Design and
                    Imagination</h3>
                <div className="skills_multiPage">
                <TabContext value={value} className='tabContext1'>
                    <div className="btnGroupFolio_skills">
                        <div className="btnContents">

                            <Box className='listOfLink' >
                                <TabList className='classes.tabs' onChange={handleChange} aria-label="lab API  example">
                                    <Tab className='btnShowSkill1' label="Download Cv" value="1" />
                                    <Tab className='btnShowSkill' label=" Education" value="2" />

                                    <Tab className='btnShowSkill' label="Experience" value="3" />
                                    {/* <Tab className='btnShow' label="Website " value="4" /> */}
                                </TabList>
                            </Box>

                        </div>

                    </div>


                    <TabPanel value="1">
                        {/* <All></All> */}
                    </TabPanel>
                    <TabPanel value="2">
                        {/* <BrandingApp></BrandingApp> */}
                    </TabPanel>

                    <TabPanel value="3">
                        {/* <LandingPage></LandingPage> */}
                    </TabPanel>
                    {/* <TabPanel value="4">
                        <Website></Website>
                    </TabPanel> */}
                </TabContext>

                </div>

            </div>
        </div>
    );
};

export default SkillsPage;