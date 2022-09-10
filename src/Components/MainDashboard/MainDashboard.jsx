import React from "react";
import brain from "../../Assets/brain.png";
import location from "../../Assets/navigation.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./MainDashboard.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modals from "./Modals";


const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const MainDashboard = () => {
  const [alignment, setAlignment] = React.useState("day");
  const [alignment2, setAlignment2] = React.useState("timeline");
  const [alignment3, setAlignment3] = React.useState("solo");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange2 = (event2, newAlignment2) => {
    setAlignment2(newAlignment2);
  };

  const handleChange3 = (event3, newAlignment3) => {
    setAlignment3(newAlignment3);
  };

  return (
    <>
      <Sidebar />
      <div className={style.top}>
        <div className="left">
          <ToggleButtonGroup
            color="primary"
            size="small"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            style={{ margin: "20px", height: "30px" }}
          >
            <ToggleButton value="day">Day</ToggleButton>
            <ToggleButton value="week">Week</ToggleButton>
            <ToggleButton value="month">Month</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="right">
          <ToggleButtonGroup
            color="primary"
            size="small"
            value={alignment3}
            exclusive
            onChange={handleChange3}
            aria-label="Platform"
            style={{ height: "30px" }}
          >
            <ToggleButton value="solo">Solo</ToggleButton>
            <ToggleButton value="company">Company</ToggleButton>
          </ToggleButtonGroup>
          <select style={{ padding: "5px", marginLeft: "15px", border: "1px solid grey", borderRadius: "5px" }}>
            <option>Me</option>
          </select>
          <select style={{ padding: "5px", margin: "0 15px", border: "1px solid grey", borderRadius: "5px" }}></select>
        </div>
      </div>

      <div className={style.main}>
        <div className={style.left}>
          <div className={style.leftTop}>
            <div>
              <h4>Timesheet</h4>
              <button>i</button>
            </div>
            <p>0h</p>
          </div>
          <div className={style.leftBottom}>
            <Modals />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.rightTop}>
            <div>
              <h4>Automatic time tracking</h4>
              <button className={style.rightTopBtn}>i</button>
            </div>
            <div>
              <ToggleButtonGroup
                color="primary"
                size="small"
                value={alignment2}
                exclusive
                onChange={handleChange2}
                aria-label="Platform"
                style={{ height: "30px" }}
              >
                <ToggleButton value="timeline">Timeline</ToggleButton>
                <ToggleButton value="list">List</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className={style.rightBottom}>
            <h1>See everyting</h1>
            <h1>you worked upon</h1>
            <p>Never forget what you worked on. Install Memory for Windows</p>
            <p>to get started with automatic time tracking. Learn more</p>
            <div className={style.rightBottomMemory}>
              <img
                src={brain}
                alt="brain"
                style={{ height: "40px", width: "auto" }}
              />
              <div>
                <p>Memory for Windows</p>
                <p>Capture the time you spend on apps and browser</p>
              </div>
              <p>Download</p>
            </div>
            <div className={style.rightBottomTracker}>
              <img
                src={location}
                alt="tracker"
                style={{ height: "40px", width: "auto" }}
              />
              <div>
                <p>Location Tracker</p>
                <p>Essential for the on-the-go professional</p>
              </div>
              <p>Connect</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;