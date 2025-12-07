import styles from './MyChallenge.module.css';
import NavigateBar from '../../components/ui/NavigateBar';
import RoomCard from '../../components/my-challenge/RoomCard';
import { useAuth } from '../../hooks/useAuth';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../constants/api';
import { MOCK_CHALLENGE_LIST } from '../../constants/mockData';

function MyChallenge() {
  const { userId } = useAuth();
  const { data: challenges = MOCK_CHALLENGE_LIST } = useFetch(
    API_ENDPOINTS.CHALLENGE.GET_BY_USER(userId),
    MOCK_CHALLENGE_LIST
  );
  return (
    <div className={styles.container}>
      <NavigateBar title="지금 진행중인 도전" />

      <div className={styles.roomCardList}>
        {Array.isArray(challenges) && challenges.map((challenge) => (
          <RoomCard
            key={challenge.id}
            title={challenge.name}
            subtitle={challenge.category}
            type={challenge.participants > 1 ? 'group' : 'single'}
          />
        ))}
      </div>
    </div>
  );
}

export default MyChallenge;
