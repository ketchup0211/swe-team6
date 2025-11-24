import styles from "./Notion.module.css";
import NotionIcon from "../../assets/notion-icon.svg?react";

function Notion({ notion }) {
  return (
    <div id={styles.container}>
      <div id={styles.notionContainer}>
        <NotionIcon />
        <p className={styles.text}>{notion}</p>
      </div>
      <p>토글 아이콘</p>
    </div>
  );
}

export default Notion;
