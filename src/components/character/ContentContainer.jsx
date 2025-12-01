import styles from "./ContentContainer.module.css";
function ContentContainer({}) {
  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <p>hi</p>
      </div>
      <div className={styles.contentContainer}>
        <p>bottom bar</p>
        <p>bottom bar</p>
        <p>bottom bar</p>
      </div>
    </div>
  );
}

export default ContentContainer;
