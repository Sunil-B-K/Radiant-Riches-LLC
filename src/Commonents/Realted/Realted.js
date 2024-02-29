import React from "react";
import "./Realted.css";
import RealtedProduct from "../RelatedProduct/RealtedProduct";
function Realted() {
  return (
    <div className="realted">
      <p>Related deals you might like for</p>
      <div className="realtedproducts">
        <RealtedProduct />
        <RealtedProduct />
        <RealtedProduct />
      </div>
    </div>
  );
}

export default Realted;
