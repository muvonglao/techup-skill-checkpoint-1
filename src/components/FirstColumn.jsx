import SkillSet from "./SkillSet";
import CareerTraits from "./CareerTraits";
import Interests from "./Interests";
import Portfolio from "./Portfolio";

function FirstColumn() {
  return (
    <div className="first-column-container w-[350] mx-[100px]">
      <SkillSet />
      <CareerTraits />
      <Interests />
      <Portfolio />
    </div>
  );
}

export default FirstColumn;
