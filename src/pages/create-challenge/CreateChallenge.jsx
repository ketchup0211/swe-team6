import { useState, useEffect } from "react";
import styles from "./CreateChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";
import CategoryField from "../../components/create-challenge/CategoryField";

function CreateChallenge() {
  return (
    <div>
      <NavigateBar title={"도전 생성하기"} disableCreateBtn={true} />
      <div>
        <p>무엇에 함께 도전할까요?</p>
        <input
          type="text"
          placeholder="도전 이름을 입력해주세요 (최대 15자)"
          maxLength={15}
        />
      </div>
      <div>
        <CategoryField />
      </div>
      <div>
        <p>함께할 친구</p>
        <div></div>
        <input
          type="text"
          placeholder="친구 이름을 검색하세요"
          maxLength={15}
        />
      </div>
    </div>
  );
}

export default CreateChallenge;
