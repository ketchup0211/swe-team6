import styles from "./TitleField.module.css";

export default function TitleField({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>무엇에 함께 도전할까요?</p>

      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="도전 이름을 입력해주세요 (최대 15자)"
        maxLength={15}
      />
    </div>
  );
}
