import styles from "./MissionHeader.module.css";

function MissionHeader({ succedDays, leftDays, goal, prize }) {
  return (
    <div className={styles.container}>
      <div className={styles.missionContainer}>
        <p className={styles.daysContainer}>
          <span className={styles.days}>{succedDays}</span> 일째 도전 중이에요!{" "}
          <span className={styles.days}>{leftDays}</span>일 남았어요
        </p>
        <p className={styles.goal}>{goal}</p>
      </div>
      <div className={styles.prizeContainer}>
        <p>보상 사진</p>
        <p className={styles.prize}>{prize}</p>
      </div>
    </div>
  );
}

export default MissionHeader;
