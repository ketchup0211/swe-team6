import styles from "./Notion.module.css";
import NotionIcon from "../../assets/notion-icon.svg?react";
import ToggleIcon from "../../assets/toggle-icon.svg?react";

function Notion({ notion }) {
  return (
    <div id={styles.container}>
      <div id={styles.notionContainer}>
        <NotionIcon />
        <p className={styles.text}>{notion}</p>
      </div>
      <ToggleIcon />
    </div>
  );
}

export default Notion;
