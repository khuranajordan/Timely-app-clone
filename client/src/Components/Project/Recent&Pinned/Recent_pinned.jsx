import { RecentPinnedCard } from "./Recent_pinned_card";
import styles from "./Recent_pinned_card.module.css";

function RecentPinned() {
  return (
    <div>
      <h4 style={{marginBottom:'15px'}}>Recent and pinned projects</h4>
      <div className={styles.outer}>
        <RecentPinnedCard />
        <RecentPinnedCard />
      </div>
    </div>
  );
}

export { RecentPinned };
