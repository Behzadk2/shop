

function Products(props){

    return <>
     <div className="col-3">
        <h1>{props.propdata.productName}</h1>
        <img src={props.propdata.productImage}    />
     </div>
     </>
    
}

export default Products;