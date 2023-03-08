import { myData } from "../data/mu-data";

function Education() {
  return (
    <div className="education-container">
      <h3>Education</h3>
      {myData.education.map((item, index) => {
        return (
          <div className="graduated-container my-[20px]" key={index}>
            <h4>
              {item.academy} | {item.yearActive}
            </h4>
            <p>{item.major}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
