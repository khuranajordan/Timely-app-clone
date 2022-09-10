import React from "react";
import { Link } from "react-router-dom"; 
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import WorkIcon from '@mui/icons-material/Work';
import Person3Icon from '@mui/icons-material/Person3';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import "./Sidebar.scss";
import SidebarTop from '../../Assets/sidebarTop.png' 

const Sidebar = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-item">
        <img src={SidebarTop} alt='SidebarTop' className="SidebarTop" />
        <Link to="">
          <AccessTimeIcon style={{marginLeft: '8px'}}/>
          <span >HOURS</span>
        </Link>
        <Link to="">
          <AssignmentTurnedInRoundedIcon style={{marginLeft: '4px'}} />
          <span >TASKS</span>
        </Link>
        <Link to="">
          <WorkIcon style={{marginLeft: '15px'}} />
          <span >PROJECTS</span>
        </Link>
        <Link to="">
          <Person3Icon style={{marginLeft: '8px'}} />
          <span >PEOPLE</span>
        </Link>
        <Link to="">
          <BarChartIcon style={{marginLeft: '10px'}}  />
          <span >REPORT</span>
        </Link>
        <Link to="/invoice">
          <MonetizationOnIcon style={{marginLeft: '15px'}}  />
          <span >INVOICES</span>
        </Link>
        <SettingsIcon className="settingIcon"  />
        <CircleNotificationsIcon className="alarmIcon" color='disabled' />
        <SentimentSatisfiedAltIcon className="smileIcon" color='disabled' />
      </div>
    </div>
  );
};

export default Sidebar;
