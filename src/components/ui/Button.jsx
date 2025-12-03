import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  name = null,
  url,
  icon = null, // 기본 아이콘
  activeIcon = null, // 활성화 아이콘 (선택)
  iconStyle = null,
  isActive = true, // 지금 탭이 활성화인지 여부
}) {
  // 활성화 상태면 activeIcon이 있으면 그걸 쓰고, 없으면 기존 icon 사용
  const iconSrc = isActive && activeIcon ? activeIcon : icon;

  return (
    <div>
      <Link to={url}>
        <button
          className={`${styles.button} ${isActive ? styles.active : ""}`}
          type="button"
        >
          {iconSrc && (
            <img
              className={`${styles.gotoIcon} ${
                isActive ? styles.gotoIconActive : ""
              }`}
              src={iconSrc}
              alt="button-icon"
              style={iconStyle}
            />
          )}
          <span className={isActive ? styles.textActive : styles.text}>
            {name}
          </span>
        </button>
      </Link>
    </div>
  );
}
