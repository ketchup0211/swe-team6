import { Link } from "react-router-dom";
import styles from "./Button.module.css";
export default function Button({ name, url, icon = null }) {
  return (
    <div>
      <Link to={url}>
        <button className={styles.button} type="button">
          {icon === null ? null : (
            <img className={styles.gotoIcon} src={icon} alt="button-icon" />
          )}
          {name}
        </button>
      </Link>
    </div>
  );
}
