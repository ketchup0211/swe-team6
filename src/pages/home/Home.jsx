import { useState, useEffect } from "react";
import styles from "./Home.module.css";

import MissionHeader from "../../components/home/MissionHeader";
import MemberInfo from "../../components/home/MemberInfo";
import Notion from "../../components/home/Notion";
import CharacterGroup from "../../components/home/CharacterGroup";
import PhotoSection from "../../components/home/PhotoSection"; // [NEW] 추가
import Calendar from "../../components/home/Calendar";
import NavigateBar from "../../components/ui/NavigateBar";

function Home() {
  const [data, setData] = useState({
    succedDays: 0,
    leftDays: 0,
    goal: "",
    prize: "",
    members: [],
    notion: "",
  });

  useEffect(() => {
    // 실제 API 연동 전까지는 더미데이터가 화면에 보이도록,
    // fetch 실패 시에도 기본값이 잘 렌더링되는지 확인해주세요.
    fetch("http://localhost:5173/data/homeData.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0]) setData(data[0]);
      })
      .catch((err) => console.log("데이터 로딩 실패(더미 사용 추천):", err));
  }, []);

  return (
    <div id={styles.container}>
      <NavigateBar title="" disableCreateBtn={true} />
      <MissionHeader
        succedDays={data.succedDays}
        leftDays={data.leftDays}
        goal={data.goal}
        prize={data.prize}
      />

      {/* 멤버 리스트 (가로 스크롤) */}
      <MemberInfo members={data.members} />

      {/* 공지사항 */}
      <Notion notion={data.notion} />

      {/* [1] 캐릭터 현황판 */}
      <CharacterGroup />

      {/* [2] 인증 사진첩 (흰색 배경 박스 안으로 넣으려면 구조 변경 필요) */}
      <div className={styles.whiteSection}>
        <PhotoSection />
        <div className={styles.divider}></div> {/* 간격 띄우기 */}
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
