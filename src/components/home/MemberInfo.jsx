import styles from "./MemberInfo.module.css";
import BaseUserIcon from "../../assets/base-user-icon.svg?react";

function MemberInfo({ members = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <BaseUserIcon />
        <p>{members.length}명</p>
      </div>
      {members.map((member, idx) => (
        <div key={idx} className={styles.profile}>
          <p>개인 프로필 사진</p>
          <p>{member}</p>
        </div>
      ))}
    </div>
  );
}

export default MemberInfo;
