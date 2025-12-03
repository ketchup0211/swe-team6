import { useState, useEffect } from "react";
import styles from "./MyChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";
import RoomCard from "../../components/my-challenge/RoomCard";

function MyChallenge() {
  return (
    <div>
      <NavigateBar title={"지금 진행중인 도전"} />
      <div className={styles.roomCardList}>
        <RoomCard />
      </div>
    </div>
  );
}

export default MyChallenge;
