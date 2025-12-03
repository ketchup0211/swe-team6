import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./CreateChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";
import NextButton from "../../components/create-challenge/NextButton"; // NextButton 위치 확인 필요

// 예시 컴포넌트들 (나중에 실제 만드신 캘린더, 보상 컴포넌트로 교체하면 돼요)
import TitleField from "../../components/create-challenge/TitleField";
import CategoryField from "../../components/create-challenge/CategoryField";
import FriendField from "../../components/create-challenge/FriendField";

import ChallengePeriod from "../../components/create-challenge/ChallengePeriod";

function CreateChallenge() {
  // 1. 현재 몇 단계인지 기억하는 변수 (0부터 시작)
  const [step, setStep] = useState(0);

  const navigate = useNavigate();
  // 2. 단계별 제목 목록 (책의 목차와 같아요)
  const titles = [
    "도전 생성하기", // step 0 일 때 제목
    "도전 생성하기", // step 1 일 때 제목
    "보상 설정하기", // step 2 일 때 제목
  ];

  // 3. 단계별로 보여줄 내용을 결정하는 함수
  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          // 1단계 화면: 예시로 TitleField를 넣었습니다.
          // 이미지처럼 만드실 땐 여기에 <Calendar /> 같은 걸 넣으시면 돼요.
          <>
            <TitleField />
            <CategoryField />
            <FriendField />
          </>
        );
      case 1:
        return (
          // 2단계 화면
          <>
            <ChallengePeriod />
            <div className={styles.description}>날짜를 고르는 화면입니다.</div>
          </>
        );
      case 2:
        return (
          // 3단계 화면
          <>
            <div className={styles.description}>보상을 고르는 화면입니다.</div>
          </>
        );
      default:
        return <div>모든 단계가 끝났습니다!</div>;
    }
  };

  // 4. 다음 버튼을 눌렀을 때 실행할 함수 (책장 넘기기)
  const handleNext = () => {
    // 만약(if) 지금이 마지막 단계(2)라면?
    if (step === 2) {
      navigate("/"); // 홈으로 이동해라!
    }
    // 아니라면(else)?
    else {
      setStep(step + 1); // 다음 페이지로 넘겨라!
    }
  };

  return (
    <div className={styles.createChallenge}>
      {/* 제목을 titles 배열에서 step 번호에 맞춰서 꺼내옵니다 */}
      <NavigateBar title={titles[step]} disableCreateBtn={true} />

      <div className={styles.container}>
        {/* 현재 step에 맞는 내용만 보여줍니다 */}
        {renderContent()}
      </div>

      {/* 버튼을 누르면 handleNext가 실행되도록 전달해줍니다 */}
      <div className={styles.bottomBar}>
        <NextButton
          onClick={handleNext}
          text={step === 2 ? "완료하기" : "다음"}
        />
      </div>
    </div>
  );
}

export default CreateChallenge;
