import styles from "./lat_act_tbl_row.module.css";
// import React from 'react';


function LatestActivitiesTableRow() {

  // const [dates,setDate] = React.useState('')

  // const d = new Date();

  // setDate(d.getHours + ':' + d.getMinutes)

  return (
    <tr>
      <td>
        <div>
          <div className={styles.svgdiv}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13.5" viewBox="0 0 8 18" fill="white"><path d="M2.754 4a1 1 0 0 1-.96-.719L1.026.659A.5.5 0 0 1 1.5 0h5a.5.5 0 0 1 .475.658l-.769 2.623a1 1 0 0 1-.96.719H2.754zm2.494 2a1 1 0 0 1 .97.76l1.77 7.126a.5.5 0 0 1-.134.468l-3.5 3.5a.502.502 0 0 1-.708 0l-3.5-3.5a.5.5 0 0 1-.133-.468L1.775 6.76A1 1 0 0 1 2.746 6h2.502z"></path></svg>
          </div>
          <p>Vishal Gupta</p>
        </div>
      </td>
      <td>
        <div>
          <div className={styles.imgdiv}>
           <img src="https://i.ibb.co/W2JSpwx/Capture2.png"></img>
          </div>
          <p>Vishal Gupta created client</p>
        </div>
      </td>
      <td>17:51</td>
    </tr>
  );
}

export { LatestActivitiesTableRow };
