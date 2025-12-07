import styles from './ContentContainer.module.css';

function ContentContainer() {
  const walkNumComp = "5천";
  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <p>포인트상점</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contents}>
          <div className={styles.contentTitle}>
            <p className={styles.textEmphasize}>일일 혜택</p>
            <p className={styles.textBold}>매일매일 지급되는 포인트</p>
          </div>
          <div className={styles.contentList}>
            <div className={styles.itemCard}>
              <div className={styles.itemIcon}>🪙</div>
              <div className={styles.textContainer}>
                <p className={styles.textItem}>출석체크</p>
                <p className={styles.textDescription}>출석체크하고 포인트 받으러가기</p>
              </div>
            </div>
            <div className={styles.itemCard}>
              <div className={styles.itemIcon}>👟</div>
              <div className={styles.textContainer}>
                <p className={styles.textItem}>만보기</p>
                <p className={styles.textDescription}>이번주는 지난주보다 {walkNumComp}걸음 더 걸었어요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
