import { myData } from "../data/mu-data";
function AboutMe() {
  return (
    <div className="about-me-container">
      <h3 className="mb-[20px]">About Me</h3>
      <p>{myData.information.aboutMe}</p>
    </div>
  );
}

export default AboutMe;
