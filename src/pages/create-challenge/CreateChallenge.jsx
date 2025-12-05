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
  const [viewingItem, setViewingItem] = useState(null);
  const [selectedReward, setSelectedReward] = useState(null);

  const titles = [
    "도전 생성하기",
    "도전 기간 설정", // step 1
    "보상 설정하기", // step 2
    "보상 설정하기", // step 3 (이미지 헤더 제목도 '보상 설정하기'네요)
  ];

  const handleRewardSelect = (product) => {
    setSelectedReward(product);
    setStep(step + 1);
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
        ); // 내용 생략
      case 1:
        return <ChallengePeriod />;
      case 2:
        // [수정] RewardSelection에게 상태 조종 리모컨(props)을 넘겨줍니다.
        return (
          <RewardSelection
            onSelect={handleRewardSelect}
            selectedItem={viewingItem} // 현재 보고 있는 아이템 전달
            setSelectedItem={setViewingItem} // 아이템 변경 함수 전달
          />
        );
      case 3:
        return <ChallengePayment selectedReward={selectedReward} />;
      default:
        return <div>끝</div>;
    }
  };

  const handleNext = () => {
    if (step === 3) {
      navigate("/"); // 최종 완료 시 홈으로
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2); // 결제 -> 보상 선택으로
    } else if (step === 2) {
      // ★ 여기가 핵심입니다! ★
      // 만약 보상 상세페이지를 보고 있다면(viewingItem이 있다면)?
      if (viewingItem) {
        setViewingItem(null); // 리스트로 돌아가기 (상세페이지 닫기)
      } else {
        setStep(1); // 리스트라면 이전 단계(기간 설정)로 가기
      }
    } else if (step === 1) {
      setStep(0);
    } else if (step === 0) {
      navigate(-1);
    }
  };

  return (
    <div className={styles.createChallenge}>
      <NavigateBar
        title={titles[step]}
        disableCreateBtn={true}
        onBack={handleBack}
      />

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
