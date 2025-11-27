import { useState, useEffect } from "react";
import styles from "./Character.module.css";
import starIcon from "../../assets/star-icon.png";
import pointIcon from "../../assets/point-icon.png";
import Button from "../../components/ui/Button";

function Character() {
  return (
    <div className={styles.container}>
      <div className="characterContainer">
        <div className={styles.gotoContainer}>
          <div className={styles.gotoButtons}>
            <span>
              <img className={styles.gotoIcon} src={starIcon} alt="star-icon" />
              <Button
                className={styles.buttonText}
                name={"나의 도전"}
                url={"/"}
              />
            </span>
            <span>
              <img className={styles.gotoIcon} src={starIcon} alt="star-icon" />
              <Button name={"공지"} url={"/"} />
            </span>
          </div>
          <div className={styles.pointContainer}>
            <img
              className={styles.pointIcon}
              src={pointIcon}
              alt="point-icon"
            />
            <p className={styles.point}>usr point data</p>
          </div>
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
