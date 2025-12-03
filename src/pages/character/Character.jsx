import { useState, useEffect } from "react";

import styles from "./Character.module.css";
import pointIcon from "../../assets/point-icon.png";

import ShortcutButton from "../../components/character/ShortcutButton";
import Avatar from "../../components/character/Avatar";
import ContentContainer from "../../components/character/contentContainer";
function Character() {
  const alert = [""];
  const userPoint = 144;
  return (
    <div className={styles.container}>
      <div className="characterContainer">
        <div className={styles.topContainer}>
          <div className={styles.shortcutContainer}>
            <ShortcutButton name={"나의 도전"} url={"/my-challenge"} />
            <ShortcutButton name={"공지"} url={"/"} />
          </div>
          <div className={styles.pointContainer}>
            <img
              className={styles.pointIcon}
              src={pointIcon}
              alt="point-icon"
            />
            <p className={styles.point}>{userPoint}</p>
          </div>
        </div>
        <Avatar alert={alert} />
      </div>
      <ContentContainer />
    </div>
  );
}

export default Character;
