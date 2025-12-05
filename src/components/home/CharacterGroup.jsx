import styles from "./CharacterGroup.module.css";

// 예시 데이터 (나중에 props로 받아오세요)
const DUMMY_MEMBERS = [
  { id: 1, name: "김현아", status: "진행중..", rank: 1, img: "🐥" },
  { id: 2, name: "김현아", status: "미션완료!", rank: 2, img: "🐦" },
  { id: 3, name: "김현아", status: "진행중..", rank: 3, img: "🍒" },
  { id: 4, name: "김현아", status: "진행중..", rank: 4, img: "🍦" },
  { id: 5, name: "김현아", status: "미션완료!", rank: 5, img: "🐣" },
  { id: 6, name: "김현아", status: "진행중..", rank: 6, img: "🐥" },
];

function CharacterGroup({ members = DUMMY_MEMBERS }) {
  return (
    <div className={styles.container}>
      {members.map((member) => (
        <div key={member.id} className={styles.characterItem}>
          {/* 1. 말풍선 */}
          <div
            className={`${styles.bubble} ${
              member.status === "미션완료!" ? styles.done : ""
            }`}
          >
            {member.status}
          </div>

          {/* 2. 캐릭터 이미지 */}
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>{member.img}</div>
            {/* 랭킹 뱃지 (1, 2, 3등만 표시하거나 다 표시하거나) */}
            <div className={styles.rankBadge}>{member.rank}</div>
          </div>

          {/* 3. 이름 */}
          <p className={styles.name}>{member.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterGroup;
