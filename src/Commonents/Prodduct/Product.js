import React from "react";
import "./Producr.css";
import imge5 from "../../img/img5.png";
import imge6 from "../../img/img6.png";
import imge4 from "../../img/img4.png";
import imge7 from "../../img/img7.png";
import imge8 from "../../img/img8.png";
import vector from "../../img/Vector.png";
import Products from "../Products/Products";
import Cdk from "../Cdk/Cdk";
function Product() {
  return (
    <div className="product">
      <div className=" p-list">
        Home <img src={vector} />
        Hosting for all <img src={vector} />
        Hosting
        <img src={vector} /> Hosting6 <img src={vector} />
        Hosting5
      </div>
      <div className="pd">
        <div className="bset">
          <img src={imge6} />
          Best Choice
        </div>
        <Products
          number="1"
          // top="500px"
          images={imge5}
          spanconent="WixPro 72-Inch Responsive Website Builder-"
          conent1="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          conent2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          ratting="9.8"
          rimage={imge7}
          rrating="Exceptional"
          name="Biulder 1"
        />
        <div className="bset">
          <img src={imge4} />
          Best Value
        </div>
        <Products
          number="2"
          images={imge5}
          spanconent="SiteCraft 68-Inch Ultimate Web Design Studio-"
          conent1="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
          conent2="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
          ratting="9.5"
          rimage={imge8}
          rrating="Excellent"
          name="Biulder "
        />

        <Products
          number="3"
          images={imge5}
          spanconent="WixPro 72-Inch Responsive Website Builder-"
          conent1="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          conent2="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          ratting="9.3"
          rimage={imge7}
          name="Biulder 1"
        />
        <Cdk />
      </div>
    </div>
  );
}

export default Product;
