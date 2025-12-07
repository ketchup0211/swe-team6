import styles from './PurchaseModal.module.css';
import pointIcon from '../../assets/point-icon.png';

export default function PurchaseModal({ item, userPoint, onConfirm, onCancel }) {
  if (!item) return null;

  const { Component, name, price } = item;
  const canAfford = userPoint >= price;

  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* 아이템 아이콘 */}
        <div className={styles.itemPreview}>
          <Component className={styles.itemIcon} />
        </div>

        {/* 아이템 이름 */}
        <h2 className={styles.itemName}>{name}</h2>

        {/* 구매 확인 메시지 */}
        <p className={styles.message}>
          <span className={styles.highlight}>{name}</span> 아이템을 구매하시겠습니까?
        </p>

        {/* 포인트 정보 */}
        <div className={styles.pointInfo}>
          <div className={styles.pointRow}>
            <span>구입 후 보유 포인트</span>
            <div className={styles.pointValue}>
              <img src={pointIcon} alt="포인트" className={styles.pointIcon} />
              {userPoint - price}
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className={styles.buttons}>
          <button className={styles.cancelButton} onClick={onCancel}>
            취소
          </button>
          <button 
            className={styles.confirmButton} 
            onClick={onConfirm}
            disabled={!canAfford}
          >
            구매하기
          </button>
        </div>

        {!canAfford && (
          <p className={styles.errorMessage}>포인트가 부족합니다</p>
        )}
      </div>
    </div>
  );
}
