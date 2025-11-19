function MissionHeader({ succedDays, leftDays, goal, prize }) {
  return (
    <div>
      <div>
        <p>
          {succedDays} 일째 도전 중이에요! {leftDays}일 남았어요
        </p>
        <p>{goal}</p>
      </div>
      <div>
        <p>보상 사진</p>
        <p>{prize}</p>
      </div>
    </div>
  );
}

export default MissionHeader;
