import React from "react";
import styles from "./Footer.module.css";

const Footer1 = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <h3>
          Designed by <span style={{ fontWeight: "bold" }}>vikings</span> in
          Oslo, Norway 🇳🇴
        </h3>
        <img src="" alt="" />
        <img
          style={{ marginTop: "25px", width: "62px", height: "63px" }}
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39957b258af61b_ship.svg"
          alt=""
        />
        <img
          style={{ marginTop: "-25px", marginBottom: "50px" }}
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399572518af5ee_ocean.svg"
          alt=""
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.one}>
          <img
            width={"170px"}
            height="50px"
            src="https://assets-global.website-files.com/622f69e00c9cf2599f3c60d5/62556ba13d84b67cea42af8a_made-by-dark.svg"
            alt=""
          />
          <div className={styles.one1}>
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdb7877357a9300c3_TimeTracking_BestUsability_Total.svg"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg"
              alt=""
            />
          </div>
          <div className={styles.one2}>Start free trial</div>
        </div>
        <div className={styles.two}>
          <div className={styles.two1}>
            <h2>Features</h2>
            <p>Track time</p>
            <p>Track teams</p>
            <p>Track plans</p>
            <p>Our privacy promise</p>
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.two1}>
            <h2>Solutions</h2>
            <p>Consulting firms</p>
            <p>Software companies</p>
            <p>Agencies</p>
            <p>Designers and creatives</p>
            <p>Lawyers</p>
            <p>Teams</p>
          </div>
        </div>
        <div className={styles.four}>
          <div className={styles.two1}>
            <h2>Resources</h2>

            <p>Blog</p>
            <p>Case studies</p>
            <p>Podcast</p>
            <p>Webinars</p>
            <p>Time tracking guide</p>
            <p>Support</p>
          </div>
        </div>
        <div className={styles.five}>
          <h2>Get Timely on every device</h2>
          <div className={styles.five1}>
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951e1d8af644_App%20Store%20-%20eng.svg"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39950b828af639_Google%20Play%20-%20eng.svg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.six}>
          <div className={styles.two1}>
            <h2>Integrations</h2>
            <p>Google Calendar</p>
            <p>Outlook</p>
            <p>QuickBooks</p>
            <p>Zapier</p>
            <p>Zoom</p>
            <p>See all integrations</p>
          </div>
        </div>
        <div className={styles.seven}>
          <div className={styles.two1}>
            <h2>Compare</h2>
            <p>Timely vs RescueTime</p>
            <p>Timely vs Harvest</p>
            <p>Timely vs TSheets</p>
            <p>Timely vs Clockify</p>
            <p>Timely vs Toggl</p>
          </div>
        </div>
        <div className={styles.eight}>
          <div className={styles.two1}>
            <h2>About Memory</h2>
            <p>About us</p>
            <p>
              Jobs - <span>We're hiring!</span>
            </p>
            <p>Manifesto</p>
            <p>Download our apps</p>
            <p>API docs</p>
            <p>Memory app</p>
            <p>Contact us</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
