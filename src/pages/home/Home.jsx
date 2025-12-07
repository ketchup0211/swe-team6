import { useParams } from 'react-router-dom';
import styles from './Home.module.css';
import MissionHeader from '../../components/home/MissionHeader';
import MemberInfo from '../../components/home/MemberInfo';
import Notion from '../../components/home/Notion';
import CharacterGroup from '../../components/home/CharacterGroup';
import PhotoSection from '../../components/home/PhotoSection';
import Calendar from '../../components/home/Calendar';
import NavigateBar from '../../components/ui/NavigateBar';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../constants/api';
import { MOCK_HOME_DATA } from '../../constants/mockData';

function Home() {
  const { id: challengeId } = useParams();
  
  // 챌린지 상세 정보 조회
  const { data } = useFetch(
    challengeId ? API_ENDPOINTS.CHALLENGE.GET_DETAIL(challengeId) : null,
    MOCK_HOME_DATA
  );

  return (
    <div id={styles.container}>
      <NavigateBar title="" disableCreateBtn={true} />
      <MissionHeader
        succedDays={data.succedDays}
        leftDays={data.leftDays}
        goal={data.goal}
        prize={data.prize}
      />

      <MemberInfo members={data.members} />
      <Notion notion={data.notion} />
      <CharacterGroup />

      <div className={styles.whiteSection}>
        <PhotoSection />
        <div className={styles.divider}></div>
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
