import styles from "./latest_activities.module.css";
import { LatestActivitiesTableHeader } from "./lat_act_tbl_header";
import { LatestActivitiesTableRow } from "./lat_act_tbl_row";

function LatestActivities() {

  function changeColor(event) {
   event.target.style = {"background-color":"grey", "color":"white"}
   
  }

  return (
    <div style={{margin:'15px'}}>
      <div className={styles.latactdiv}>
        <h3>Latest Activities</h3>
        <table className={styles.filterbuttons}>
          <tr>
            <td onClick={changeColor}>All activities</td>
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
