import React, { useContext } from "react";
import { PRODUCTS } from "../../Data/PRODUCTS";
import axios from "axios";
import Products from "./Products";
import Login from "../Login/Login";
import { userContext } from "../../App";


const Shop = ()=>{
  const {user} = useContext(userContext)
return(

      <React.Fragment>
     {user ? <h1>you are login Behzad Kazemi</h1> : <Login></Login>}
      <h1>Shop</h1>
      <div className="row">
      {PRODUCTS.map((i) => <Products key={i.id} propdata={i}></Products>)}
      </div>
      
      </React.Fragment>
)
}
export default Shop;