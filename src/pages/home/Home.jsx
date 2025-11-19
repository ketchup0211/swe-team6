import { useState, useEffect } from "react";
import MissionHeader from "../../components/home/missionHeader";

function Home() {
  const [data, setData] = useState([]);
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
    <div>
      <div>
        <MissionHeader
          succedDays={data.succedDays}
          leftDays={data.leftDays}
          goal={data.goal}
          prize={data.prize}
        />
        <div>
          <span>
            <p>총 인원 정보</p>
            <div>
              <p>개인 프로필 사진</p>
              <p>개인 이름</p>
            </div>
          </span>
        </div>
        <div>
          <p>공지 : 다들 잊지 말고 힘내봅시다!</p>
        </div>
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
    </div>
  );
}

export default Home;
