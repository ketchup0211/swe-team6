import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './MemberInfo.module.css';
import BaseUserIcon from '../../assets/base-user-icon.svg?react';

const MemberInfo = memo(function MemberInfo({ members }) {
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
});

MemberInfo.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string),
};

MemberInfo.defaultProps = {
  members: [],
};

export default MemberInfo;
