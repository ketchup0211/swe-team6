import styles from "./Avatar.module.css";
import avatar from "../../assets/avatar/avatar.png";
import MessagePoint from "../../assets/message-point.svg?react";
import AvatarShade from "../../assets/avatar/avatar-shade.svg?react";
function Avatar({ alert }) {
  const friend = "지현이";
  const hasMessage = friend !== "";

  return (
    <div className={styles.avatarSection}>
      <div
        className={`${styles.messageBubbleContainer} ${
          !hasMessage ? styles.messageBubbleHidden : ""
        }`}
      >
        <div className={styles.messageBubble}>
          <span className={styles.messageName}>{friend || " "}</span>
          <span className={styles.message}>
            가 콕! <br />
            얼른 미션 하러가요
          </span>
        </div>
        <MessagePoint />
      </div>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <AvatarShade className={styles.avatarShade} />
      </div>
    </div>
  );
}

export default Avatar;
