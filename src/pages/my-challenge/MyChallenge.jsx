import { useState } from "react";
import styles from "./MyChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";
import RoomCard from "../../components/my-challenge/RoomCard";

export default function MyChallenge() {
  // 가짜 데이터 (서버에서 받아올 목록이라고 가정)
  const challengeList = [
    {
      id: 1,
      title: "주 3회 헬스장 가기",
      subtitle: "건강한 몸 만들기 프로젝트",
      type: "single",
    },
    {
      id: 2,
      title: "아침 7시 기상하기",
      subtitle: "미라클 모닝 챌린지",
      type: "group",
    },
    {
      id: 3,
      title: "하루 물 2L 마시기",
      subtitle: "피부 좋아지는 습관",
      type: "single",
    },
    {
      id: 4,
      title: "매일 영단어 10개",
      subtitle: "토익 만점 가자",
      type: "group",
    },
    {
      id: 5,
      title: "독서 30분",
      subtitle: "한 달에 한 권 읽기",
      type: "group",
    },
  ];

  return (
    <div className={styles.container}>
      {/* disableCreateBtn={false}이므로 우측 + 버튼이 보입니다.
        + 버튼을 누르면 도전 생성 페이지로 이동하게 NavigateBar에 설정되어 있죠?
      */}
      <NavigateBar title="지금 진행중인 도전" />

      <div className={styles.roomCardList}>
        {/* 리스트를 돌면서 카드 만들기 */}
        {challengeList.map((challenge) => (
          <RoomCard
            key={challenge.id}
            title={challenge.title}
            subtitle={challenge.subtitle}
            type={challenge.type}
          />
        ))}
      </div>
    </div>
  );
}
