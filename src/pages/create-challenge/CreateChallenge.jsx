import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./CreateChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";
import NextButton from "../../components/create-challenge/NextButton";

// 컴포넌트들
import TitleField from "../../components/create-challenge/TitleField";
import CategoryField from "../../components/create-challenge/CategoryField";
import FriendField from "../../components/create-challenge/FriendField";
import ChallengePeriod from "../../components/create-challenge/ChallengePeriod";
import RewardSelection from "../../components/create-challenge/RewardSelection";

// [NEW] 방금 만든 결제 화면 import
import ChallengePayment from "../../components/create-challenge/ChallengePayment";

function CreateChallenge() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [selectedReward, setSelectedReward] = useState(null);

  const titles = [
    "도전 생성하기",
    "도전 기간 설정", // step 1
    "보상 설정하기", // step 2
    "보상 설정하기", // step 3 (이미지 헤더 제목도 '보상 설정하기'네요)
  ];

  const handleRewardSelect = (product) => {
    setSelectedReward(product);
    setStep(step + 1); // 보상 선택 -> 결제 화면(step 3)으로 이동
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
        return <RewardSelection onSelect={handleRewardSelect} />;
      case 3:
        // [NEW] 결제 컴포넌트 보여주기
        // 선택한 보상 정보(가격 등)를 넘겨줍니다.
        return <ChallengePayment selectedReward={selectedReward} />;
      default:
        return <div>모든 단계가 끝났습니다!</div>;
    }
  };

  const handleNext = () => {
    if (step === 3) {
      navigate("/"); // 최종 완료 시 홈으로
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.createChallenge}>
      <NavigateBar title={titles[step]} disableCreateBtn={true} />

      <div className={styles.container}>{renderContent()}</div>

      {/* step 2(보상선택)일 때는 내부 버튼을 쓰고,
         step 3(결제)일 때는 공통 버튼을 쓰되 텍스트를 바꿉니다.
      */}
      {step !== 2 && (
        <div className={styles.bottomBar}>
          <NextButton
            onClick={handleNext}
            text={step === 3 ? "이 보상으로 도전 시작하기" : "다음"}
          />
        </div>
      )}
    </div>
  );
}

export default CreateChallenge;
