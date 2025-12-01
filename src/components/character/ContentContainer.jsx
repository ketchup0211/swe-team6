import styles from "./ContentContainer.module.css";
function ContentContainer({}) {
  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <p>포인트상점</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contents}>
          <div className={styles.contentTitle}>
            <p className={styles.textEmphasize}>일일혜택</p>
            <p className={styles.textBold}>매일매일 지급되는 포인트</p>
          </div>
          <p>bottom bar</p>
          <p>bottom bar</p>
          <p>bottom bar</p>
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
