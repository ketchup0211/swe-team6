import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './RoomCard.module.css';

const RoomCard = memo(function RoomCard({ title, subtitle, type }) {
  return (
    <div className={styles.roomCard}>
      <div className={styles.leftContainer}>
        {/* 1. 왼쪽 썸네일 영역 */}
        <div className={styles.thumbnailBox}>
          {type === "single" ? (
            // 꽉 찬 네모 (혼자 하는 도전)
            <div className={styles.fullSquare}></div>
          ) : (
            // 4개 격자 네모 (여럿이 하는 도전)
            <div className={styles.gridSquare}>
              <div className={styles.smallSquare}></div>
              <div className={styles.smallSquare}></div>
              <div className={styles.smallSquare}></div>
              <div className={styles.smallSquare}></div>
            </div>
          )}
        </div>

        {/* 2. 가운데 텍스트 영역 */}
        <div className={styles.textContainer}>
          <p className={styles.challengeTitle}>{title}</p>
          <p className={styles.challengeSubTitle}>{subtitle}</p>
        </div>
      </div>

      <div className={styles.rewardIcon}></div>
    </div>
  );
});

RoomCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(['single', 'group']),
};

RoomCard.defaultProps = {
  title: '도전 이름',
  subtitle: '부제목 또는 설정해놓은 공지',
  type: 'group',
};

export default RoomCard;
