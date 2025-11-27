import { useState, useEffect } from "react";
import styles from "./Character.module.css";
import starIcon from "../../assets/star-icon.png";

function Character() {
  return (
    <div>
      <div className="characterContainer" id={styles.background}>
        <div>
          <div>
            <img src={starIcon} alt="star-icon" width="47" />
            <p>나의 도전</p>
            <p>공지</p>
          </div>
          <p>point</p>
        </div>
        <div>
          <p>character message</p>
          <p>character</p>
        </div>
      </div>
      <div>
        <p>bottom bar</p>
      </div>
    </div>
  );
}

export default Character;
