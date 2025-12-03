import BottomNav from "./BottomNav";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.app}>
      {/* 앞으로 Header 쓰면 여기 넣기 좋음 */}
      <div className={styles.contents}>{children}</div>
      <BottomNav />
    </div>
  );
}

export default Layout;
