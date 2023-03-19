import { myData } from "../data/mu-data";

function Header() {
  return (
    <div className="header-container w-screen">
      <div className="information-section">
        <div className="flex-container flex justify-center m-[100px]">
          <div className="image-section relative mr-[200px] ml-[100px]">
            <div className="profile-picture h-[300px] w-[300px] rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={myData.information.image}
                alt="mu-picture"
              />
            </div>
            <img
              className="absolute h-[120px] left-[220px] top-[200px]"
              src="/techup-skill-checkpoint-1/images/pictures/Combined Shape.png"
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
            <div className="contact-me-button mt-[30px] ml-[10px]">
              <p>{myData.information.address}</p>
              <div className="flex flex-row">
                <b>Email:&nbsp;</b>
                <a
                  className="font-playfair text-[18px] text-[#0699A6] font-black hover:text-[#59d4df] hover:underline transition-colors duration-300 mt-[3px]"
                  href="#"
                >
                  {myData.information.email}
                </a>
                <span>&nbsp;|&nbsp;</span>
                <a
                  className="font-playfair text-[18px] text-[#0699A6] font-black hover:text-[#59d4df] hover:underline transition-colors duration-300 mt-[3px]"
                  href={myData.information.gitHub}
                >
                  GitHub Profile
                </a>
                <span>&nbsp;|&nbsp;</span>
                <p>{myData.information.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background absolute bottom-[600px] w-screen -z-10 h-[700px] bg-[#000000] opacity-[.7] -skew-y-[6deg]"></div>
    </div>
  );
}

export default Header;
