import { useState } from "react";
import styles from "./ChallengePeriod.module.css";

export default function ChallengePeriod() {
  // --- 1. 날짜 계산을 위한 기초 데이터 준비 (변하지 않는 기준) ---
  const today = new Date(); // 찐 현재 시간
  // 시간을 00:00:00으로 초기화 (날짜 비교를 정확하게 하기 위해)
  today.setHours(0, 0, 0, 0);

  // --- 2. 상태(State) 관리 ---
  // viewDate: 현재 화면에 보여주고 있는 달력의 기준 (월)
  const [viewDate, setViewDate] = useState(new Date());

  // 선택된 날짜들 (이제 숫자가 아니라 'Date 객체' 전체를 저장해요)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // --- 3. 달력 화면을 그리기 위한 계산 ---
  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth(); // 0(1월) ~ 11(12월)

  // 이번 달의 마지막 날짜 (예: 31)
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  // 이번 달 1일이 무슨 요일인지 (0:일요일 ~ 6:토요일)
  // 이걸 알아야 달력 앞부분에 빈칸을 채울 수 있어요!
  const startDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  // --- 4. 이벤트 핸들러 (버튼 클릭 동작) ---

  // < [이전 달] [다음 달] > 버튼 기능
  const changeMonth = (offset) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setViewDate(newDate);
  };

  // 날짜 클릭 기능
  const handleDateClick = (day) => {
    // 클릭한 날짜를 'Date 객체'로 만듭니다.
    const clickedDate = new Date(viewYear, viewMonth, day);

    // [유효성 검사] 오늘보다 과거는 클릭 금지
    if (clickedDate < today) return;

    // 로직 1: 아무것도 선택 안 됨 -> 시작일 설정
    if (!startDate) {
      setStartDate(clickedDate);
      return;
    }

    // 로직 2: 시작일은 있고, 종료일은 없고, 클릭한 날짜가 시작일보다 미래임 -> 종료일 설정
    if (startDate && !endDate && clickedDate >= startDate) {
      setEndDate(clickedDate);
      return;
    }

    // 로직 3: 다시 클릭하면 초기화하고 시작일로 재설정
    setStartDate(clickedDate);
    setEndDate(null);
  };

  // --- 5. 텍스트 표시 도우미 ---
  const formatDate = (date) => {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const getPeriodText = () => {
    if (!startDate) return "기간을 설정해주세요.";
    if (!endDate) return `${formatDate(startDate)} - 종료일을 선택해주세요`;

    // 날짜 차이 계산 (밀리초 단위 차이 -> 일 단위 변환)
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    return (
      <>
        {formatDate(startDate)} - {formatDate(endDate)}{" "}
        <span className={styles.orangeText}>{diffDays}일 도전</span>
      </>
    );
  };

  // --- 6. 실제 렌더링 ---
  return (
    <div className={styles.container}>
      <h3 className={styles.question}>도전 기간을 설정해주세요.</h3>

      <div className={styles.infoSection}>
        <div className={styles.periodText}>{getPeriodText()}</div>

        <div className={styles.calendarControl}>
          <span>캘린더 보기</span>
          <div className={styles.arrows}>
            {/* 화살표에 클릭 기능 연결 */}
            <span onClick={() => changeMonth(-1)}>◀</span>
            {viewMonth + 1}월<span onClick={() => changeMonth(1)}>▶</span>
          </div>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {/* 요일 헤더 (일 월 화 수 목 금 토) - 필요하면 주석 해제해서 쓰세요 */}
        {/* {['일','월','화','수','목','금','토'].map(d => <div key={d} className={styles.dayLabel}>{d}</div>)} */}

        {/* 1일 앞의 빈칸 채우기 */}
        {Array.from({ length: startDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* 날짜 버튼들 */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const currentDate = new Date(viewYear, viewMonth, day);

          // 상태 확인 (비교를 위해 시간 정보는 getTime()으로 비교하거나 객체끼리 비교)
          const isPast = currentDate < today;
          // 오늘 날짜인지 확인 (연, 월, 일 모두 같아야 함)
          const isToday = currentDate.getTime() === today.getTime();

          const isStart =
            startDate && currentDate.getTime() === startDate.getTime();
          const isEnd = endDate && currentDate.getTime() === endDate.getTime();
          const isRange =
            startDate &&
            endDate &&
            currentDate > startDate &&
            currentDate < endDate;

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              disabled={isPast}
              className={`
                ${styles.dayButton} 
                ${isStart || isEnd ? styles.selected : ""} 
                ${isRange ? styles.inRange : ""}
                ${isToday && !isStart && !isEnd && !isRange ? styles.today : ""}
                ${isPast ? styles.disabled : ""}
              `}
            >
              {/* 오늘이면 '오늘' 글자, 아니면 숫자 */}
              {isToday ? "오늘" : day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
