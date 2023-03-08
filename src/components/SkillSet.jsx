import { myData } from "../data/mu-data";
function SkillSet() {
  return (
    <div className="skill-set-container">
      <h4>Skill Set</h4>
      <ul>
        {myData.skillSet.map((item, index) => {
          return <li key={index}>- {item.skill}</li>;
        })}
      </ul>
    </div>
  );
}

export default SkillSet;
