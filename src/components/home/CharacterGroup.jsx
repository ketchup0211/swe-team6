import styles from "./CharacterGroup.module.css";

//members = [{name, progress, character_image_id, rank}]
function CharacterGroup({}) {
  return (
    <div>
      <p>캐릭터 컨테이너</p>
      {/*member 정보에 대해 map*/}
      <p>progress 말풍선</p>
      <p>character_image_id</p>
      {/*haracter_image_id로 이미지 가져오는 로직 구현 필요*/}
      <span>
        <p>rank</p>
        {/*rank에 따라 이미지 가져오는 로직 구현 필요*/}
        <p>name</p>
      </span>
    </div>
  );
}

export default CharacterGroup;
