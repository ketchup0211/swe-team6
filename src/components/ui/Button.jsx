import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = memo(function Button({ name, url, icon, activeIcon, iconStyle, isActive, alwaysColor }) {
  const iconSrc = isActive && activeIcon ? activeIcon : icon;

  return (
    <div>
      <Link to={url}>
        <button
          className={`${styles.button} ${isActive ? styles.active : ''}`}
          type="button"
        >
          {iconSrc && (
            <img
              className={`${styles.gotoIcon} ${
                isActive ? styles.gotoIconActive : ''
              } ${alwaysColor ? styles.alwaysColor : ''}`}
              src={iconSrc}
              alt={name || 'button icon'}
              style={iconStyle}
            />
          )}
          {name && (
            <span className={isActive ? styles.textActive : styles.text}>
              {name}
            </span>
          )}
        </button>
      </Link>
    </div>
  );
});

Button.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string,
  activeIcon: PropTypes.string,
  iconStyle: PropTypes.object,
  isActive: PropTypes.bool,
  alwaysColor: PropTypes.bool,
};

Button.defaultProps = {
  name: null,
  icon: null,
  activeIcon: null,
  iconStyle: null,
  isActive: true,
  alwaysColor: false,
};

export default Button;
