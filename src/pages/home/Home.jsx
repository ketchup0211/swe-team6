import { useState, useEffect } from "react";
import MissionHeader from "../../components/home/missionHeader";
import MemberInfo from "../../components/home/MemberInfo";
import Notion from "../../components/home/Notion";
import styles from "./Home.module.css";

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
    fetch("http://localhost:5173/data/homeData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, []);
  return (
    <div id={styles.container}>
      <MissionHeader
        succedDays={data.succedDays}
        leftDays={data.leftDays}
        goal={data.goal}
        prize={data.prize}
      />
      <MemberInfo members={data.members} />
      <Notion notion={data.notion} />
      <div>
        <p>캐릭터 컨테이너</p>
        <p>개별 캐릭터 상태, 캐릭터, 이름</p>
      </div>
      <div>
        <p>인증 사진 모아보기</p>
      </div>
      <div>
        <p>캘린더 보기</p>
      </div>
    </div>
  );
}

export default Home;
