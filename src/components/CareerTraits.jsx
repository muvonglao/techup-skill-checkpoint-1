import { myData } from "../data/mu-data";
function CareerTraits() {
  return (
    <div className="career-traits-container mt-[30px]">
      <h4 className="mb-[8px]">Additional Skills</h4>
      {myData.careerTraits.map((item, index) => {
        return (
          <div className="trait-container mb-[5px]" key={index}>
            <b>{item.trait}</b>
            <p>- {item.detail}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CareerTraits;
