import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import All from './SubContent/All';
import LandingPage from './SubContent/LandingPage/LandingPage';
import Website from './SubContent/Website/Website';
import BrandingApp from './SubContent/BrandingApp/BrandingApp';

export default function Fake() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            {/* <Box> */}
            <TabContext value={value}>
                <div className="btnGroupFolio">
                    <div className="btnContents">

                        <Box className='listOfLink' >
                            <TabList onChange={handleChange} >
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
            {/* </Box> */}
        </>
    );
}
