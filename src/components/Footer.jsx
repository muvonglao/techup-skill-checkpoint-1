import { myData } from "../data/mu-data";

function Footer() {
  return (
    <div className="footer-container flex flex-col justify-center items-center h-[300px] my-[110px] ">
      <div className="footer-no-background">
        <h2>Get in touch!</h2>
        <div className="contacts">
          <a
            className="font-playfair text-[36px] text-[#0699A6] font-bold hover:text-[#59d4df] hover:underline transition-colors duration-300 my-[50px]"
            href="#"
          >
            {myData.information.email}
          </a>
          <div className="social-network-icons flex justify-around my-[30px]">
            {myData.information.socialMedia.map((item, index) => {
              return (
                <a href={item.link} key={index}>
                  <img className="h-[25px]" src={item.icon} alt={item.name} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="background absolute top-[1730px] w-screen -z-10 h-[500px] bg-[#000000] opacity-[.7] -skew-y-[6deg] "></div>
    </div>
  );
}

export default Footer;
