import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./MainDashboard.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const MainDashboard = () => {
  const [value, setValue] = React.useState(dayjs());
  return (
    <>
      <Sidebar />

      <div className={style.top}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            "& > *": {
              m: 2,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>Day</Button>
            <Button>Week</Button>
            <Button>Month</Button>
          </ButtonGroup>
        </Box>
        <div className={style.datePicker}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              value={value}
              minDate={dayjs("2017-01-01")}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div></div>
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
              <button>New Entry</button>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.rightTop}>
            <div>
              <h4>Automatic time tracking</h4>
              <button>i</button>
            </div>
            <div>
              <button>Timeline</button>
              <button>List</button>
            </div>
          </div>
          <div className={style.rightBottom}>
            <h1>See Everyting</h1>
            <h1>you worked upon</h1>
            <p>Never forget what you worked on. Install Memory for Windows</p>
            <p>to get started with automatic time tracking. Learn more</p>
            <div className={style.leftBottom}>
              <button>New Entry</button>
          </div>
          <div className={style.leftBottom}>
              <button>New Entry</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
