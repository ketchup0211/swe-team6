import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import avatar from '../../assets/avatar/avatar.png';
import MessagePoint from '../../assets/message-point.svg?react';
import AvatarShade from '../../assets/avatar/avatar-shade.svg?react';

function Avatar() {
  const friend = "지현이";
  const hasMessage = friend !== "";

  return (
    <div className={styles.avatarWrapper}>
      <div
        className={`${!hasMessage ? styles.messageBubbleHidden : null} ${
          styles.messageBubbleContainer
        }`}
      >
        <div className={styles.messageBubble}>
          <span className={styles.messageName}>{friend}</span>
          <span className={styles.message}>
            가 콕! <br />
            얼른 미션 하러가요
          </span>
          <MessagePoint className={styles.messagePoint} />
        </div>
      </div>

      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <AvatarShade className={styles.avatarShade} />
      </div>
    </div>
  );
}

Avatar.propTypes = {
  alert: PropTypes.arrayOf(PropTypes.string),
};

Avatar.defaultProps = {
  alert: [],
};

export default Avatar;
