import React from "react";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import WorkIcon from "@mui/icons-material/Work";
import Person3Icon from "@mui/icons-material/Person3";
import BarChartIcon from "@mui/icons-material/BarChart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./Sidebar.scss";
import SidebarTop from "../../Assets/sidebarTop.png";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClickTop = (event) => {
   
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseTop = () => {
   
    setAnchorEl2(null);
  };


  const handleClickSmile = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSmile = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover" : undefined;
  

  return (
    <div className="sidenav">
      <div className="sidenav-item">
        <img
          src={SidebarTop}
          alt="SidebarTop"
          className="SidebarTop"
          onClick={handleClickTop}
        />
        <Popover
          id={id2}
          open={open2}
          anchorEl={anchorEl2}
          onClose={handleCloseTop}
          anchorOrigin={{
            vertical: "right",
            horizontal: "right",
          }}
          style={{ marginLeft: "25px"}}
        >
          <Typography sx={{ p: 1 }}>
            <div>
              <p style={{ margin: "5px 0px ", fontSize: "18px" }}>Current Workspace</p>
              <div style={{display:"flex"}}>
                <img src={SidebarTop} alt="SidebarTop" className="SidebarTop" style={{height:"50px", width:"auto", borderRadius:"10px"}} /> 
                <div>
                <p style={{ margin: "0px 13px", fontSize: "15px", color: "black", fontWeight:"bold" }}>Vishal Gupta</p>
                <p style={{ margin: "0px 13px", fontSize: "15px", color: "gray" }}>Manager User</p>
                </div>
              </div>
            </div>
            <hr />
            <div style={{ marginTop: "10px"}}>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "black", fontWeight:"bold" }}>
                Assistance
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Getting Started
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Help Center
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                In-app support
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Email us
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Keyboard shortcuts
              </p>
            </div>
            <div style={{ marginTop: "25px"}}>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "black", fontWeight:"bold" }}>
                Download
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Iphone App
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Android App
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Memory for Mac
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Memory for Windows
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Memory for Chrome
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Desktop App for Mac
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
              Desktop App for Windows
              </p>
            </div>
            <div style={{ marginTop: "25px"}}>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "black", fontWeight:"bold" }}>
                Security
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Terms
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                Privacy
              </p>
              <p style={{ margin: "5px 13px", fontSize: "15px", color: "gray" }}>
                GDPR
              </p>
            </div>
          </Typography>
        </Popover>
        <hr style={{ width: "20px", marginTop: "20px" }} />
        <Link to="/dashboard" >
          <AccessTimeIcon style={{ marginLeft: "8px" }} fontSize="large" />
          <span>HOURS</span>
        </Link>
        <Link to="/task">
          <AssignmentTurnedInRoundedIcon style={{ marginLeft: "4px" }} />
          <span>TASKS</span>
        </Link>
        <Link to="/project">
          <WorkIcon style={{ marginLeft: "15px" }} />
          <span>PROJECTS</span>
        </Link>
        <Link to="">
          <Person3Icon style={{ marginLeft: "8px" }} />
          <span>PEOPLE</span>
        </Link>
        <Link to="">
          <BarChartIcon style={{ marginLeft: "10px" }} />
          <span>REPORT</span>
        </Link>
        <Link to="">
          <MonetizationOnIcon style={{ marginLeft: "15px" }} />
          <span>INVOICES</span>
        </Link>
        <SettingsIcon className="settingIcon" />
        <CircleNotificationsIcon className="alarmIcon" color="disabled" />
        <SentimentSatisfiedAltIcon
          className="smileIcon"
          color="disabled"
          aria-describedby={id}
          variant="contained"
          onClick={handleClickSmile}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleCloseSmile}
          anchorOrigin={{
            vertical: "right",
            horizontal: "right",
          }}
          style={{ marginLeft: "25px" }}
        >
          <Typography sx={{ p: 1 }}>
            <div>
              <p style={{ margin: "0px 3px ", fontSize: "18px" }}>
                Vishal Gupta
              </p>
              <p style={{ margin: "0px 3px", fontSize: "15px", color: "gray" }}>
                vishalg1021997@gmail.com
              </p>
            </div>
            <hr />
            <div>
              <p style={{ margin: "0px 3px", fontSize: "15px", color: "gray" }}>
                Edit Profile
              </p>
              <p style={{ margin: "5px 3px", fontSize: "15px", color: "gray" }}>
                Notification settings
              </p>
              <p style={{ margin: "5px 3px", fontSize: "15px", color: "gray" }}>
                Help & Support
              </p>
              <p style={{ margin: "5px 3px", fontSize: "15px", color: "gray" }}>
                Keyboard shortcuts
              </p>
            </div>
            <hr />
            <p style={{ margin: "5px 3px", fontSize: "15px", color: "gray" }}>
              Sign out
            </p>
          </Typography>
        </Popover>
      </div>
    </div>
  );
};

export default Sidebar;
