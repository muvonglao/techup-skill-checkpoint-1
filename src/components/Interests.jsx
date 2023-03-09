import { myData } from "../data/mu-data";

function Interests() {
  return (
    <div className="interests-container mt-[30px]">
      <h4>Interests</h4>
      {myData.interests.map((item, index) => {
        return (
          <div className="interests-container" key={index}>
            <p>- {item.activity}</p>
            <span>{item.detail}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Interests;
