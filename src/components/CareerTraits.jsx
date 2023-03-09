import { myData } from "../data/mu-data";
function CareerTraits() {
  return (
    <div className="career-traits-container mt-[30px]">
      <h4>Career Traits</h4>
      {myData.careerTraits.map((item, index) => {
        return (
          <div className="trait-container" key={index}>
            <p>- {item.trait}</p>
            <span>{item.detail}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CareerTraits;
