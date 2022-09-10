import { LatestActivities } from "./LatestActivities/latest_activities";
import { RecentPinned } from "./Recent&Pinned/Recent_pinned";
import  TabPanel  from "../TopBar/TabPanel";
import  {Topbar}  from "../TopBar/Topbar";

import styles from "./Project.module.css"
import Sidebar from "../Sidebar/Sidebar";

function Project() {
  return (
    <div className={styles.Project}>
      <Sidebar/>
      <Topbar/>
      <div style={{margin:'0 8%',marginTop:'35px'}}>

      <RecentPinned />
      <br />
      <br />
      <br />
      <LatestActivities />
      </div>
    </div>
  );
}

export { Project };
