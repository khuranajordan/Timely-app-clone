import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./TabPanel.module.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.TabPanel}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
              TabIndicatorProps={{
                sx: { backgroundColor: 'transparent' }
            }}

            sx={{
              "& button": { color: '#343a3f', fontSize: '14px', fontWeight: '700' },
              "& button:hover": { backgroundColor: '#f0eded' },
              "& button.Mui-selected": { color: '#343a3f', backgroundColor: 'white' },
              
          }}
          >
            <Tab label="Dashboard" {...a11yProps(0)} sx={{ textTransform: 'none' }}/>
            <Tab label="All Projects" {...a11yProps(1)} sx={{ textTransform: 'none' }}/>
          </Tabs>
        </Box>
        {/* <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel> */}
      </Box>
    </div>
  );
}