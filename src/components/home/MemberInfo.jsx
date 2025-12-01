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
          <BaseUserIcon />
          <p>{member}</p>
        </div>
      ))}
    </div>
  );
}

export default MemberInfo;
