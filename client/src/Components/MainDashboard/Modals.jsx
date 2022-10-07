import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
// import photo from './Capture.PNG'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '4px solid #cfd1d5',
  boxShadow: 24,
  borderRadius:'5px',
  padding:'5px'

};

export default function Modals() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>New Entry</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField id="standard-basic" label="Standard" variant="standard" 
                  sx={{width:'100%'}}/>
        
        <FormControl sx={{ width:'100%' }}>
        <InputLabel htmlFor="grouped-native-select">Select Project</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping"
                style={{width:'100%'}}>
          <option aria-label="None" value="" />
          <optgroup label="RECENT PROJECTS" >
            <option value={1}>Communication <span style={{color:'#cfd1d5'}}>(Vishal Gupta)</span></option>
            <option value={2}>Genral <span style={{color:'#cfd1d5'}}>(Vishal Gupta)</span></option>
          </optgroup>
          <optgroup label="VISHAL GUPTA">
          <option value={1}>  Communication</option>
            <option value={2}>Genral</option>
          </optgroup>
          <option value={2}>+Create new Project</option>
          
        </Select>
      </FormControl>

      {/* <img src='https://live.staticflickr.com/65535/52347514540_6660b1c296_n.jpg' alt="" style={{width:'100%'}}/> */}
          <button onClick={handleClose} style={{padding:'8px 10px',
          fontSize:'15px',
          marginTop:'10px',
          backgroundColor:'#3d73da',
          color:'white',
          border:'0',
          borderRadius:'3px'}}>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}
