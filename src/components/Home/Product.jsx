import React from "react";
import _Montres from "./Layout/_Montres";
import _Chaussure from "./Layout/_Chaussure";

function Product() {
    

  return (
    <div>
      <div className="Products">
        <h2>our product</h2>
        <div className="ControlBtn">
          <button>montres</button>
          <button>chaussures</button>
          <button>glass</button>
          <button>bags</button>
        </div>
      </div>

      <div className="selection">
        <_Montres />
        <_Chaussure />
      </div>
    </div>
  );
}

export default Product;
