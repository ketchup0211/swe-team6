import styles from "./NextButton.module.css";

// onClick: 부모가 전달해준 "클릭되면 실행할 함수"
// text: 버튼에 적힐 글자 (예: 다음, 설정하기 등)
export default function NextButton({ onClick, text = "다음" }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
