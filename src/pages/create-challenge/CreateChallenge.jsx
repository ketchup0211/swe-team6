import { useState, useEffect } from "react";
import styles from "./CreateChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";

function CreateChallenge() {
  return (
    <div>
      <NavigateBar title={"도전 생성하기"} disableCreateBtn={true} />
    </div>
  );
}

export default CreateChallenge;
