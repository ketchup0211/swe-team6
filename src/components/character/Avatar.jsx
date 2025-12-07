import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import avatar from '../../assets/avatar/avatar.png';
import MessagePoint from '../../assets/message-point.svg?react';
import AvatarShade from '../../assets/avatar/avatar-shade.svg?react';
import CharacterBody from '../../assets/character-parts/Frame 1707482228.svg?react';
import { useAuth } from '../../hooks/useAuth';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../constants/api';

function Avatar() {
  const { userId } = useAuth();
  const { data: avatarData } = useFetch(API_ENDPOINTS.AVATAR.GET(userId));
  const friend = avatarData?.friendName || "지현이";
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
        <CharacterBody className={styles.characterBody} />
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
