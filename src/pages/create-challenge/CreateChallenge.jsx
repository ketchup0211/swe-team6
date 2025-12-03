import { useState, useEffect } from "react";
import styles from "./CreateChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";
import CategoryField from "../../components/create-challenge/CategoryField";
import TitleField from "../../components/create-challenge/TitleField";
import FriendField from "../../components/create-challenge/FriendField";

function CreateChallenge() {
  const [title, setTitle] = useState("");
  return (
    <div className={styles.createChallenge}>
      <NavigateBar title={"도전 생성하기"} disableCreateBtn={true} />
      <div className={styles.container}>
        <TitleField value={title} onChange={(e) => setTitle(e.target.value)} />
        <CategoryField />
        <FriendField />
      </div>
    </div>
  );
}

export default CreateChallenge;
