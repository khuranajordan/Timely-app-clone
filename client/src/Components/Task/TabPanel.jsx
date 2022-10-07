import React from 'react';
import { Tabs, Tab } from '@mui/material'
import Toggle from './Toggle';
import SelectProject from './SelectProject';
import SelectPeople from './SelectPeople';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TaskSheduler from './TaskSheduler';



function TabData(props) {
    const { children, value, index, data } = props
    return (
        <div>
            {
                value === index && (
                    <div style={{ width: '100%', backgroundColor: 'white', marginTop: '-15px' }}>
                        <p style={{ color: 'white' }}>{children}</p>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',paddingTop:'10px'}}>
                            <div style={{ display: 'flex' }}>
                                <Toggle />
                                <SelectProject />
                                <SelectPeople />
                            </div>

                            <div>
                            <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Completed tasks" />
                            <FormControlLabel  control={<Checkbox defaultChecked />} label="Availability" />
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <div style={{marginTop:'106px'}}>
                            <div style={{width:'250px',height:'143px',border:'1px solid rgb(215 216 219)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <div style={{display:'flex'}}>
                                        <div style={{
                                            width:'40px',
                                            height:'40px',
                                            backgroundColor:'#44515e',
                                            padding:'10px',
                                            borderRadius:'5px',
                                            marginRight:'15px',
                                            border:'1px solid black',
                                            boxSizing:'border-box'}}>
                                                <p style={{color:'white',margin:'0px'}}>VG</p>
                                        </div>
                                        <p>Vishal Gupta</p>
                                    </div>
                                </div>
                            </div>
                            

                            <TaskSheduler />

                        </div>

                    </div>
                )
            }
        </div>
    )
}

const TabPanel = ({ data }) => {
    const [TabValue, setTabValue] = React.useState(0)

    const handelTab = (e, val) => {
        setTabValue(val)
    }
    return (
        <div>
            <Tabs value={TabValue} onChange={handelTab}
                TabIndicatorProps={{
                    sx: { backgroundColor: 'transparent' }
                }}
                sx={{
                    "& button": { color: '#343a3f', fontSize: '14px', fontWeight: '700' },
                    "& button:hover": { backgroundColor: '#f0eded' },
                    "& button.Mui-selected": { color: '#343a3f', backgroundColor: 'white' },
                    
                }}>
                <Tab label='People' sx={{ textTransform: 'none', marginLeft: '200px',paddingBottom:'30px' }} />
                <Tab label='Projects' sx={{ textTransform: 'none',paddingBottom:'30px' }} />
            </Tabs>

            <TabData value={TabValue} index={0} data='People' style={{ backgroundColor: 'white' }}></TabData>
            <TabData value={TabValue} index={1} data='Projects' style={{ backgroundColor: 'white' }}></TabData>
        </div>
    )
}

export default TabPanel