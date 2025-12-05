import { useState } from "react";
import styles from "./ChallengePayment.module.css";

// 결제 수단 데이터 (아이콘은 텍스트나 색상으로 대체했어요)
const PAY_METHODS = [
  { id: "naver_money", name: "네이버페이(머니)", color: "#03C75A" },
  { id: "naver_card", name: "네이버페이(카드)", color: "#03C75A" },
  { id: "zero", name: "제로페이", color: "#194095" },
  { id: "kb", name: "KB Pay", color: "#FFBC00" },
  { id: "toss", name: "토스페이", color: "#0064FF" },
  { id: "kakao", name: "카카오페이", color: "#FFEB00" },
  { id: "bank", name: "내통장결제", color: "#333" },
  { id: "payco", name: "PAYCO", color: "#FA2828" },
];

export default function ChallengePayment({ selectedReward }) {
  const [selectedMethod, setSelectedMethod] = useState("naver_money"); // 기본 선택

  // 1. 가격 계산 로직 (예: 3명이라고 가정)
  const totalAmount = selectedReward ? selectedReward.price : 0;
  const friendCount = 3;
  const amountPerPerson = Math.floor(totalAmount / friendCount);

  return (
    <div className={styles.container}>
      {/* 1. 상단 안내 문구 */}
      <div className={styles.header}>
        <h2 className={styles.amountText}>
          1명당{" "}
          <span className={styles.highlight}>
            {amountPerPerson.toLocaleString()}원
          </span>
          씩 걸면 돼요.
        </h2>
        <p className={styles.subText}>
          만약 <span className={styles.orangeText}>전원 모두</span> 달성률 80%
          미만일 경우, 각자 도전 달성률(%) 만큼 환불돼요.
        </p>
      </div>

      {/* 2. 친구들 캐릭터와 금액 말풍선 */}
      <div className={styles.friendsContainer}>
        {[1, 2, 3].map((id, index) => (
          <div key={id} className={styles.friendItem}>
            {/* 말풍선 */}
            <div className={styles.bubble}>
              {amountPerPerson.toLocaleString()}원
            </div>
            {/* 캐릭터 (이미지 대신 이모지) */}
            <div className={styles.avatar}>
              {index === 0 ? "🐥" : index === 1 ? "🐦" : "🍒"}
            </div>
            <span className={styles.name}>{index === 0 ? "나" : "김현아"}</span>
            {/* '나' 뱃지 */}
            {index === 0 && <span className={styles.meBadge}>나</span>}
          </div>
        ))}
      </div>

      {/* 3. 결제 수단 선택 그리드 */}
      <div className={styles.paymentSection}>
        <div className={styles.paymentHeader}>
          <span className={styles.paymentTitle}>결제방법</span>
          <span className={styles.paymentSub}>결제수단을 선택해주세요 ∧</span>
        </div>

        <div className={styles.grid}>
          {PAY_METHODS.map((method) => (
            <button
              key={method.id}
              className={`${styles.payButton} ${
                selectedMethod === method.id ? styles.selected : ""
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              {/* 아이콘 흉내 (색깔 동그라미) */}
              <div
                className={styles.payIcon}
                style={{ backgroundColor: method.color }}
              ></div>
              <span className={styles.payName}>{method.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
