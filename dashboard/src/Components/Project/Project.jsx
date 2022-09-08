import { LatestActivities } from "./LatestActivities/latest_activities";
import { RecentPinned } from "./Recent&Pinned/Recent_pinned";

import styles from "./Project.module.css"

function Project() {
  return (
    <div className={styles.Project}>
      <RecentPinned />
      <br />
      <br />
      <br />
      <LatestActivities />
    </div>
  );
}

export { Project };
