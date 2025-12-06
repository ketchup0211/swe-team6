import { useNavigate } from 'react-router-dom';
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
import { ROUTES } from '../../constants/routes';

const STEP_TITLES = [
  '도전 생성하기',
  '도전 기간 설정',
  '보상 설정하기',
  '보상 설정하기',
];

function CreateChallenge() {
  const navigate = useNavigate();
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

  const handleNext = () => {
    defaultHandleNext(() => navigate(ROUTES.HOME));
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
