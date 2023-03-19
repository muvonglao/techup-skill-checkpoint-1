import { myData } from "../data/mu-data";
function SkillSet() {
  return (
    <div className="skill-set-container mt-[20px]">
      <h4>Technical Skills</h4>
      {myData.skillSet.map((item, index) => {
        return (
          <div key={item.index} className="flex flex-row mt-[15px]">
            <img
              src={item.skillIcon}
              alt={item.skill}
              className="w-[25px] h-[25px] mt-[5px] mr-[10px]"
            />
            <span key={index}>{item.skill}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SkillSet;
