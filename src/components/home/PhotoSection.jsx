import styles from "./PhotoSection.module.css";
// import CameraIcon from "../../assets/camera.svg"; // 아이콘이 있다면 사용

function PhotoSection() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.date}>11월 3일</span>
        <br />
        인증사진 모아보기
      </h3>

      <div className={styles.grid}>
        {/* 1. 업로드 버튼 (고정) */}
        <div className={styles.uploadBox}>
          <span className={styles.cameraIcon}>📷</span>
          <p>업로드하기</p>
          {/* 내 사진이 아직 없으면 '아직 인증 전이에요' 뱃지 추가 가능 */}
        </div>

        {/* 2. 친구들 사진 (예시) */}
        <div
          className={styles.photoItem}
          style={{ backgroundColor: "#ddd" }}
        ></div>
        <div
          className={styles.photoItem}
          style={{ backgroundColor: "#eee" }}
        ></div>

        {/* 3. 콕 찌르기 버튼 (사진 없을 때) */}
        <div className={styles.pokeBox}>
          <span>👉</span>
          <p>콕 찌르기</p>
        </div>
      </div>

      <button className={styles.moreButton}>더보기 ▼</button>
    </div>
  );
}
export default PhotoSection;
