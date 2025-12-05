import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const location = useLocation();
  const hideNavPaths = ["/create-challenge"];
  const shouldHideNav = hideNavPaths.includes(location.pathname);
  return (
    <div className={styles.app}>
      {/* 앞으로 Header 쓰면 여기 넣기 좋음 */}
      <div className={styles.contents}>{children}</div>
      {!shouldHideNav && <BottomNav />}
    </div>
  );
}

export default Layout;
