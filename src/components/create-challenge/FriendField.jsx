import { useState } from "react";
import styles from "./FriendField.module.css";
import PersonIcon from "../../assets/base-user-icon.svg?react";
import SearchIcon from "../../assets/search-icon.svg?react";
import CloseIcon from "../../assets/close-icon2.svg?react";

const MOCK_FRIENDS = ["김현아", "김현아", "김현아", "김현아", "김현아"];

export default function FriendField() {
  const [friends, setFriends] = useState(MOCK_FRIENDS);

  const handleRemove = (name, index) => {
    setFriends((prev) =>
      prev.filter((_, i) => !(i === index && prev[i] === name))
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.currentFriends}>
        <p className={styles.label}>함께할 친구</p>

        {/* 상단: 인원수 + 선택된 친구 칩들 */}
        <div className={styles.selectedRow}>
          <div className={styles.count}>
            <PersonIcon className={styles.personIcon} />
            <span>{friends.length}명</span>
          </div>

          <div className={styles.chipList}>
            {friends.map((name, idx) => (
              <div className={styles.chip} key={`${name}-${idx}`}>
                <PersonIcon className={styles.avatar} />
                <span className={styles.name}>{name}</span>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => handleRemove(name, idx)}
                >
                  <CloseIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단: 검색 인풋 */}
      <div className={styles.searchBox}>
        <SearchIcon className={styles.searchIcon} />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="친구 이름을 검색하세요"
          maxLength={15}
        />
      </div>
    </div>
  );
}
