import React from "react";
import { PRODUCTS } from "../../Data/PRODUCTS";
import Product from "./Product";


const Shop = ()=>{



return(

    <>
      <h1>Shop</h1>
      <div className="row">
       {PRODUCTS.map((productdata)=> <Product data={productdata}></Product> )}
       {console.log(<Product></Product>)}
      </div>
    </>
)
}
export default Shop;