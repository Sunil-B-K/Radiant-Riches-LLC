import React from "react";
import "./Cdk.css";
import imge5 from "../../img/img5.png";
import imge9 from "../../img/img9.png";
import imge10 from "../../img/img10.png";
import vector from "../../img/vecto2.png";
function Cdk() {
  return (
    <div className="products">
      <div className="cricle">4</div>
      <div className="img">
        <img src={imge5} />
        CDK
      </div>
      <div className="content">
        <p>
          {" "}
          <span>CDK Resposive Builder: </span> An extensive library of widgets
          and apps, and detailed step-by-step guides
        </p>
        <p
          style={{
            color: "#074786",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "20px",
            backgroundColor: "#F2F4F7",
            height: "26px",
            width: "61px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          26% Off
        </p>
        <span>main highlights</span>
        <br />
        <div className="product4">
          <div className="build">
            <div className="cl">9.9</div>
            <p>building responsive</p>
          </div>
          <div className="build">
            <div className="cl">9.9</div>
            <p>building responsive</p>
          </div>
          <div className="build">
            <div className="cl">9.9</div>
            <p>building responsive</p>
          </div>
        </div>
        <div className="love">
          <p>Why we love it</p>
          <div className="l-conent">
            <img src={imge10} />
            <p>Documentation</p>
          </div>
          <div className="l-conent">
            <img src={imge10} />
            <p>Easy Use</p>
          </div>
          <div className="l-conent">
            <img src={imge10} />
            <p>Out of box</p>
          </div>
        </div>
        <div className="seemore">
          <p>Show more</p>
          <img src={vector} />
        </div>
      </div>
      <div className="reveiws">
        <div className="rt">
          <div className="rating">
            <h1>9.1</h1>
            <p>Very Good</p>

            <img src={imge9} />
          </div>
        </div>
        <div>
          <button className="r-button">veiw</button>
        </div>
      </div>
    </div>
  );
}

export default Cdk;
