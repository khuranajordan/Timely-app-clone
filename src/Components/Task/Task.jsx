import React from 'react'
import Button from '@mui/material/Button';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddIcon from '@mui/icons-material/Add';
import TabPanel from './TabPanel';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';

const Task = () => {
  return (
    <div style={{width:'100%'}}>
      <Sidebar />
      <div style={{ 
                  width: '100%', 
                  display: 'flex',
                  alignItems:'center',
                  justifyContent:'space-around',
                  backgroundColor:'#f2f4f8',
                  paddingTop:'25px',
                  paddingBottom:'15px' }}>
        <h1 style={{color:'#343a3f'}}>Task Planning</h1>
        <div>
        <Button variant="text" startIcon={<QuestionMarkIcon />}
                style={{
                  textTransform:'none',
                  color:'black',
                  marginRight:'5px',
                  '&:hover':{
                    backgroundColor:'#64657e'
                  }
                }}>Share Feedback</Button>
          
          <Button variant="contained" size="small" 
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#f0eded',
                    color: 'black',
                    boxShadow: 'none',
                    marginRight:'5px',
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
        <Button variant="contained" size="small"  startIcon={<AddIcon />}
                  sx={{
                    textTransform:'none',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none'
                    }}}>
        New Task
      </Button>
        </div>
      </div>

      <div style={{
              width:'100%',
              backgroundColor:'#f2f4f8'
      }}>

        <TabPanel />
        
      </div>
      <Fab  aria-label="add" 
                sx={{
                  position:'fixed',
                  bottom:'10px',
                  right:'10px',
                  backgroundColor:'#44515e',
                  color:'white',
                  '&:hover':{
                    backgroundColor:'#44515e'
                  }}}>
        <QuestionMarkIcon />
      </Fab>
    </div>
  )
}

export default Task