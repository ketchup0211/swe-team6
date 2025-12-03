import { useState, useEffect } from "react";
import styles from "./MyChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";

function MyChallenge() {
  return (
    <div>
      <NavigateBar title={"지금 진행중인 도전"} />
    </div>
  );
}

export default MyChallenge;
