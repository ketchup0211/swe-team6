import { useState } from 'react';
import styles from './Shop.module.css';
import NavigateBar from '../../components/ui/NavigateBar';
import PurchaseModal from '../../components/shop/PurchaseModal';
import pointIcon from '../../assets/point-icon.png';
import avatar from '../../assets/avatar/avatar.png';
import { useAuth } from '../../hooks/useAuth';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS, API_BASE_URL } from '../../constants/api';

// 캐릭터 파츠 아이템 목록
import Part1 from '../../assets/character-parts/Frame 1707482220.svg?react';
import Part2 from '../../assets/character-parts/Frame 1707482221.svg?react';
import Part3 from '../../assets/character-parts/Frame 1707482222.svg?react';
import Part4 from '../../assets/character-parts/Frame 1707482223.svg?react';
import Part5 from '../../assets/character-parts/Frame 1707482224.svg?react';
import Part6 from '../../assets/character-parts/Frame 1707482225.svg?react';
import Part7 from '../../assets/character-parts/Frame 1707482226.svg?react';
import Part8 from '../../assets/character-parts/Frame 1707482227.svg?react';
import Part9 from '../../assets/character-parts/Frame 1707482228.svg?react';
import Part10 from '../../assets/character-parts/Frame 1707482229.svg?react';
import Part11 from '../../assets/character-parts/Frame 1707482230.svg?react';
import Part12 from '../../assets/character-parts/Frame 1707482231.svg?react';

// 파츠 카테고리: head, body, hand, accessory
const SHOP_ITEMS = [
  { id: 1, name: '보하하기', category: 'head', price: 100, Component: Part1, status: 'available' },
  { id: 2, name: '알 바구기', category: 'hand', price: 200, Component: Part2, status: 'available' },
  { id: 3, name: '검은 넥타이', category: 'body', price: 0, Component: Part3, status: 'equipped' },
  { id: 4, name: '검은테 안경', category: 'accessory', price: 0, Component: Part4, status: 'enough' },
  { id: 5, name: '귀여운 모자', category: 'head', price: 80, Component: Part5, status: 'available' },
  { id: 6, name: '빨간 리본', category: 'head', price: 20, Component: Part6, status: 'available' },
  { id: 7, name: '개구리 띠', category: 'head', price: 40, Component: Part7, status: 'available' },
  { id: 8, name: '핑크 리본', category: 'head', price: 20, Component: Part8, status: 'available' },
  { id: 9, name: '앵두 머리핀', category: 'accessory', price: 30, Component: Part9, status: 'available' },
  { id: 10, name: '아이스크림', category: 'hand', price: 20, Component: Part10, status: 'available' },
  { id: 11, name: '베개보', category: 'body', price: 20, Component: Part11, status: 'available' },
  { id: 12, name: '별 브로치', category: 'accessory', price: 20, Component: Part12, status: 'available' },
];

function Shop() {
  const { userId } = useAuth();
  const { data: pointData, refetch: refetchPoints } = useFetch(API_ENDPOINTS.POINT.GET_BY_USER(userId), { point: 144 });
  const userPoint = pointData?.point || 144;
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [previewParts, setPreviewParts] = useState([]); // 미리보기용 파츠
  const [sheetHeight, setSheetHeight] = useState(20); // 바텀 시트 높이 (%) - 초기값 20%로 접힌 상태
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // 펼쳐진 상태

  const handleItemClick = (item) => {
    // 미리보기: 카테고리별로 하나씩만 착용 가능
    const isAlreadyWearing = previewParts.find(p => p.id === item.id);
    
    if (isAlreadyWearing) {
      // 이미 착용중이면 해제
      setPreviewParts(prev => prev.filter(p => p.id !== item.id));
    } else {
      // 같은 카테고리의 다른 파츠가 있으면 교체, 없으면 추가
      setPreviewParts(prev => [
        ...prev.filter(p => p.category !== item.category), // 같은 카테고리 제거
        item // 새 파츠 추가
      ]);
    }
  };

  const handleBuyClick = (item, e) => {
    e.stopPropagation(); // 부모 클릭 이벤트 방지
    if (item.status === 'available') {
      setSelectedItem(item);
    }
  };

  const handleSheetTouchStart = (e) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleSheetTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentY = e.touches[0].clientY;
    const deltaY = startY - currentY;
    const viewportHeight = window.innerHeight;
    const deltaPercent = (deltaY / viewportHeight) * 100;
    
    // 20%~80% 사이로 제한
    const newHeight = Math.max(20, Math.min(80, sheetHeight + deltaPercent));
    setSheetHeight(newHeight);
    setStartY(currentY);
  };

  const handleSheetTouchEnd = () => {
    setIsDragging(false);
    
    // 스냅: 40% 미만이면 20%로, 60% 이상이면 80%로
    if (sheetHeight < 40) {
      setSheetHeight(20);
      setIsExpanded(false);
    } else if (sheetHeight > 60) {
      setSheetHeight(80);
      setIsExpanded(true);
    } else {
      setSheetHeight(50);
      setIsExpanded(true);
    }
  };

  const handleSheetClick = () => {
    // 접혀있으면 펼치기, 펼쳐져있으면 접기
    if (!isExpanded) {
      setSheetHeight(80);
      setIsExpanded(true);
    } else {
      setSheetHeight(20);
      setIsExpanded(false);
    }
  };

  const handleConfirmPurchase = async () => {
    if (!selectedItem) return;
    
    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.ITEM.BUY}`,
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
          body: JSON.stringify({ 
            itemId: selectedItem.id, 
            userId 
          }),
        }
      );
      
      if (response.ok) {
        alert('구매 성공!');
        setSelectedItem(null);
        // 포인트 재조회
        if (refetchPoints) refetchPoints();
      } else {
        const error = await response.json();
        alert(`구매 실패: ${error.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('구매 중 오류:', error);
      alert('오류 발생: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status, price) => {
    if (status === 'equipped') return <span className={styles.badgeEquipped}>착용중</span>;
    if (status === 'enough') return <span className={styles.badgeEnough}>보유중</span>;
    return null;
  };

  return (
    <div className={styles.container}>
      <NavigateBar title="포인트상점" />
      
      {/* 캐릭터 미리보기 영역 */}
      <div className={styles.characterPreview}>
        {/* 포인트 표시 */}
        <div className={styles.pointBadge}>
          <img src={pointIcon} alt="포인트" className={styles.pointIcon} />
          {userPoint}
        </div>

        {/* 캐릭터 */}
        <div className={styles.characterWrapper}>
          <img src={avatar} alt="캐릭터" className={styles.characterImage} />
          
          {/* 미리보기 파츠 레이어 */}
          {previewParts.map(part => {
            const { Component, category } = part;
            // 카테고리별 CSS 클래스 적용
            const categoryClass = {
              'head': styles.previewPartHead,
              'body': styles.previewPartBody,
              'hand': styles.previewPartHand,
              'accessory': styles.previewPartAccessory,
            }[category] || styles.previewPart;
            
            return (
              <Component 
                key={part.id} 
                className={`${styles.previewPart} ${categoryClass}`}
              />
            );
          })}
        </div>
      </div>

      {/* 하단 상점 시트 */}
      <div 
        className={styles.shopSheet}
        style={{ maxHeight: `${sheetHeight}vh` }}
      >
        <div 
          className={styles.sheetHandle}
          onTouchStart={handleSheetTouchStart}
          onTouchMove={handleSheetTouchMove}
          onTouchEnd={handleSheetTouchEnd}
          onClick={handleSheetClick}
        ></div>
        
        <h3 className={styles.sheetTitle}>포인트상점</h3>

        {/* 아이템 그리드 */}
        <div className={styles.itemGrid}>
        {SHOP_ITEMS.map((item) => {
          const { Component } = item;
          const isPreview = previewParts.find(p => p.id === item.id);
          
          return (
            <div 
              key={item.id} 
              className={`${styles.itemCard} ${isPreview ? styles.itemCardActive : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {/* 아이콘 */}
              <div className={styles.itemIcon}>
                <Component className={styles.partIcon} />
              </div>
              
              {/* 이름 */}
              <span className={styles.itemName}>{item.name}</span>
              
              {/* 가격 또는 상태 */}
              {getStatusBadge(item.status, item.price) || (
                <div className={styles.priceRow}>
                  <div className={styles.priceTag}>
                    <img src={pointIcon} alt="포인트" className={styles.priceIcon} />
                    {item.price}
                  </div>
                  <button 
                    className={styles.buyButton}
                    onClick={(e) => handleBuyClick(item, e)}
                  >
                    구매
                  </button>
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>

      {/* 구매 모달 */}
      {selectedItem && (
        <PurchaseModal
          item={selectedItem}
          userPoint={userPoint}
          onConfirm={handleConfirmPurchase}
          onCancel={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default Shop;
