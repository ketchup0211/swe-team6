import { useNavigate } from "react-router-dom";
import styles from "./NavigateBar.module.css";
import NavIcon from "../../assets/nav-button.svg?react";
import addIcon from "../../assets/add-icon.svg";
import Button from "./Button";

// [수정] onBack prop 추가 (기본값은 undefined)
export default function NavigateBar({
  title = "제목",
  disableCreateBtn = false,
  onBack,
}) {
  const navigate = useNavigate();

  // [NEW] 뒤로가기 버튼 클릭 핸들러
  const handleBackClick = () => {
    if (onBack) {
      // 1. 부모가 시킨 행동이 있으면 그걸 따릅니다. (예: step - 1)
      onBack();
    } else {
      // 2. 없으면 원래대로 브라우저 뒤로가기를 합니다.
      navigate(-1);
    }
  };

  return (
    <div className={styles.container}>
      {/* onClick에 바로 navigate(-1)을 넣지 않고, 만든 함수를 연결해요 */}
      <button className={styles.navigateButton} onClick={handleBackClick}>
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
