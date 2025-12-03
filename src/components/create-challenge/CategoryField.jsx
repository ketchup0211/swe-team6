import { useState } from "react";
import styles from "./CategoryField.module.css";
import CloseIcon from "../../assets/close-icon.svg?react";

const CATEGORIES = [
  "운동",
  "공부",
  "일상 습관",
  "다이어트",
  "마음 건강",
  "재테크",
  "외국어",
  "직접 입력",
];

export default function CategoryField() {
  const [selected, setSelected] = useState(["운동"]); // 기본 선택값

  const handleClick = (category) => {
    if (selected.includes(category)) {
      // 이미 선택됨 → 제거
      setSelected(selected.filter((item) => item !== category));
    } else {
      // 선택 안됨 → 추가
      setSelected([...selected, category]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>카테고리</p>

      <div className={styles.chipContainer}>
        {CATEGORIES.map((category) => {
          const isActive = selected.includes(category); // 배열 기반 체크

          return (
            <button
              key={category}
              type="button"
              className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
              onClick={() => handleClick(category)}
            >
              <span>{category}</span>
              {isActive && <CloseIcon className={styles.close} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
