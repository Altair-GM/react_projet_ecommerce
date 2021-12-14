import React from "react";
import banner from "../../assets/img/Banner-A-X.jpg";
import bag from "../../assets/img/Bag-A-X.jpeg";
import chaussures from "../../assets/img/Chaussures-A-X.jpg";
import pull from "../../assets/img/pull-E-X.jpg";
function Home() {
  return (
    <div>
      <div className="HomeBanner">
        <img src={banner} alt="" />
      </div>
      <div className="HomeCenter">
        <div>
          <div>
            <img src={bag} alt="" /> <button>coming son</button>
          </div>
          <div>
            <img src={chaussures} alt="" /> <button>coming son</button>{" "}
          </div>
          <div>
            <img src={pull} alt="" /> <button>coming son</button>{" "}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;



