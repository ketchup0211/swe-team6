import { useState } from "react";
import styles from "./RewardSelection.module.css";

// 🥭 망고 창고 (상품 데이터) - 필터 테스트를 위해 가격대를 다양하게 추가했어요!
const PRODUCTS = [
  {
    id: 1,
    name: "[특가] 알뜰 미니 망고 2구",
    price: 15900,
    originalPrice: 18000,
    img: "🥭",
  },
  {
    id: 2,
    name: "[알뜰] 혼자 먹는 조각 망고",
    price: 12900,
    originalPrice: 15000,
    img: "🥭",
  },
  {
    id: 3,
    name: "[선물] 가성비 망고 세트",
    price: 29900,
    originalPrice: 32000,
    img: "🎁",
  },
  {
    id: 4,
    name: "[원월드] 프리미엄 고당도 애플망고",
    price: 35900,
    originalPrice: 37900,
    img: "🥭",
  },
  {
    id: 5,
    name: "[원월드] 골드망고 과일세트",
    price: 35900,
    originalPrice: 37900,
    img: "🎁",
  },
  {
    id: 6,
    name: "[프레시] 달콤한 망고 2kg",
    price: 42000,
    originalPrice: 45000,
    img: "🍋",
  },
  {
    id: 7,
    name: "[제주] 제주산 애플망고 선물세트",
    price: 55000,
    originalPrice: 60000,
    img: "🍊",
  },
  {
    id: 8,
    name: "[제주] 제주산 귤 선물세트",
    price: 45000,
    originalPrice: 50000,
    img: "🍊",
  },
];

export default function RewardSelection({
  onSelect,
  selectedItem,
  setSelectedItem,
}) {
  // 1. 상태 관리 (선택된 상품, 검색어, 가격 필터)
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 저장
  const [activeFilter, setActiveFilter] = useState("전체"); // 현재 눌린 필터 버튼 (기본값: 전체)

  // 2. 필터링 로직 (거름망) 🕵️‍♂️
  // 원본 데이터(PRODUCTS)를 가져와서 조건에 맞는 것만 남깁니다.
  const filteredProducts = PRODUCTS.filter((product) => {
    // (1) 검색어 조건: 검색어가 없거나, 이름에 검색어가 포함되어 있으면 통과
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // (2) 가격 조건: 현재 선택된 필터 버튼에 따라 통과 여부 결정
    let matchesPrice = true;
    if (activeFilter === "1만원대") {
      matchesPrice = product.price >= 10000 && product.price < 20000;
    } else if (activeFilter === "2만원대") {
      matchesPrice = product.price >= 20000 && product.price < 30000;
    } else if (activeFilter === "3만원대") {
      matchesPrice = product.price >= 30000 && product.price < 40000;
    } else if (activeFilter === "4만원대") {
      matchesPrice = product.price >= 40000 && product.price < 50000;
    } else if (activeFilter === "5-9만원대") {
      matchesPrice = product.price >= 50000 && product.price < 100000;
    }

    // 두 조건 모두 만족해야 최종 통과!
    return matchesSearch && matchesPrice;
  });

  // --- 화면 1: 상품 리스트 (진열대) ---
  const renderList = () => (
    <div className={styles.listContainer}>
      {/* 검색창 */}
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="원하는 보상을 검색해보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 글자 칠 때마다 상태 업데이트
        />
      </div>

      {/* 필터 버튼들 */}
      {/* 팁: 버튼을 클릭하면 setActiveFilter로 '현재 필터'를 바꿔줍니다 */}
      <div className={styles.filterChips}>
        {["전체", "1만원대", "2만원대", "3만원대", "4만원대", "5-9만원대"].map(
          (filter) => (
            <button
              key={filter}
              className={`${styles.chip} ${
                activeFilter === filter ? styles.activeChip : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* 상품 그리드 */}
      <div className={styles.productGrid}>
        {/* [중요] 전체 목록(PRODUCTS) 대신 걸러진 목록(filteredProducts)을 보여줍니다 */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={styles.productCard}
              onClick={() => setSelectedItem(product)}
            >
              <div className={styles.imagePlaceholder}>{product.img}</div>
              <div className={styles.productInfo}>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.price}>
                  {product.price.toLocaleString()}원
                </p>
              </div>
            </div>
          ))
        ) : (
          // 검색 결과가 없을 때 보여줄 메시지
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "40px",
              color: "#888",
            }}
          >
            조건에 맞는 상품이 없어요 😢
          </div>
        )}
      </div>
    </div>
  );

  // --- 화면 2: 상품 상세 (기존과 동일) ---
  const renderDetail = () => {
    const pricePerPerson = Math.floor(selectedItem.price / 3).toLocaleString();

    return (
      <div className={styles.detailContainer}>
        <div className={styles.bigImage}>{selectedItem.img}</div>
        <div className={styles.detailInfo}>
          <h3 className={styles.detailName}>{selectedItem.name}</h3>
          <div className={styles.priceRow}>
            <span className={styles.discountPercent}>5%</span>
            <span className={styles.finalPrice}>
              {selectedItem.price.toLocaleString()}원
            </span>
            <span className={styles.originalPrice}>
              {selectedItem.originalPrice.toLocaleString()}원
            </span>
          </div>
          <div className={styles.badge}>
            🙂 1명당 {pricePerPerson}원씩 걸면 돼요.
          </div>
        </div>
        <div className={styles.bottomButtonArea}>
          <button
            className={styles.backButton}
            onClick={() => setSelectedItem(null)}
          >
            취소
          </button>
          <button
            className={styles.confirmButton}
            onClick={() => onSelect && onSelect(selectedItem)}
          >
            이걸로 할게요
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {selectedItem ? renderDetail() : renderList()}
    </div>
  );
}
