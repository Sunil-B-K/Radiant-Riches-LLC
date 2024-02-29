import React from "react";
import "./Products.css";

import vector from "../../img/vecto2.png";
function Products({
  number,
  images,
  spanconent,
  conent1,
  conent2,
  ratting,
  rimage,
  top,
  rrating,
  name,
}) {
  return (
    <div className="products">
      <div className="cricle">{number}</div>
      <div className="img">
        <img src={images} />
        {name}
      </div>
      <div className="content">
        <p>
          {" "}
          <span>{spanconent}</span> {conent1}
        </p>
        <span>main highlights</span>
        <br />
        <p>{conent2}</p>
        <div className="seemore">
          <p>Show more</p>
          <img src={vector} />
        </div>
      </div>
      <div className="reveiws">
        <div className="rt">
          <div className="rating">
            <h1>{ratting}</h1>
            <p>{rrating}</p>

            <img src={rimage} />
          </div>
        </div>
        <div>
          <button className="r-button">veiw</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
