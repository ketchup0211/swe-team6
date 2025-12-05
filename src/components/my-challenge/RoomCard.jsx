import styles from "./RoomCard.module.css";

// 나중에는 실제 이미지 URL을 받겠지만, 지금은 스타일을 위해 type으로 구분해볼게요.
// type: 'single' (꽉 찬 네모), 'group' (4개 격자)
export default function RoomCard({
  title = "도전 이름",
  subtitle = "부제목 또는 설정해놓은 공지",
  type = "group", // 기본값은 그룹형
}) {
  return (
    <div className={styles.roomCard}>
      <div className={styles.leftContainer}>
        {/* 1. 왼쪽 썸네일 영역 */}
        <div className={styles.thumbnailBox}>
          {type === "single" ? (
            // 꽉 찬 네모 (혼자 하는 도전)
            <div className={styles.fullSquare}></div>
          ) : (
            // 4개 격자 네모 (여럿이 하는 도전)
            <div className={styles.gridSquare}>
              <div className={styles.smallSquare}></div>
              <div className={styles.smallSquare}></div>
              <div className={styles.smallSquare}></div>
              <div className={styles.smallSquare}></div>
            </div>
          )}
        </div>

        {/* 2. 가운데 텍스트 영역 */}
        <div className={styles.textContainer}>
          <p className={styles.challengeTitle}>{title}</p>
          <p className={styles.challengeSubTitle}>{subtitle}</p>
        </div>
      </div>

      {/* 3. 오른쪽 보상 아이콘 영역 */}
      <div className={styles.rewardIcon}></div>
    </div>
  );
}
