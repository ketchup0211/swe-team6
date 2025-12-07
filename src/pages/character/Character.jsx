import styles from './Character.module.css';
import pointIcon from '../../assets/point-icon.png';
import ShortcutButton from '../../components/character/ShortcutButton';
import Avatar from '../../components/character/Avatar';
import ContentContainer from '../../components/character/ContentContainer';
import { ROUTES } from '../../constants/routes';
import { useAuth } from '../../hooks/useAuth';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../constants/api';

const MOCK_USER_POINT = 144;
const MOCK_ALERTS = [''];

function Character() {
  const { userId } = useAuth();
  const { data: pointData } = useFetch(API_ENDPOINTS.POINT.GET_BY_USER(userId), { point: MOCK_USER_POINT });
  const userPoint = pointData?.point || MOCK_USER_POINT;
  return (
    <div className={styles.container}>
      <div className="characterContainer">
        <div className={styles.topContainer}>
          <div className={styles.shortcutContainer}>
            <ShortcutButton name="나의 도전" url={ROUTES.CHALLENGES} />
            <ShortcutButton name="대시보드" url={ROUTES.DASHBOARD} />
            <ShortcutButton name="상점" url={ROUTES.SHOP} />
          </div>
          <div className={styles.pointContainer}>
            <img
              className={styles.pointIcon}
              src={pointIcon}
              alt="포인트 아이콘"
            />
            <p className={styles.point}>{userPoint}</p>
          </div>
        </div>
        <Avatar alert={MOCK_ALERTS} />
      </div>
      <ContentContainer />
    </div>
  );
}

export default Character;
