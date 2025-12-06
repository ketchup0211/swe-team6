import { useState } from "react";
import styles from "./Calendar.module.css";

function Calendar() {
  const [currentDate] = useState(new Date());

  // 예시: 출석 성공한 날짜들 (일자만 저장)
  const checkedDays = [1, 15, 22];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0~11

  // 이번 달의 마지막 날짜 구하기
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // 이번 달 1일의 요일 구하기 (앞에 빈칸 채우기용)
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // 달력 날짜 배열 생성
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.dateLabel}>11월 3일</span>
        <h3 className={styles.title}>캘린더 보기</h3>
        {/* 우측 정렬된 컨트롤러 */}
        <div className={styles.controls}>◀ {month + 1}월 ▶</div>
      </div>

      <div className={styles.grid}>
        {/* 1. 앞쪽 빈칸 */}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* 2. 날짜들 */}
        {days.map((day) => {
          const isChecked = checkedDays.includes(day);
          return (
            <div key={day} className={styles.dayCell}>
              {isChecked ? (
                <div className={styles.checkMark}>✔</div>
              ) : (
                <span className={styles.dayNumber}>{day}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
