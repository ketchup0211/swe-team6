import { useLocation } from 'react-router-dom';
import styles from './BottomNav.module.css';
import home from '../../assets/botttom-nav/home.svg';
import book from '../../assets/botttom-nav/book.svg';
import user from '../../assets/botttom-nav/user.svg';
import Button from '../ui/Button';
import { ROUTES } from '../../constants/routes';

function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHomeActive =
    currentPath === ROUTES.CHARACTER ||
    currentPath === ROUTES.MY_CHALLENGE ||
    currentPath === ROUTES.CREATE_CHALLENGE;

  const isEncyclopediaActive = currentPath === ROUTES.HOME;
  const isProfileActive = currentPath === ROUTES.PROFILE;

  return (
    <div className={styles.bottomNav}>
      <Button
        name="홈"
        url={ROUTES.CHARACTER}
        isActive={isHomeActive}
        icon={home}
      />
      <Button
        name="백과사전"
        url={ROUTES.HOME}
        isActive={isEncyclopediaActive}
        icon={book}
      />
      <Button
        name="마이페이지"
        url={ROUTES.PROFILE}
        isActive={isProfileActive}
        icon={user}
      />
    </div>
  );
}

export default BottomNav;
