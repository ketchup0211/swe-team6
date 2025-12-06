import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './NextButton.module.css';

const NextButton = memo(function NextButton({ onClick, text }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
});

NextButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

NextButton.defaultProps = {
  onClick: null,
  text: '다음',
};

export default NextButton;
