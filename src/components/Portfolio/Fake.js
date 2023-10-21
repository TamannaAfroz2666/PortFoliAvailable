import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import All from './SubContent/All';

export default function Fake() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Branding App" value="2" />
            <Tab label="Ios App " value="3" />
            <Tab label="Landing page " value="4" />
            <Tab label="Website " value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <All></All>  
            </TabPanel>
        <TabPanel value="2">
        <All></All>  
        </TabPanel>
        <TabPanel value="3">
        <All></All>  
        </TabPanel>
      </TabContext>
    </Box>
    </>
  );
}
