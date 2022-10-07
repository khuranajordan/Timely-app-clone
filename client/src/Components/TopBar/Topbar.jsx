import React from 'react'
import Button from '@mui/material/Button';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddIcon from '@mui/icons-material/Add';
import BasicTabs from './TabPanel';
// import TabPanel from './TabPanel';
// import Fab from '@mui/material/Fab';
// import Box from '@mui/material/Box';

const Topbar = () => {
    return (
        <div style={{ backgroundColor: '#f2f4f8', paddingTop: '15px' }}>
            <div style={{ margin:'0 8%' }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#f2f4f8',
                    paddingBottom:'15px'
                }}>
                    <h1 style={{ color: '#343a3f' }}>Projects</h1>
                    <div>
                        <Button variant="text" startIcon={<QuestionMarkIcon />}
                            style={{
                                textTransform: 'none',
                                color: 'black',
                                marginRight: '5px',
                                '&:hover': {
                                    backgroundColor: '#64657e'
                                }
                            }}>Share Feedback</Button>

                        <Button variant="contained" size="small"
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#f0eded',
                                color: 'black',
                                boxShadow: 'none',
                                marginRight: '5px',
                                '&:hover': {
                                    backgroundColor: '#e0e0e0',
                                    boxShadow: 'none'
                                },
                                '&:active': {
                                    boxShadow: 'none',
                                    backgroundColor: '#f0eded'
                                },
                            }}>
                            Start tour
                        </Button>
                        <Button variant="contained" size="small" startIcon={<AddIcon />}
                            sx={{
                                textTransform: 'none',
                                boxShadow: 'none',
                                '&:hover': {
                                    boxShadow: 'none'
                                }
                            }}>
                            New Task
                        </Button>
                    </div>
                </div>
                <BasicTabs />
            </div>
        </div>
    )
}

export { Topbar }