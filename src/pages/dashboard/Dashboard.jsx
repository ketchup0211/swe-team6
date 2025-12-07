import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { useAuth } from '../../hooks/useAuth';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../constants/api';
import { MOCK_CHALLENGE_LIST } from '../../constants/mockData';

function Dashboard() {
  const navigate = useNavigate();
  const { userId } = useAuth();
  
  // API 호출 (일단 mock 데이터 fallback)
  const { data: challenges = [] } = useFetch(
    API_ENDPOINTS.CHALLENGE.GET_BY_USER(userId),
    MOCK_CHALLENGE_LIST.slice(0, 3)
  );
  
  const { data: pointData } = useFetch(
    API_ENDPOINTS.POINT.GET_BY_USER(userId),
    { point: 144 }
  );

  const userPoint = pointData?.point || 0;

  return (
    <div className={styles.container}>
      {/* 상단 프로필 요약 */}
      <div className={styles.header}>
        <div className={styles.userSection}>
          <div className={styles.avatar}>🌱</div>
          <div className={styles.userInfo}>
            <h2 className={styles.greeting}>안녕하세요!</h2>
            <p className={styles.pointBadge}>
              <span className={styles.pointIcon}>⭐</span>
              {userPoint} 포인트
            </p>
          </div>
        </div>
        <button 
          className={styles.characterButton}
          onClick={() => navigate('/character')}
        >
          캐릭터
        </button>
      </div>

      {/* 진행 중인 챌린지 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>진행 중인 도전</h3>
          <button
            className={styles.moreButton}
            onClick={() => navigate('/challenges')}
          >
            전체보기
          </button>
        </div>

        {challenges && challenges.length > 0 ? (
          <div className={styles.challengeList}>
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className={styles.challengeCard}
                onClick={() => navigate(`/challenges/${challenge.id}`)}
              >
                <div className={styles.challengeIcon}>
                  {challenge.participants > 1 ? '👥' : '👤'}
                </div>
                <div className={styles.challengeInfo}>
                  <h4 className={styles.challengeTitle}>{challenge.name}</h4>
                  <p className={styles.challengeSubtitle}>{challenge.category}</p>
                </div>
                <div className={styles.challengeArrow}>›</div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyIcon}>🎯</p>
            <p className={styles.emptyText}>아직 도전이 없어요</p>
            <button
              className={styles.createButton}
              onClick={() => navigate('/challenges/create')}
            >
              첫 도전 시작하기
            </button>
          </div>
        )}
      </section>

      {/* 빠른 액션 */}
      <section className={styles.quickActions}>
        <button
          className={styles.actionButton}
          onClick={() => navigate('/challenges/create')}
        >
          <span className={styles.actionIcon}>➕</span>
          새 도전 만들기
        </button>
        <button
          className={styles.actionButton}
          onClick={() => navigate('/shop')}
        >
          <span className={styles.actionIcon}>🛍️</span>
          상점 방문하기
        </button>
      </section>
    </div>
  );
}

export default Dashboard;
