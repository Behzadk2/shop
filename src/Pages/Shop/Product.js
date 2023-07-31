import React from "react";

const Product = (props) => {

    <div className="col-3">
        <img src={props.data.productImage} alt="a" />       
         {props.data.productName}
    </div>

}

export default Product;