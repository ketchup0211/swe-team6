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
        <div className={styles.imageFrame}>
          <img
            className={styles.image}
            src={
              "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiOPMOqwlBx76tteUUGV0y73iTJmAbq7nCm6qiGq2cjJgii5lYneGIsmwuRWvw9BgwuKebg84C0qFjlliSnzSvFEJhZewpnO6e3_nukjZmejMshpObog66"
            }
            alt={"prize-" + prize}
          />
        </div>
        <p className={styles.prize}>{prize}</p>
      </div>
    </div>
  );
}

export default MissionHeader;
