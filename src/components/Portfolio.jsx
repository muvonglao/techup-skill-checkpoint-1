import { myData } from "../data/mu-data";

function Portfolio() {
  return (
    <div className="career-traits-container mt-[30px]">
      <h4>My Portfolio</h4>
      {myData.portfolio.map((item, index) => {
        return (
          <div className="work-container" key={index}>
            <b>{item.workTitle}</b>
            {item.recentWork.map((item, index) => {
              return (
                <div className="recent-work-container" key={index}>
                  <a
                    className="font-playfair text-[#0699A6] font-black hover:text-[#59d4df] hover:underline transition-colors duration-300"
                    href={item.link}
                  >
                    {item.work} →
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
