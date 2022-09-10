import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            All <ArrowDropDownIcon /> 
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>All</MenuItem>
            <MenuItem onClick={popupState.close}>Local draft</MenuItem>
            <MenuItem onClick={popupState.close}>Draft</MenuItem>
            <MenuItem onClick={popupState.close}>Sent to Customer</MenuItem>
            <MenuItem onClick={popupState.close}>Paid</MenuItem>
            <MenuItem onClick={popupState.close}>Void</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
