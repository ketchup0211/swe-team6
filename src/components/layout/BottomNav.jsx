import { useLocation } from "react-router-dom";
import styles from "./BottomNav.module.css";
import Button from "../ui/Button";

export default function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.bottomNav}>
      <Button name={"홈"} url={"/character"} />
      <Button name={"백과사전"} url={"/"} />
      <Button name={"마이페이지"} url={"/profile"} />
    </div>
  );
}
