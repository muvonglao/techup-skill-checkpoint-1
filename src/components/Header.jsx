import { myData } from "../data/mu-data";

function Header() {
  return (
    <div className="header-container">
      <div className="information-section w-[2000px]">
        <div className="flex-container flex justify-center m-[100px]">
          <div className="image-section relative mr-[180px]">
            <div className="profile-picture h-[300px] w-[300px] rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={myData.information.image}
                alt="mu-picture"
              />
            </div>
            <img
              className="absolute h-[120px] left-[220px] top-[200px]"
              src="/images/pictures/Combined Shape.png"
              alt="image-decoration"
            />
          </div>
          <div className="profile-detail">
            <div className="career-position">
              <h4>{myData.information.position}</h4>
            </div>
            <div className="profile-name">
              <h1>
                {myData.information.name} <br /> {myData.information.lastName}
              </h1>
            </div>
            <div className="contact-me-button mt-[20px]">
              <button className="bg-[#000000] opacity-[.7] hover:bg-black hover:opacity-[.6] text-white rounded py-[15px] px-[22px] hover:underline ">
                <a href="#">CONTACT ME</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="background absolute bottom-[670px] w-screen -z-10 h-[700px] bg-[#000000] opacity-[.7] -skew-y-[6deg]"></div>
    </div>
  );
}

export default Header;
