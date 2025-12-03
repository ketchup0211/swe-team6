import { useLocation } from "react-router-dom";
import styles from "./BottomNav.module.css";
import home from "../../assets/botttom-nav/home.svg";
import book from "../../assets/botttom-nav/book.svg";
import user from "../../assets/botttom-nav/user.svg";
import Button from "../ui/Button";

export default function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.bottomNav}>
      <Button
        name={"홈"}
        url={"/character"}
        isActive={currentPath === "/character"}
        icon={home}
      />
      <Button
        name={"백과사전"}
        url={"/"}
        isActive={currentPath === "/"}
        icon={book}
      />
      <Button
        name={"마이페이지"}
        url={"/profile"}
        isActive={currentPath === "/profile"}
        icon={user}
      />
    </div>
  );
}
