import styles from "./BottomNav.module.css";
import Button from "../ui/Button";

export default function BottomNav() {
  return (
    <div className={styles.bottomNav}>
      <Button name={"home"} url={"/"} />
      <Button name={"profile"} url={"/profile"} />
      <Button name={"character"} url={"/character"} />
    </div>
  );
}
