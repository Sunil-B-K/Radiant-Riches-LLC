import React from "react";
import "./RealtedProduct.css";
import imge5 from "../../img/img5.png";
function RealtedProduct() {
  return (
    <div className="r-products">
      <div className="r-image">
        <img src={imge5} />
      </div>
      <div className="con">
        <div className="r-content">
          <p style={{ height: "28px", width: "69px" }}>20% Off</p>
          <p style={{ height: "28px", width: "107px" }}>Limited time</p>
        </div>
        <div className="center">
          <p>Webbuilder 1</p>
        </div>
        <div className="r-para">
          <p>Computer Modern clasic with wix support</p>
        </div>
        <div className="r-para2">
          <h1>$39.96</h1>
          <h2>$49.96</h2>
          <p>(20% Off)</p>
        </div>
        <div>
          <button className="r-button">veiw</button>
        </div>
      </div>
    </div>
  );
}

export default RealtedProduct;
