import { useState } from "react";
import styles from "./ChallengePeriod.module.css";

export default function ChallengePeriod() {
  // 달력에 보여줄 날짜들 (예시로 1일부터 30일까지 만듭니다)
  // 나중에는 실제 달력 라이브러리나 로직으로 교체할 수 있어요.
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const [selectedDate, setSelectedDate] = useState(17); // 예시로 17일 선택됨

  return (
    <div className={styles.container}>
      {/* 1. 질문 텍스트 */}
      <h3 className={styles.question}>도전 기간을 설정해주세요.</h3>

      {/* 2. 정보창 (캘린더 보기 등) */}
      <div className={styles.infoSection}>
        <div className={styles.periodText}>
          오늘 - 10월 17일 <span className={styles.orangeText}>17일 도전</span>
        </div>
        <div className={styles.calendarControl}>
          <span>캘린더 보기</span>
          <div className={styles.arrows}>
            {/* 화살표 아이콘 대신 텍스트로 넣었습니다. 아이콘으로 교체 가능! */}
            <span>◀</span> 10월 <span>▶</span>
          </div>
        </div>
      </div>

      {/* 3. 달력 그리드 (동그라미들) */}
      <div className={styles.calendarGrid}>
        {days.map((day) => (
          <button
            key={day}
            className={`${styles.dayButton} ${
              day === selectedDate ? styles.selected : ""
            } ${day === 2 ? styles.today : ""}`} // 2일은 '오늘'이라고 가정
            onClick={() => setSelectedDate(day)}
          >
            {/* 2일이면 '오늘', 아니면 숫자 보여주기 */}
            {day === 2 ? "오늘" : day}
          </button>
        ))}
      </div>
    </div>
  );
}
