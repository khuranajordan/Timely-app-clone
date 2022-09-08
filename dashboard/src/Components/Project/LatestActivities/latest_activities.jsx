import styles from "./latest_activities.module.css";
import { LatestActivitiesTableHeader } from "./lat_act_tbl_header";
import { LatestActivitiesTableRow } from "./lat_act_tbl_row";

function LatestActivities() {
  return (
    <div>
      <div className={styles.latactdiv}>
        <h3>Latest Activities</h3>
        <table className={styles.filterbuttons}>
          <tr>
            <td>All activities</td>
            <td>Regular</td>
            <td>Anomalies</td>
          </tr>
        </table>
      </div>
      <table className={styles.activitytbl}>
        <LatestActivitiesTableHeader />
        <LatestActivitiesTableRow />
        <LatestActivitiesTableRow />
        <LatestActivitiesTableRow />
      </table>
    </div>
  );
}

export { LatestActivities };
