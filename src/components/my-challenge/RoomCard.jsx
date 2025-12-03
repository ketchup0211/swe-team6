import styles from "./RoomCard.module.css";

export default function RoomCard({
  title = "도전 이름",
  subtitle = "부제목 또는 설정해놓은 공지",
}) {
  return (
    <div className={styles.roomCard}>
      <div className={styles.container}>
        <div>
          <p>room member image</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.challengeTitle}>{title}</p>
          <p className={styles.challengeSubTitle}>{subtitle}</p>
        </div>
      </div>
      <div>
        <p>reward image</p>
      </div>
    </div>
  );
}
