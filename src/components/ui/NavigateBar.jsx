import { useNavigate } from "react-router-dom";
import styles from "./NavigateBar.module.css";
import NavIcon from "../../assets/nav-button.svg?react";
import addIcon from "../../assets/add-icon.svg";
import Button from "./Button";

export default function NavigateBar({
  title = "제목",
  disableCreateBtn = false,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.navigateButton} onClick={() => navigate(-1)}>
        <NavIcon />
      </button>

      <p className={styles.title}>{title}</p>

      {!disableCreateBtn && (
        <div className={styles.rightButton}>
          <Button
            url="/create-challenge"
            icon={addIcon}
            iconStyle={{ width: 20, height: 20 }}
          />
        </div>
      )}
    </div>
  );
}
