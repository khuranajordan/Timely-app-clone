import styles from "./Recent_pinned_card.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import PushPinIcon from "@mui/icons-material/PushPin";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InventoryIcon from "@mui/icons-material/Inventory";
import DeleteIcon from "@mui/icons-material/Delete";
import ClickAwayListener from '@mui/material/ClickAwayListener';

function RecentPinnedCard() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  const open1 = Boolean(anchorEl);
  const id = open1 ? "simple-popper" : undefined;

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.lefttop}>
          <div className={styles.svglogo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="23"
              viewBox="0 0 25 23"
              fill="white"
            >
              <path d="M21.59 4.6h-3.408V3.45c0-1.906-1.526-3.45-3.41-3.45h-4.545C8.344 0 6.818 1.544 6.818 3.45V4.6H3.41C1.526 4.6 0 6.145 0 8.05v11.5C0 21.455 1.526 23 3.41 23h18.18c1.884 0 3.41-1.545 3.41-3.45V8.05c0-1.905-1.526-3.45-3.41-3.45zM9.09 3.45c0-.635.51-1.15 1.137-1.15h4.546c.628 0 1.136.515 1.136 1.15V4.6H9.091V3.45z"></path>
            </svg>
          </div>
          <div className={styles.lefttopright}>
            <p>Communication</p>
            <p>Vishal Gupta</p>
          </div>
        </div>
        <div className={styles.leftbottom}></div>
      </div>

      <div className={styles.right}>
        <div className={styles.ellipsis} onClick={handleClick}>
          <svg
            data-testid="ellipsis-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="5"
            viewBox="0 0 20 5"
            fill="black"
          >
            <circle cx="17.5" cy="2.5" r="2.5"></circle>
            <circle cx="10" cy="2.5" r="2.5"></circle>
            <circle cx="2.5" cy="2.5" r="2.5"></circle>
          </svg>
        </div>
        <Popper id={id} open={open1} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            {/* <ClickAwayListener onClickAway={handleClose}> */}
            <div>
              <PushPinIcon />
              Pin to Dashboard
            </div>
            <br />
            <div>
              <EditIcon />
              Edit
            </div>
            <br />
            <div>
              <FileCopyIcon />
              Duplicate
            </div>
            <br />
            <div>
              <InventoryIcon />
              Archive
            </div>
            <br />
            <div>
              <DeleteIcon />
              Delete
            </div>
            {/* </ClickAwayListener> */}
          </Box>
        </Popper>
        <p>30:00 left</p>
      </div>
    </div>
  );
}

export { RecentPinnedCard };
