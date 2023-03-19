import SkillSet from "./SkillSet";
import CareerTraits from "./CareerTraits";
import Interests from "./Interests";
import Portfolio from "./Portfolio";

function FirstColumn() {
  return (
    <div className="first-column-container w-[350px] mx-[120px]">
      <SkillSet />
      <CareerTraits />
      <Portfolio />
    </div>
  );
}

export default FirstColumn;
