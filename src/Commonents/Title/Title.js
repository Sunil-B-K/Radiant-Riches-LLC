import React from "react";
import "./Title.css";
import imge1 from "../../img/img1.png";
import imge2 from "../../img/img2.png";
import imge3 from "../../img/img3.png";
function Title() {
  return (
    <div className="title">
      <p>Best Website builders in the US</p>
      <hr />
      <div className="points">
        <div className="highlights">
          <div className="update">
            <img src={imge1} />
            <p>Last Updated - February 22, 2020</p>
          </div>
          <div className="update">
            <img src={imge3} />
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className="update">
          <p>Top Relevant</p>
          <img src={imge2} />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Title;
