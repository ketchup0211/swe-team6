import styles from "./Notion.module.css";

function Notion({ notion }) {
  return (
    <div id={styles.container}>
      <div id={styles.notionContainer}>
        <p>공지 아이콘</p>
        <p className={styles.text}>{notion}</p>
      </div>
      <p>토글 아이콘</p>
    </div>
  );
}

export default Notion;
