import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

function SecondColumn() {
  return (
    <div className="second-column-container w-[620px]">
      <AboutMe />
      <div className="line bg-black opacity-[.7] w-[70px] h-[10px] my-[20px]"></div>
      <Education />
      <div className="line bg-black opacity-[.7] w-[70px] h-[10px] my-[20px]"></div>
      <Experience />
    </div>
  );
}

export default SecondColumn;
