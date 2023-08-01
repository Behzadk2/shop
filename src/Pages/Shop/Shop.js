import React from "react";
import { PRODUCTS } from "../../Data/PRODUCTS";
import axios from "axios";
import Products from "./Products";


const Shop = ()=>{
  
return(

      <React.Fragment>
      <h1>Shop</h1>
      <div className="row">
      {PRODUCTS.map((i) => <Products propdata={i}></Products>)}
      </div>
      </React.Fragment>
)
}
export default Shop;