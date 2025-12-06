import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavigateBar.module.css';
import NavIcon from '../../assets/nav-button.svg?react';
import addIcon from '../../assets/add-icon.svg';
import Button from './Button';
import { ROUTES } from '../../constants/routes';

const NavigateBar = memo(function NavigateBar({ title, disableCreateBtn, onBack }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.navigateButton} onClick={handleBackClick}>
        <NavIcon />
      </button>

      <p className={styles.title}>{title}</p>

      {!disableCreateBtn && (
        <div className={styles.rightButton}>
          <Button
            url={ROUTES.CREATE_CHALLENGE}
            icon={addIcon}
            iconStyle={{ width: 20, height: 20 }}
          />
        </div>
      )}
    </div>
  );
});

NavigateBar.propTypes = {
  title: PropTypes.string,
  disableCreateBtn: PropTypes.bool,
  onBack: PropTypes.func,
};

NavigateBar.defaultProps = {
  title: '제목',
  disableCreateBtn: false,
  onBack: null,
};

export default NavigateBar;
