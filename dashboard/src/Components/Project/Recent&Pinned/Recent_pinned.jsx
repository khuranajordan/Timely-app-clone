import { RecentPinnedCard } from "./Recent_pinned_card";
import styles from "./Recent_pinned_card.module.css";

function RecentPinned() {
  return (
    <div>
      <h3>Recent and pinned projects</h3>
      <div className={styles.outer}>
        <RecentPinnedCard />
        <RecentPinnedCard />
      </div>
    </div>
  );
}

export { RecentPinned };
