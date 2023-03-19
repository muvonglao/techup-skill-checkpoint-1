import SkillSet from "./SkillSet";
import CareerTraits from "./CareerTraits";
import Interests from "./Interests";
import Portfolio from "./Portfolio";

function FirstColumn() {
  return (
    <div className="first-column-container w-[290px] mx-[175px]">
      <SkillSet />
      <CareerTraits />
      <Portfolio />
    </div>
  );
}

export default FirstColumn;
