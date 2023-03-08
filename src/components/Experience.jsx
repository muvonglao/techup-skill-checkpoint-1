import { myData } from "../data/mu-data";

function Experience() {
  return (
    <div className="experience-container">
      <h3>Experience</h3>
      {myData.experience.map((item, index) => {
        return (
          <div className="workplace-container my-[20px]" key={index}>
            <h5>{item.organization}</h5>
            <h4>
              {item.position} | {item.yearActive}
            </h4>
            <ul className="my-[8px]">
              {item.responsibilities.map((item, index) => {
                return <li key={index}>- {item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
