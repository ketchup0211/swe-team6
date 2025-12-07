import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './CreateChallenge.module.css';
import NavigateBar from '../../components/ui/NavigateBar';
import NextButton from '../../components/create-challenge/NextButton';
import TitleField from '../../components/create-challenge/TitleField';
import CategoryField from '../../components/create-challenge/CategoryField';
import FriendField from '../../components/create-challenge/FriendField';
import ChallengePeriod from '../../components/create-challenge/ChallengePeriod';
import RewardSelection from '../../components/create-challenge/RewardSelection';
import ChallengePayment from '../../components/create-challenge/ChallengePayment';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import { useAuth } from '../../hooks/useAuth';
import { API_ENDPOINTS } from '../../constants/api';
import { ROUTES } from '../../constants/routes';

const STEP_TITLES = [
  '도전 생성하기',
  '도전 기간 설정',
  '보상 설정하기',
  '보상 설정하기',
];

function CreateChallenge() {
  const navigate = useNavigate();
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);
  const [challengeData, setChallengeData] = useState({
    title: '',
    category: '',
    friends: [],
    startDate: null,
    endDate: null,
    reward: null,
  });
  const {
    step,
    setStep,
    viewingItem,
    setViewingItem,
    selectedReward,
    setSelectedReward,
    handleNext: defaultHandleNext,
    handleBack: defaultHandleBack,
  } = useStepNavigation(0, 4);

  const handleRewardSelect = (product) => {
    setSelectedReward(product);
    setStep(step + 1);
  };

  const handleCreateChallenge = async () => {
    if (!selectedReward) {
      alert('보상을 선택해주세요.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://budding.onrender.com${API_ENDPOINTS.CHALLENGE.CREATE_FOR_USER(userId)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...challengeData,
            reward: selectedReward,
          }),
        }
      );
      if (response.ok) {
        alert('챌린지가 생성되었습니다!');
        navigate(ROUTES.HOME);
      } else {
        alert('첫린지 생성에 실패했습니다.');
      }
    } catch (error) {
      console.error('챌린지 생성 중 오류:', error);
      alert('오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (step === 3) {
      handleCreateChallenge();
    } else {
      defaultHandleNext(() => navigate(ROUTES.HOME));
    }
  };

  const handleBack = () => {
    const customBackHandlers = {
      2: () => {
        if (viewingItem) {
          setViewingItem(null);
        } else {
          setStep(1);
        }
      },
      3: () => setStep(2),
    };

    defaultHandleBack(customBackHandlers);
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <TitleField />
            <CategoryField />
            <FriendField />
          </>
        );
      case 1:
        return <ChallengePeriod />;
      case 2:
        return (
          <RewardSelection
            onSelect={handleRewardSelect}
            selectedItem={viewingItem}
            setSelectedItem={setViewingItem}
          />
        );
      case 3:
        return <ChallengePayment selectedReward={selectedReward} />;
      default:
        return <div>완료</div>;
    }
  };

  return (
    <div className={styles.createChallenge}>
      <NavigateBar
        title={STEP_TITLES[step]}
        disableCreateBtn={true}
        onBack={handleBack}
      />

      <div className={styles.container}>{renderContent()}</div>

      {step !== 2 && (
        <div className={styles.bottomBar}>
          <NextButton
            onClick={handleNext}
            text={step === 3 ? '이 보상으로 도전 시작하기' : '다음'}
          />
        </div>
      )}
    </div>
  );
}

export default CreateChallenge;
